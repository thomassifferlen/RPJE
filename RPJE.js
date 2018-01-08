var is_online = false;

var Popup_canvas_array = new Array();

CamvasTestImg1 = new Image();
CamvasTestImg1.src = "Assets/Blocks/1.png";

CamvasTestImg2 = new Image();
CamvasTestImg2.src = "Assets/Blocks/2.png";

CamvasTestImg3 = new Image();
CamvasTestImg3.src = "Assets/Blocks/3.png";

CamvasTestImg4 = new Image();
CamvasTestImg4.src = "Assets/Blocks/4.png";

for(var x = 0 ; x < 10 ; x++)
{
 	Popup_canvas_array[x] = new Array();

  for(var y = 0 ; y < 10 ; y++)
  {
    	Popup_canvas_array[x][y] = 0;
  }
}

function Update_Popup()
{
	var canvas = document.getElementById('PopupCanvas');
    var ctx = canvas.getContext('2d');

  	ctx.canvas.width = 320;
  	ctx.canvas.height = 320;

	ctx.clearRect(0, 0, ctx.canvas.width,ctx.canvas.height);

	for(var x = 0 ; x < 10 ; x++)
	{
	  for(var y = 0 ; y < 10 ; y++)
	  {
	  		switch(Popup_canvas_array[x][y])
	  		{
	  			case 1 :
 					ctx.drawImage(CamvasTestImg1 , x * 32, y * 32);
	  			break;

	  			case 2 :
 					ctx.drawImage(CamvasTestImg2 , x * 32, y * 32);
	  			break;

	  			case 3 :
 					ctx.drawImage(CamvasTestImg3 , x * 32, y * 32);
	  			break;

	  			case 4 :
 					ctx.drawImage(CamvasTestImg4 , x * 32, y * 32);
	  			break;

	  			default :

	  			break;
	  		}
	  }
	}

	//console.log("Update_Popup");
}

function LinkStart()
{
	if(is_online == false)
	{
		RPJE_GetEngine().Multiplayer_Connect_To("ws://" + document.getElementById('ip').value +":"+ document.getElementById('port').value +"/RPJE");
		is_online = true;
	}
}

function Popup_Test() //launched in action manager when action to a rock object
{
	RPJE_Game_DisplayPopup(true);

	for(var x = 0 ; x < 10 ; x++)
	{
	  for(var y = 0 ; y < 10 ; y++)
	  {
	    	Popup_canvas_array[x][y] = Math.floor((Math.random() * 2) + 1);
	  }
	}

  	Update_Popup();


	$("#PopupCanvas").on("touchstart", function(e)
	{

		var offset = $(this).offset();

		var relativeX = (e.originalEvent.touches[0].pageX - offset.left);
		var relativeY = (e.originalEvent.touches[0].pageY - offset.top);

		//console.log("X: " + relativeX + "  Y: " + relativeY);

	    var CanvasWidth = parseInt(document.getElementById("PopupCanvas").style.width.substring(0, document.getElementById("PopupCanvas").style.width.length - 1));

	    //console.log(CanvasWidth);

	    var CellSize = (32 * CanvasWidth) / 320;


	    var ArrayPosX = Math.floor(relativeX / CellSize);
		var ArrayPosY = Math.floor(relativeY / CellSize);

		if(ArrayPosX < 10 &&  ArrayPosY < 10 && ArrayPosX >= 0 &&  ArrayPosY >= 0)
		{
			if (Popup_canvas_array[ArrayPosX][ArrayPosY] > 0 && Popup_canvas_array[ArrayPosX][ArrayPosY] < 5)
			{
				Popup_canvas_array[ArrayPosX][ArrayPosY] += 2 ;
			}
		}

		if(ArrayPosX-1 < 10 &&  ArrayPosY < 10 && ArrayPosX-1 >= 0 &&  ArrayPosY >= 0)
		{
			if (Popup_canvas_array[ArrayPosX-1][ArrayPosY] > 0 && Popup_canvas_array[ArrayPosX-1][ArrayPosY] < 5)
			{
				Popup_canvas_array[ArrayPosX-1][ArrayPosY] ++ ;
			}
		}

		if(ArrayPosX+1 < 10 &&  ArrayPosY < 10 && ArrayPosX+1 >= 0 &&  ArrayPosY >= 0)
		{
			if (Popup_canvas_array[ArrayPosX+1][ArrayPosY] > 0 && Popup_canvas_array[ArrayPosX+1][ArrayPosY] < 5)
			{
				Popup_canvas_array[ArrayPosX+1][ArrayPosY] ++ ;
			}
		}

		if(ArrayPosX < 10 &&  ArrayPosY-1 < 10 && ArrayPosX >= 0 &&  ArrayPosY-1 >= 0)
		{
			if (Popup_canvas_array[ArrayPosX][ArrayPosY-1] > 0 && Popup_canvas_array[ArrayPosX][ArrayPosY-1] < 5)
			{
				Popup_canvas_array[ArrayPosX][ArrayPosY-1] ++ ;
			}
		}

		if(ArrayPosX < 10 &&  ArrayPosY+1 < 10 && ArrayPosX >= 0 &&  ArrayPosY+1 >= 0)
		{
			if (Popup_canvas_array[ArrayPosX][ArrayPosY+1] > 0 && Popup_canvas_array[ArrayPosX][ArrayPosY+1] < 5)
			{
				Popup_canvas_array[ArrayPosX][ArrayPosY+1] ++ ;
			}
		}

	  	Update_Popup();

	});

}

