
xset -b &
urxvtd &
pyLoadCore --daemon &
{
start-pulseaudio-x11
# mpd
# mpc pause
} &


exec awesome
