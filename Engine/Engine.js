var loopInterval;
var MainEngine = "NULL";

function RPJE_SetMainEngine(thisEngine)
{
	MainEngine = thisEngine;
}

function RPJE_StartEngine()
{
	loopInterval = setInterval(function(){ MainEngine.tick(); }, 50);
}

function RPJE_StopEngine()
{
	clearInterval(loopInterval);
}

function RPJE_GetEngine()
{
	return MainEngine;
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

	    this.is_Ready = true;

	    this.displayManager.screenFit(this.config.nbr_Width, this.config.nbr_Height);

	    this.TickFunc_Array = [];

	    console.log("[INFO] Engine Ready");
	}

	SetWorldMap(x ,y, json)
	{
		 this.world[x][y] = json;
	}

	UpdateScreen()
	{
		this.displayManager.drawMap(this.currentMap, this.player);
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

			this.player.Move(this.currentMap,this.config);

			this.UpdateScreen();
		}
		else
		{
			console.warn("[INFO] tick() -> Engine is_Ready is set to False");
		}
	}

}

console.log("RPJE by https://github.com/thomassifferlen - Role Playing Javascript Engine V0.1");