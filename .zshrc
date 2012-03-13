# Check /etc/zsh/zshrc for system defaults.

autoload omz

plugins=(archlinux git sprunge tmux zsh-syntax-highlighting)

zstyle :omz:style theme lars
zstyle ':omz:plugins:*' autostart on
# Comment out the following line if you wish for every z shell.
zstyle :omz:plugins:tmux autostart off
# cmd, t irc will launch irssi inside a tmux session named irc.
# dir, t code will launch a shell inside of tmux in $HOME/code.
zstyle :omz:plugins:tmux:cmd irc irssi
zstyle :omz:plugins:tmux:dir code $HOME/code

# Initiate all omz awesomeness!
omz init
# All *.zsh in .omz are sourced too, example you can put your
#  custom aliases in that file.

alias packer="packer-color" # primitive...
alias ex="aunpack"
alias pack="apack"
alias -g ø="/dev/null"
alias -g »="| grep -in --color=always"
alias -g …="| less -R"
alias cp="rsync -ahP"
#alias ls="ls --color=always"

D(){ dtach -cn $1 $@}

#alias pacman="pacman-color"
pacman() {
   case $1 in
       -S | -S[^sih]* | -R* | -U*)
           /usr/bin/sudo /usr/bin/pacman-color "$@" ;;
       *)
           /usr/bin/pacman-color "$@" ;;
   esac
}

export EDITOR="vim"
export PATH="/usr/lib/colorgcc/bin:$PATH:~/scripts" # compiler wrapper first!
# vim: ft=zsh
