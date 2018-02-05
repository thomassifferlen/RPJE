function RPJE_JS_Obj_Load_Player_Sprites(JS_Obj)
{
	for (PlayerDirection in JS_Obj)
	{

		if(PlayerDirection == "PLAYER_DIRECTION_UP")
		{
			for(var i = 0; i < JS_Obj[PlayerDirection].length ; i++)
			{
				RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, JS_Obj[PlayerDirection][i]);
			}
		}
		else if(PlayerDirection == "PLAYER_DIRECTION_DOWN")
		{
			for(var i = 0; i < JS_Obj[PlayerDirection].length ; i++)
			{
				RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, JS_Obj[PlayerDirection][i]);
			}
		}
		else if(PlayerDirection == "PLAYER_DIRECTION_RIGHT")
		{
			for(var i = 0; i < JS_Obj[PlayerDirection].length ; i++)
			{
				RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, JS_Obj[PlayerDirection][i]);
			}
		}
		else if(PlayerDirection == "PLAYER_DIRECTION_LEFT")
		{
			for(var i = 0; i < JS_Obj[PlayerDirection].length ; i++)
			{
				RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, JS_Obj[PlayerDirection][i]);
			}
		}
		else
		{
			console.warn("[WARN] RPJE_JS_Obj_Load_Player_Sprites() - Invalid player direction [" +  PlayerDirection + "],  ignoring ...");
		}
	}
}

function RPJE_JS_Obj_Load_Tile(JS_Obj)
{
	for (tile_Type in JS_Obj)
	{
		if(tile_Type == "mapTiles")
		{
			for(var i = 0; i < JS_Obj[tile_Type].length ; i++)
			{
				RPJE_GetEngine().displayManager.loadTile(JS_Obj[tile_Type][i].path, JS_Obj[tile_Type][i].id, true);
			}
		}
		else if(tile_Type == "mapObjects")
		{
			for(var i = 0; i < JS_Obj[tile_Type].length ; i++)
			{
				RPJE_GetEngine().displayManager.loadTile(JS_Obj[tile_Type][i].path, JS_Obj[tile_Type][i].id, false);
			}
		}
		else
		{
			console.warn("[WARN] RPJE_JS_Obj_Load_Tile() - Invalid tile type [" +  tile_Type + "],  ignoring ...");
		}
	}
}