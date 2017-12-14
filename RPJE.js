var is_online = false;

function LinkStart()
{
	if(is_online == false)
	{
		RPJE_GetEngine().Multiplayer_Connect_To("ws://" + document.getElementById('ip').value +":"+ document.getElementById('port').value +"/RPJE");
		is_online = true;
	}
}

function main()
{
	LoadJoystick();

	LoadUI_Events();

	RPJE_SetMainEngine(new RPJE_Engine(new RPJE_Config(16,9,4)));

	//Set Player img for all frames and all directions ( 4 frame loop sprites)
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player/player_Up_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player/player_Up_2.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player/player_Up_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player/player_Up_3.png");

	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player/player_Down_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player/player_Down_2.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player/player_Down_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player/player_Down_3.png");

	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player/player_Right_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player/player_Right_2.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player/player_Right_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player/player_Right_3.png");

	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player/player_Left_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player/player_Left_2.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player/player_Left_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player/player_Left_3.png");


	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player/player_Up_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player/player_Up_2.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player/player_Up_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player/player_Up_3.png");

	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player/player_Down_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player/player_Down_2.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player/player_Down_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player/player_Down_3.png");

	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player/player_Right_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player/player_Right_2.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player/player_Right_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player/player_Right_3.png");

	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player/player_Left_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player/player_Left_2.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player/player_Left_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player/player_Left_3.png");

	//Grounds
	RPJE_GetEngine().displayManager.loadTile("Assets/ground1.png", 0, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/ground2.png", 1, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/ground3.png", 2, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/ground4.png", 3, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/ground5.png", 4, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/grass.png", 5, true);

	//Ground Tiles are going from 0 to 5, we want a random ground
	RPJE_GetEngine().currentMap.randomizeMapGround(0,5);

	//Map objects ( you can't walk on Map Objects)
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/sign.png", 0, false); //Sign


	//Enable Joystick and disable Keyboard - DisableJoystick() for Keyboard only
	EnableJoystick();

	//world and maps JSON format
	RPJE_GetEngine().SetWorldMap(0, 0, '{"mapTiles":["0-0-1","1-0-2"],"mapObjects":["5-3-0"]}');
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


	//ACTION MANAGER
	RPJE_GetEngine().actionManager.Add_Action(new Action(0,  function(){ RPJE_Game_Dialog("Hello", null)}, "SIMPLE FENCE"));


	RPJE_StartEngine(40);


	//setTimeout(function(){ RPJE_Game_Dialog("RPJE by https://github.com/thomassifferlen - Role Playing Javascript Engine V1.0", function(){console.log("Dialog callback func")}); }, 100);

	//setTimeout(function(){ RPJE_Game_Dialog("RPJE by https://github.com/thomassifferlen - Role Playing Javascript Engine V1.0 - HTML controllers needs a touch device (Joystick is touchscreen only) - How to use doc is coming soon.", function(){console.log("Dialog callback func")}); }, 100);

}