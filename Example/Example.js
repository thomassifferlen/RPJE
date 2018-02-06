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

	RPJE_JS_Obj_Load_Player_Sprites(RPJE_CONFIG_playerSprites, false); // false == player
	RPJE_JS_Obj_Load_Player_Sprites(RPJE_CONFIG_GuestPlayerSprites, true); // true == guest player for multiplayer
	RPJE_JS_Obj_Load_Tile(RPJE_CONFIG_Tiles); //ground and map objects

	//Ground Tiles are going from 0 to 5, we want a random ground
	RPJE_GetEngine().currentMap.randomizeMapGround(0,5);

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