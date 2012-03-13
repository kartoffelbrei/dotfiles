// ==UserScript==
// @name           4sight
// @version        120220
// @description    Search for threads on 4chan
// @author         Couchy
// @homepage       http://userscripts.org/users/112858
// @namespace      http://userscripts.org/users/112858
// @include        http://boards.4chan.org/*
// @exclude        http://boards.4chan.org/f/*
// ==/UserScript==

var board = document.location.href.match(/http:\/\/boards\.4chan\.org(\/.*?\/)/i);
var index = "fs_Index_" + board[1];
var timestamp = "fs_Timestamp_" + board[1];
var threads = window.localStorage.getItem(index) ? function(){try{return JSON.parse(window.localStorage.getItem(index));}catch(e){return {};}}() : {};
                                                                                                            
var main = document.getElementsByName("delform")[0];
var fs_menu_toggle = document.createElement("a");
fs_menu_toggle.setAttribute("style", "cursor: pointer; float: right;");
fs_menu_toggle.innerHTML = "Search Board";
main.parentNode.insertBefore(fs_menu_toggle, main);
var fs_menu = document.createElement("div");
fs_menu.setAttribute("style", "width: 100%; display: none;");
fs_menu.innerHTML = ""
    + "<table style='width: 100%; height: 450px; table-layout: fixed; border-collapse: collapse;' border='1'>"
    +   "<tr>"
    +     "<td style = 'vertical-align: top;'>"
    +       "<table style='table-layout: fixed;'>"
    +         "<tr><td colspan='2' style='text-align: center;'><input id='fs_search'></input></td></tr>"
    //    +         "<tr><td>Case Sensitive</td><td><input id='fs_case' type='checkbox'></input></td></tr>"
    +         "<tr><td>Comments</td><td><input id='fs_comments' name='fs_mode' type='radio' checked='true'></input></td></tr>"
    +         "<tr><td>Subjects</td><td><input id='fs_subjects' name='fs_mode' type='radio'></input></td></tr>"
    +         "<tr><td>Names</td><td><input id='fs_names' name='fs_mode' type='radio'></input></td></tr>"
    +         "<tr><td colspan='2' style='text-align: center;'><input id='fs_index' type='button' value='Update Index'></input></td></tr>"
    +         "<tr><td colspan='2' style='text-align: center;'><input id='fs_delindex' type='button' value='Delete Index'></input></td></tr>"
    +         "<tr><td colspan='2' style='vertical-align: top;'><textarea id='fs_status' style='width: 100%; height: 305px; white-space: nowrap; overflow: auto;'></textarea></td></tr>"
    +       "</table>"
    +     "<td colspan='2' style='height: 450px;'>"
    +       "<div style='height: 100%; overflow-y: auto;'><table id='fs_data' style='width:100%; border-collapse: collapse;' border='1'></div>"
    +       "</table>"
    +     "</td>"
    +     "<td colspan='3' style='height: 100%'>"
    +       "<div id='fs_preview' style='width: 100%; height: 100%; text-align: left; overflow-y: auto;'></div>"
    +     "</td>"
    +   "</tr>"
    + "</table>";
main.parentNode.insertBefore(fs_menu, main);

function $(id){return document.getElementById(id);}
var fs_search = $("fs_search");
//var fs_case = $("fs_case");
var fs_comments = $("fs_comments");
var fs_subjects = $("fs_subjects");
var fs_names = $("fs_names");
var fs_index = $("fs_index");
var fs_delindex = $("fs_delindex");
var fs_status = $("fs_status");
var fs_data = $("fs_data");
var fs_preview = $("fs_preview");

function toggleMenu()
{
    if(fs_menu.style.display == "none")
    {
        main.style.display = "none";
        fs_menu.style.display = "";
        fs_menu_toggle.innerHTML = "Close Search";
        window.scrollTo(0, document.body.scrollHeight);
    }
    else
    {
        main.style.display = "";
        fs_menu.style.display = "none";
        fs_menu_toggle.innerHTML = "Search Board";
    }
}

function status(msg)
{
    fs_status.value += "\n" + msg;
    fs_status.scrollTop = fs_status.scrollHeight;
}

function stripTags(html)
{
    var tags = [];
    while(/<.*?>/i.test(html))
    {
        tags.push(html.match(/<.*?>/i)[0]);
        html = html.replace(/<.*?>/i, "�");
    }
    return [html, tags];
}

function replaceTags(stripped)
{
    var html = stripped[0];
    var tags = stripped[1];
    for(var i = 0; i < tags.length; i++)
    {
        html = html.replace(/�/i, tags[i]);
    }  
    return html;
}

function thread(html, meta)
{
    this.meta = meta;
    this.html = html;
    this.no = html.match(/<a href="res\/([0-9]*)">Reply<\/a>/i)[1];
    this.subject = html.match(/<span class="filetitle">([\s\S]*?)<\/span>/i)[1];
    this.name = html.match(/<span class="postername">([\s\S]*?)<\/span>/i)[1];
    this.comment = html.match(/<blockquote>([\s\S]*?)<\/blockquote>/i)[1];
    this.omitted = html.match(/<span class="omittedposts">([\s\S]*?)<\/span>/i);
    if(this.omitted != null){this.omitted = this.omitted[1];}
    else{this.omitted = "";}
}

