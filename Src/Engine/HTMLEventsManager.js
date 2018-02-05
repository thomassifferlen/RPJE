var _JoystickEnabled = false;

function EnableJoystick()
{
	LoadJoystick();
	
	_JoystickEnabled = true;

	var joystickTick_Func = function()
	{
		if( is_JoystickEnabled() )
	    {
	        if(GetJoystick_X_Percent() != 0 || GetJoystick_Y_Percent() != 0)
	        {
	        	RPJE_GetEngine().player.is_Moving = true;
	        }
	        else
	        {
	        	RPJE_GetEngine().player.is_Moving = false;
	        }
	    }
	};

	RPJE_GetEngine().Add_Tick_Function(new RPJE_Tick_Function(0, joystickTick_Func));
}

function DisableJoystick()
{
	_JoystickEnabled = false;
}

function is_JoystickEnabled()
{
	return _JoystickEnabled;
}

window.onresize = function(event)
{
    RPJE_GetEngine().displayManager.screenFit(RPJE_GetEngine().config.nbr_Width, RPJE_GetEngine().config.nbr_Height);
};

//This Will execute this function each engine tick


console.log("[INFO] EventsManager Loaded");