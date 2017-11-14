function main()
{
	LoadJoystick();

	RPJE_SetMainEngine(new RPJE_Engine(new RPJE_Config(16,9,4)));

	//Grounds
	RPJE_GetEngine().displayManager.loadTile("Assets/ground.png", 0, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/grass.png", 1, true);
	RPJE_GetEngine().displayManager.loadTile("Assets/Flowers/red_flower_3.png", 2, true);

	//Map objects
	RPJE_GetEngine().displayManager.loadTile("Assets/Fences/objects_fence_3.png", 0, false); //Fence
	RPJE_GetEngine().displayManager.loadTile("Assets/Fences/objects_fence_4.png", 1, false); //Fence 2

	//Enable Joystick and disable Keyboard - DisableJoystick() for Keyboard only
	EnableJoystick();

	//world and maps
	RPJE_GetEngine().SetWorldMap(0, 0, '{"mapTiles":["0-0-1","1-0-2"],"mapObjects":["2-0-0","3-0-1"]}');
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

	RPJE_GetEngine().Add_Tick_Function(new RPJE_Tick_Function(0, joystickTick_Func));


	//Example of disabled tick function
	RPJE_GetEngine().Add_Tick_Function(new RPJE_Tick_Function(1, function(){ console.log("tick"); }));
	RPJE_GetEngine().SetEnabled_Tick_Function_By_ID(1, false); //this disable the created tick func at ID = 1

	RPJE_StartEngine();
}