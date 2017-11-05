var loopInterval;
var MainEngine = "NULL";

function SetMainEngine(thisEngine)
{
	MainEngine = thisEngine;
}

function StartEngine()
{
	loopInterval = setInterval(function(){ MainEngine.tick(); }, 50);
}

function StopEngine()
{
	clearInterval(loopInterval);
}

class RPJE_Config
{
	constructor(nbr_Width, nbr_Height, worldSize)
	{
		this.nbr_Height = nbr_Height;
		this.nbr_Width = nbr_Width;
		this.worldSize = worldSize;
		this.tileSize = 16;
	}
}

class RPJE_Engine
{
	constructor(myRPJE_Config)
	{
		this.is_Ready = false;

		this.config = myRPJE_Config;
		this.currentMap = new Map(this.config.nbr_Width, this.config.nbr_Height);
		
		this.displayManager = new DisplayManager(myRPJE_Config);

		this.world = new Array();

		this.player = new Player("PlayerName");

		for(var x = 0 ; x < this.config.worldSize ; x++)
	    {
	      this.world[x] = new Array();

	      for(var y = 0 ; y < this.config.worldSize ; y++)
	      {
	        this.world[x][y] = "NULL";
	      }
	    }

	    this.world[0][0] = '{"mapTiles":["0-0-1","0-8-1","5-7-1","12-4-1","13-2-1","12-2-1","13-3-2","8-1-3","1-3-4","15-8-1","14-8-1","15-7-1"],"mapObjects":["3-3-7","4-3-3","5-3-3","6-3-3","7-3-3","8-3-8","3-4-4","8-4-5","8-5-9","7-5-2","3-5-6","4-5-1"]}';

	    this.currentMap.loadMapJSON(this.world[0][0]);

	    this.is_Ready = true;

	    this.displayManager.screenFit(16, 9);

	    console.log("[INFO] Engine Ready");
	}

	UpdateScreen()
	{
		this.displayManager.drawMap(this.currentMap, this.player);
	}

	tick()
	{
		if(this.is_Ready)
		{
			this.UpdateScreen();

			if( is_JoystickEnabled() )
	        {
	            if(GetJoystick_X_Percent() != 0 || GetJoystick_Y_Percent() != 0)
	            {
	            	this.player.is_Moving = true;
	            }
	            else
	            {
	            	this.player.is_Moving = false;
	            }
	        }

			this.player.Move(this.currentMap,this.config);
		}
		else
		{
			console.warn("[INFO] tick() -> Engine is_Ready is set to False");
		}
	}

}

console.log("RPJE by https://github.com/thomassifferlen - Role Playing Javascript Engine V0.1");