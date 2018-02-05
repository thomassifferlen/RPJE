function Add_HTML_Joystick()
{
	document.body.innerHTML += '<div class="JoystickZone noselect"><div class="JoystickMain" id="JoystickMain"><div class="Joystick" id="Joystick"></div></div></div>';
}

function Add_HTML_Dialog_Zone()
{
	document.body.innerHTML += '<div id="Dialog" class="Dialog"></div>';
}

function Add_HTML_Game_Responsive_Canvas()
{
	document.body.innerHTML += '<div class="child"></div><div class="heightFlex"><div class="child"></div><div id="GameZone"><canvas id="Game" class="NoCanvasAntialias"></canvas></div><div class="child"></div></div><div class="child"></div>';	
}

