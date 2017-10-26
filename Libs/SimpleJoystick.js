var Html_JoystickMain;
var Html_Joystick;

var JoystickReady = false;

var _JoystickMainWidth = 0;
var _JoystickMainHeigth = 0;

var _JoystickWidth = 0;
var _JoystickHeigth = 0;

var _PositionX = 0;
var _PositionY = 0;

function LoadJoystick()
{
	Html_JoystickMain = document.getElementById("JoystickMain");
	Html_Joystick = document.getElementById("Joystick");

	Html_JoystickMain.addEventListener('touchstart', Joystick_OnTouchStart, false);
	Html_JoystickMain.addEventListener('touchmove', Joystick_OnTouchMove, false);
	Html_JoystickMain.addEventListener('touchcancel', Joystick_OnTouchCancel, false);
	Html_JoystickMain.addEventListener('touchend', Joystick_OnTouchEnd, false);

	console.log("[INFO] Joystick Ready");

	_JoystickMainHeigth = $( "#JoystickMain" ).height();
	_JoystickMainWidth = $( "#JoystickMain" ).width();

	_JoystickHeigth = $( "#Joystick" ).height();
	_JoystickWidth = $( "#Joystick" ).width();

	$( "#Joystick" ).css( "left", (_JoystickMainWidth/2 - _JoystickWidth/2).toString() ) ;
	$( "#Joystick" ).css( "top",  (_JoystickMainHeigth/2 - _JoystickHeigth/2).toString() ) ;

	JoystickReady = true;
}

function Joystick_OnTouchStart(event)
{

}

function Joystick_OnTouchEnd()
{
	$( "#Joystick" ).css( "left", (_JoystickMainWidth/2 - _JoystickWidth/2).toString() ) ;
	$( "#Joystick" ).css( "top",  (_JoystickMainHeigth/2 - _JoystickHeigth/2).toString() ) ;

	_PositionX = _JoystickMainWidth/2;
	_PositionY = _JoystickMainHeigth/2;
}

function Joystick_OnTouchCancel()
{
	$( "#Joystick" ).css( "left", (_JoystickMainWidth/2 - _JoystickWidth/2).toString() ) ;
	$( "#Joystick" ).css( "top",  (_JoystickMainHeigth/2 - _JoystickHeigth/2).toString() ) ;

	_PositionX = _JoystickMainWidth/2;
	_PositionY = _JoystickMainHeigth/2;

	console.warn("[WARN] touchcancel event -> Joystick position reset");
}

function Joystick_OnTouchMove()
{	
	var tmpWidth = (event.touches[0].clientX  - $('#JoystickMain').offset().left - _JoystickWidth /2);
	var tmpHeigth =  (event.touches[0].clientY  - $('#JoystickMain').offset().top - _JoystickHeigth /2);

	if(tmpHeigth > _JoystickMainHeigth - _JoystickHeigth)
	{
		tmpHeigth =  _JoystickMainHeigth - _JoystickHeigth;
	}

	if(tmpWidth >  _JoystickMainWidth - _JoystickWidth)
	{
		tmpWidth = _JoystickMainWidth - _JoystickWidth;
	}

	if(tmpHeigth < 0)
	{
		tmpHeigth = 0;
	}

	if(tmpWidth < 0)
	{
		tmpWidth = 0;
	}

	$( "#Joystick" ).css( "left",  tmpWidth.toString() ) ;
	$( "#Joystick" ).css( "top",  tmpHeigth.toString() ) ;

	_PositionX = event.touches[0].clientX;
	_PositionY = event.touches[0].clientY;

}

function GetJoystick_X()
{
	if(JoystickReady)
	{
		var realX = _PositionX - _JoystickMainWidth /2;

		return realX;
	}
	else
	{
		console.warn("[WARN] GetJoystick_X -> JoystickReady is set to False - Please launch LoadJoystick function");
	}
	
}

function GetJoystick_Y()
{
	if(JoystickReady)
	{
		var realy = _PositionY - _JoystickMainHeigth /2;

		if (realy < 0)
		{
			realy = realy + (2* Math.abs(realy))
		}
		else
		{
			realy = - Math.abs(realy);
		}

		return realy;
	}
	else
	{
		console.warn("[WARN] GetJoystick_Y -> JoystickReady is set to False - Please launch LoadJoystick function");
	}
}

console.log("SimpleJoystick.js - By https://github.com/thomassifferlen");