function delIndex()
{
    if(confirm("Are you sure you want to delete the saved index for " + board[1] + "?"))
    {
        window.localStorage.removeItem(index);
        window.localStorage.removeItem(timestamp);
        status("Index deleted.");
    }
}

function doIndex(pg)
{   
    xhr = new XMLHttpRequest();
    xhr.open("GET", board[0] + pg, true);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.onreadystatechange = function(aEvt)
        {
            if(xhr.readyState == 4)
            {
                if(xhr.status == 200)
                {
                    var html = xhr.responseText.match(/(<span class="filesize">|<img src="http:\/\/static\.4chan\.org\/image\/filedeleted\.gif" alt="File deleted\.">)([^<]|<[^h]|<h[^r]|<hr[^>])*?<span id="nothread[0-9]*?">[^]*?(<\/blockquote><span class="omittedposts">[^]*?<\/span>|<\/blockquote>)/gi);
                    if(html)
                    {
                        var l = html.length;
                        status("Found " + l + " threads on page " + pg + "...")
                        for(var i = 0; i < l; i++)
                        {
                            threads["t" + pg + i] = new thread(html[i], "Page " + pg + " Thread " + i);
                        }
                    }
                    else
                    {
                        status("No threads found on page " + pg + "...");
                    }
                }
                
                else
                {
                    status("Error loading page " + pg + "...");
                }
                
                if(pg < 15)
                {
                    doIndex(pg + 1);
                }
                
                else
                {
                        var time = new Date().toLocaleString();
                        status("Saving index...");
                        window.localStorage.setItem(index, JSON.stringify(threads));
                        window.localStorage.setItem(timestamp, time);
                        status("Index for " + board[1] +" last updated " + time);
                }
            }
        };
    xhr.send(null);
}

function search()
{
    var query = fs_search.value.toLowerCase();
    var pattern = new RegExp(query, "gi");

    if(query != "")
    {
        fs_data.innerHTML = "";
        fs_preview.innerHTML = "";
        
        var com_e = fs_comments.checked;
        var sub_e = fs_subjects.checked;
        var name_e = fs_names.checked;

        for(var item in threads)
        {
            var thread = threads[item];
            var comstrip = stripTags(thread.comment);
            var com = comstrip[0];
            var sub = thread.subject;
            var namestrip = stripTags(thread.name);
            var name = namestrip[0];
            var omit = thread.omitted;

            if((com_e && com.toLowerCase().indexOf(query) != -1) || (sub_e && sub.toLowerCase().indexOf(query) != -1) || (name_e && name.toLowerCase().indexOf(query) != -1))
            {
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                td1.innerHTML = "<a href='http://boards.4chan.org" + board[1] + "res/" + thread.no + "'>>>" + thread.no + "</a>";
                var td2 = document.createElement("td");
                td2.setAttribute("data", thread.html);
                td2.setAttribute("tinfo", "(" + thread.meta + ") " + omit + "<br/>");
                td2.setAttribute("url", "http://boards.4chan.org" + board[1] + "res/" + thread.no);
                td2.setAttribute("style", "cursor: pointer;");
                td2.addEventListener("mouseover", function(e){fs_preview.innerHTML = e.currentTarget.getAttribute("tinfo") + e.currentTarget.getAttribute("data");}, true);
                td2.addEventListener("click", function(e){window.open(e.currentTarget.getAttribute("url"));}, true);
                
                if(com_e)
                {
                    td2.innerHTML = replaceTags([com.replace(pattern, "<b style='font-weight: bold; background-color: yellow;'>" + query + "</b>"), comstrip[1]]);
                }
                else if(sub_e)
                {
                    td2.innerHTML = sub.replace(pattern, "<b style='font-weight: bold; background-color: yellow;'>" + query + "</b>");
                }
                else if(name_e)
                {
                    td2.innerHTML = replaceTags([name.replace(pattern, "<b style='font-weight: bold; background-color: yellow;'>" + query + "</b>"), namestrip[1]]);
                }
                tr.appendChild(td1);
                tr.appendChild(td2);
                fs_data.appendChild(tr);
            }       
        }
    }
}

fs_menu_toggle.addEventListener("click", function(){toggleMenu();}, false);
fs_search.addEventListener("keyup", function(){search();}, false);
//fs_case.addEventListener("click", function(){search();}, false);
fs_comments.addEventListener("click", function(){search();}, false);
fs_subjects.addEventListener("click", function(){search();}, false);
fs_names.addEventListener("click", function(){search();}, false);
fs_index.addEventListener("click", function(){status("Updating index..."); threads = {}; doIndex(0);}, false);
fs_delindex.addEventListener("click", function(){delIndex();}, false);

window.localStorage.getItem(timestamp) ? status("Index for " + board[1] + " last updated " + window.localStorage.getItem(timestamp)) : status("No saved index for " + board[1] + "!");