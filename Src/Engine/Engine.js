
var MainEngine = "NULL";


class RPJE_Config
{
	constructor(nbr_Width, nbr_Height, worldSize, tileSize)
	{
		this.nbr_Height = nbr_Height;
		this.nbr_Width = nbr_Width;
		this.worldSize = worldSize;
		this.tileSize = tileSize;
		this.EngineSpeed = 40;
	}
}

class RPJE_Tick_Function
{
	constructor(id, func)
	{
		this.id = id;
		this.func = func;
		this.enabled = true;
	}
	
	run()
	{
		if(this.enabled)
		{
			this.func();
		}
	}
}

class RPJE_Engine
{
	constructor(myRPJE_Config)
	{
		Add_HTML_Game_Responsive_Canvas();
		Add_HTML_Dialog_Zone();
		Add_HTML_Joystick();

		this.is_Ready = false;

		this.config = myRPJE_Config;
		this.currentMap = new Map(this.config.nbr_Width, this.config.nbr_Height);
		
		this.displayManager = new DisplayManager(myRPJE_Config);

		this.actionManager = new ActionManager();

		this.scenarioManager = new ScenarioManager();

		this.networkManager = new NetworkManager(Tools_randomSTR());

		this.world = new Array();

		this.player = new Player("PlayerName");

		this.NpcArray = new Array();

		this.player_Guest_Multiplayer = new Player("Guest");

		for(var x = 0 ; x < this.config.worldSize ; x++)
	    {
	      this.world[x] = new Array();

	      for(var y = 0 ; y < this.config.worldSize ; y++)
	      {
	        this.world[x][y] = "NULL";
	      }
	    }

	    this.is_Ready = true;
	    this.is_Multiplayer = false;

	    this.displayManager.screenFit(this.config.nbr_Width, this.config.nbr_Height);

	    this.TickFunc_Array = [];

	    console.log("[INFO] Engine Ready");
	}

	Multiplayer_Connect_To(str)
	{
		this.networkManager.connect(str);
		this.is_Multiplayer = true;
		console.log("[INFO] Multiplayer to : " + str);
	}

	SetWorldMap(x ,y, json)
	{
		 this.world[x][y] = json;
	}

	SetEngineSpeed(speed_ms)
	{
		this.config.EngineSpeed = speed_ms;
	}

	GetEngineSpeed(speed_ms)
	{
		return this.config.EngineSpeed;
	}

	UpdateScreen()
	{
		this.displayManager.drawMap(this.currentMap, this.player);
	}

	UpdateMultiplayerScreenParts(net_Players_Array)
	{
		for( var i = 0 ; i < net_Players_Array.length ; i++)
		{
			if(net_Players_Array[i].id != this.networkManager.id_client) // si c'est pas le player local
			{
				this.player_Guest_Multiplayer.position.x = net_Players_Array[i].posx;
				this.player_Guest_Multiplayer.position.y = net_Players_Array[i].posy;
				this.player_Guest_Multiplayer.spriteNumber = parseInt(net_Players_Array[i].spriteNumber);
				this.player_Guest_Multiplayer.direction = parseInt(net_Players_Array[i].direction);

				this.displayManager.drawPlayer(this.player_Guest_Multiplayer);
			}
		}
	}

	Add_Tick_Function( newFunction )
	{
		this.TickFunc_Array.push(newFunction);
	}

	SetEnabled_Tick_Function_By_ID( id , is_enabled)
	{

		for( var i = 0 ; i < this.TickFunc_Array.length ; i++ )
        {
        	if(this.TickFunc_Array[i].id == id)
        	{
        		this.TickFunc_Array[i].enabled = is_enabled;
        	}
        }
	}

	Action()
	{
		this.actionManager.Run_Action_By_ID(this.player.GetFacingMapObject(this.currentMap, this.config));
	}

	tick()
	{
		if(this.is_Ready)
		{
	        for( var i = 0 ; i < this.TickFunc_Array.length ; i++ )
	        {
	        	if(this.TickFunc_Array[i] != null)
	        	{
	        		this.TickFunc_Array[i].run();
	        	}
	        }

			var is_move = this.player.Move(this.currentMap,this.config);

			this.UpdateScreen();

			if(this.is_Multiplayer) // si on est en multijoueur
			{
				if(this.networkManager.Socket.readyState === this.networkManager.Socket.OPEN)
				{
	   				this.networkManager.send_Player_To_Server(this.player);

					if(this.networkManager.getLastResponse() != "NULL")
					{
						var networkPlayers = JSON.parse( this.networkManager.getLastResponse() );

						//console.log(this.networkManager.getLastResponse() );
						//console.log(networkPlayers["Players"]);

						this.UpdateMultiplayerScreenParts(networkPlayers["Players"])
					}
				}
				else if(this.networkManager.Socket.readyState === this.networkManager.Socket.CLOSED)
				{
	   				console.log("[INFO] Closing Multiplayer ....");
	   				this.is_Multiplayer = false;
				}	
			}
		}
		else
		{
			console.warn("[INFO] tick() -> Engine is_Ready is set to False");
		}
	}
}

console.log("RPJE by https://github.com/thomassifferlen - Role Playing Javascript Engine V1.0");