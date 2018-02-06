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
	RPJE_SetMainEngine(new RPJE_Engine(new RPJE_Config(16,9,4, 16)));

	//Set Player_Purple img for all frames and all directions ( 4 frame loop sprites)
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player_Purple/player_Up_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player_Purple/player_Up_2.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player_Purple/player_Up_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player_Purple/player_Up_3.png");

	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player_Purple/player_Down_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player_Purple/player_Down_2.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player_Purple/player_Down_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player_Purple/player_Down_3.png");

	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player_Purple/player_Right_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player_Purple/player_Right_2.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player_Purple/player_Right_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player_Purple/player_Right_3.png");

	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player_Purple/player_Left_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player_Purple/player_Left_2.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player_Purple/player_Left_1.png");
	RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player_Purple/player_Left_3.png");


	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player_Purple/player_Up_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player_Purple/player_Up_2.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player_Purple/player_Up_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_UP, "Assets/Player_Purple/player_Up_3.png");

	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player_Purple/player_Down_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player_Purple/player_Down_2.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player_Purple/player_Down_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_DOWN, "Assets/Player_Purple/player_Down_3.png");

	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player_Purple/player_Right_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player_Purple/player_Right_2.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player_Purple/player_Right_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_RIGHT, "Assets/Player_Purple/player_Right_3.png");

	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player_Purple/player_Left_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player_Purple/player_Left_2.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player_Purple/player_Left_1.png");
	RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_LEFT, "Assets/Player_Purple/player_Left_3.png");

	//Grounds
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground1.png", 0, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground2.png", 1, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground3.png", 2, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground4.png", 3, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground5.png", 4, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/grass.png", 5, true);

	RPJE_GetEngine().displayManager.loadTile("Assets/World/plant.png", 6, true);

	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground_indoor.png", 7, true);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground_indoor2.png", 8, true);

	RPJE_GetEngine().displayManager.loadTile("Assets/World/black.png", 99, true);

	//Ground Tiles are going from 0 to 5, we want a random ground
	RPJE_GetEngine().currentMap.randomizeMapGround(0,5);

	//Map objects ( you can't walk on Map Objects)
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/sign.png", 0, false); //Sign

	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock1.png", 1, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock2.png", 2, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock3.png", 3, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock4.png", 4, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock5.png", 5, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock6.png", 6, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock7.png", 7, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock8.png", 8, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock9.png", 9, false);

	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/woodsticks.png", 10, false);

	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_small_1.png", 11, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_small_2.png", 12, false);

	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_TV_1.png", 13, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_TV_2.png", 14, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_TV_3.png", 15, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_TV_4.png", 16, false);

	RPJE_GetEngine().displayManager.loadTile("Assets/World/black.png", 99, false);


	//world and maps JSON format
	RPJE_GetEngine().SetWorldMap(0, 0, WORLD_MAPS_TEST1);
	RPJE_GetEngine().currentMap.loadMapJSON(RPJE_GetEngine().world[0][0]);

	// ENABLE LIGHT IN AMBIANT SHADOW
	RPJE_GetEngine().currentMap.setAmbiantLight(3);
	RPJE_GetEngine().currentMap.setLightSource(7,5,0);
	RPJE_GetEngine().currentMap.setLightSource(6,5,0);
	RPJE_GetEngine().currentMap.setLightSource(6,4,0);
	RPJE_GetEngine().currentMap.setLightSource(7,4,0);
	RPJE_GetEngine().currentMap.EnableLights = true;

	//Example of disabled tick function
	RPJE_GetEngine().Add_Tick_Function(new RPJE_Tick_Function(1, function(){ console.log("tick"); }));
	RPJE_GetEngine().SetEnabled_Tick_Function_By_ID(1, false); //this disable the created tick func at ID = 1

	//ACTION MANAGER
	RPJE_GetEngine().actionManager.Add_Action(new Action(0,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(0); }, "SIMPLE FENCE"));

	RPJE_GetEngine().actionManager.Add_Action(new Action(1,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(1); }, ""));
	RPJE_GetEngine().actionManager.Add_Action(new Action(2,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(1); }, ""));
	RPJE_GetEngine().actionManager.Add_Action(new Action(3,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(1); }, ""));
	RPJE_GetEngine().actionManager.Add_Action(new Action(4,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(1); }, ""));
	RPJE_GetEngine().actionManager.Add_Action(new Action(5,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(1); }, ""));
	RPJE_GetEngine().actionManager.Add_Action(new Action(6,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(1); }, ""));
	RPJE_GetEngine().actionManager.Add_Action(new Action(7,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(1); }, ""));
	RPJE_GetEngine().actionManager.Add_Action(new Action(8,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(1); }, ""));
	RPJE_GetEngine().actionManager.Add_Action(new Action(9,  function(){ RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(1); }, ""));

	//STEPS SCENARIO TEST
	RPJE_GetEngine().scenarioManager.Add_Scenario_Step(new ScenarioStep("Tutorial Step 0", function(){ RPJE_Game_Dialog("Hello welcome to RPJE scenario feature ! This is step 0, action on the mountain to unlock step 1 please !", null); }, 0));

	var callback_tmp = function(){RPJE_GetEngine().scenarioManager.Run_ScenarioStep_By_ID(2);};

	var newStep = new ScenarioStep("Tutorial Step 1", function(){ RPJE_Game_Dialog("Great, this is step 1 ! This step can't be done without doing step 0", callback_tmp); }, 1)
	newStep.requiredStepsID.push(0); // We NEED step 0 to be done already

	RPJE_GetEngine().scenarioManager.Add_Scenario_Step(newStep);

	var newStep2 = new ScenarioStep("Tutorial Step 2", function(){ RPJE_Game_Dialog("Oh and this is step 2 ! Auto-Launched when step 1 dialog end !", null); }, 2)
	RPJE_GetEngine().scenarioManager.Add_Scenario_Step(newStep2);

	RPJE_StartEngine(50);

	EnableJoystick();
	LoadUI_Events();

}