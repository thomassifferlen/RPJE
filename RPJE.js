function main()
{
	LoadJoystick();

	RPJE_SetMainEngine(new RPJE_Engine(new RPJE_Config(16,9,4)));

	//Enable Joystick and disable Keyboard - DisableJoystick() for Keyboard only
	EnableJoystick();


	//world and maps
	RPJE_GetEngine().SetWorldMap(0 , 0, '{"mapTiles":["0-0-1","0-8-1","5-7-1","12-4-1","13-2-1","12-2-1","13-3-2","8-1-3","1-3-4","15-8-1","14-8-1","15-7-1"],"mapObjects":["3-3-7","4-3-3","5-3-3","6-3-3","7-3-3","8-3-8","3-4-4","8-4-5","8-5-9","7-5-2","3-5-6","4-5-1"]}');
	RPJE_GetEngine().currentMap.loadMapJSON(RPJE_GetEngine().world[0][0]);

	//This Will execute this function each engine tick
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

	var RPJE_Tick_Func_Joystick = new RPJE_Tick_Function(0, joystickTick_Func);
	RPJE_GetEngine().Add_Tick_Function(RPJE_Tick_Func_Joystick);

	//RPJE_GetEngine().SetEnabled_Tick_Function_By_ID(0, false); //this disable the created tick func

	RPJE_StartEngine();
}