function main()
{
	LoadJoystick();

	LoadUI_Events();

	RPJE_SetMainEngine(new RPJE_Engine(new RPJE_Config(16,9,4)));

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


	//Enable Joystick and disable Keyboard - DisableJoystick() for Keyboard only
	EnableJoystick();

	//world and maps JSON format
	RPJE_GetEngine().SetWorldMap(0, 0, '{"mapTiles":["7-0-6","8-1-6","9-1-6","10-1-6","9-2-6","12-0-6","15-0-6","14-0-6","15-1-6"],"mapObjects":["8-0-10","9-0-10","10-0-10","11-0-10","4-2-0", "0-0-5","1-0-5","2-0-6","0-1-8","1-1-8","2-1-9","0-8-5","1-8-5","2-8-6", "0-7-2", "1-7-2", "2-7-3" , "15-4-5", "15-3-5", "14-3-4", "14-4-4", "14-2-1", "15-2-2", "15-5-8", "14-5-7" ] }');
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


	RPJE_GetEngine().actionManager.Add_Action(new Action(1,  function(){ Popup_Test(); }, "Popup open"));
	RPJE_GetEngine().actionManager.Add_Action(new Action(2,  function(){ Popup_Test(); }, "Popup open"));
	RPJE_GetEngine().actionManager.Add_Action(new Action(3,  function(){ Popup_Test(); }, "Popup open"));
	RPJE_GetEngine().actionManager.Add_Action(new Action(4,  function(){ Popup_Test(); }, "Popup open"));
	RPJE_GetEngine().actionManager.Add_Action(new Action(5,  function(){ Popup_Test(); }, "Popup open"));
	RPJE_GetEngine().actionManager.Add_Action(new Action(6,  function(){ Popup_Test(); }, "Popup open"));
	RPJE_GetEngine().actionManager.Add_Action(new Action(7,  function(){ Popup_Test(); }, "Popup open"));
	RPJE_GetEngine().actionManager.Add_Action(new Action(8,  function(){ Popup_Test(); }, "Popup open"));
	RPJE_GetEngine().actionManager.Add_Action(new Action(9,  function(){ Popup_Test(); }, "Popup open"));


	RPJE_StartEngine(40);


	//setTimeout(function(){ RPJE_Game_Dialog("RPJE by https://github.com/thomassifferlen - Role Playing Javascript Engine V1.0", function(){console.log("Dialog callback func")}); }, 100);

	//setTimeout(function(){ RPJE_Game_Dialog("RPJE by https://github.com/thomassifferlen - Role Playing Javascript Engine V1.0 - HTML controllers needs a touch device (Joystick is touchscreen only) - How to use doc is coming soon.", function(){console.log("Dialog callback func")}); }, 100);

}