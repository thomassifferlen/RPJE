var RPJE_MAP_EDITOR_CurrentTile = 0;
var RPJE_MAP_EDITOR_Is_ground = true;

function RPJE_MAP_EDITOR_InitEditor()
{
	$("#Game").on("mousedown", function(e)
	{
		var offset = $(this).offset();

		var rescaled_H = $("#Game").height();
		var rescaled_W = $("#Game").width();

		var rescaled_tileSize_W = $("#Game").width() / RPJE_GetEngine().config.nbr_Width;
		var rescaled_tileSize_H = $("#Game").width() / RPJE_GetEngine().config.nbr_Width;

		var relativeX = (e.originalEvent.clientX - offset.left);
		var relativeY = (e.originalEvent.clientY - offset.top);

		var ArrayPosX = Math.floor(relativeX / rescaled_tileSize_W);
		var ArrayPosY = Math.floor(relativeY / rescaled_tileSize_H);

		//console.log( ArrayPosX, ArrayPosY);

		if(RPJE_MAP_EDITOR_Is_ground)
		{
			RPJE_GetEngine().currentMap.setTile(ArrayPosX,ArrayPosY, RPJE_MAP_EDITOR_CurrentTile);
		}
		else
		{
			RPJE_GetEngine().currentMap.seMapObj(ArrayPosX,ArrayPosY, RPJE_MAP_EDITOR_CurrentTile);
		}

	});

	var html_tiles_menu = '<div id="Tiles_Select_Menu" style=" display : none; position : absolute; width : 80%; height : 80% ; bottom : 10% ; left : 10%; background-color : white; opacity : 0.8; border-radius : 10px; overflow : scroll;"></div>'
	$("body").append(html_tiles_menu);
}

function RPJE_MAP_EDITOR_Close_Tiles_Select_Menu()
{
	$("#Tiles_Select_Menu").empty();
	$("#Tiles_Select_Menu").css("display", "none");
}

function RPJE_MAP_EDITOR_Export_Map_JSON()
{
	$("#map_export_text").val(RPJE_GetEngine().currentMap.exportJSON());
}

function RPJE_MAP_EDITOR_Open_Tiles_Select_Menu()
{
	var rescaled_tileSize_W = $("#Game").width() / RPJE_GetEngine().config.nbr_Width;

	$("#Tiles_Select_Menu").css("display", "block");

	$("#Tiles_Select_Menu").append("<h2 style='text-align : center;'>Map Editor Menu - work in progress</h2>");

	$("#Tiles_Select_Menu").append("</br></br>");

	for(var i = 0 ; i < RPJE_GetEngine().displayManager.tilesGroundIMG_Array.length ; i ++)
	{
		$("#Tiles_Select_Menu").append( "<img onclick='RPJE_MAP_EDITOR_SelectTile("+  RPJE_GetEngine().displayManager.tilesGroundIMG_Array[i].TileValue +", true)' src='" + RPJE_GetEngine().displayManager.tilesGroundIMG_Array[i].path + "' style='margin: 5px; height : "+  Math.floor(rescaled_tileSize_W).toString() +";width : "+  Math.floor(rescaled_tileSize_W).toString() +";'></img>");
	}

	$("#Tiles_Select_Menu").append("<hr>");

	$("#Tiles_Select_Menu").append("</br></br>");

	$("#Tiles_Select_Menu").append("<button onclick='RPJE_MAP_EDITOR_SelectTile( -1 , false)' style='margin: 5px; height : "+  Math.floor(rescaled_tileSize_W).toString() +";'>No Object</button>");

	for(var i = 0 ; i < RPJE_GetEngine().displayManager.tilesObjIMG_Array.length ; i ++)
	{
		$("#Tiles_Select_Menu").append( "<img onclick='RPJE_MAP_EDITOR_SelectTile("+  RPJE_GetEngine().displayManager.tilesObjIMG_Array[i].TileValue +", false)' src='" + RPJE_GetEngine().displayManager.tilesObjIMG_Array[i].path + "' style='margin: 5px; height : "+  Math.floor(rescaled_tileSize_W).toString() +"; width : "+  Math.floor(rescaled_tileSize_W).toString() +";'></img>");
	}

	$("#Tiles_Select_Menu").append("</br></br>");

	$("#Tiles_Select_Menu").append("<hr>");

	$("#Tiles_Select_Menu").append("</br></br>");

	$("#Tiles_Select_Menu").append("<textarea style='width : 100%;' id='map_export_text'></textarea>");

	$("#Tiles_Select_Menu").append("<h2  style='text-align : center;' ><button style='width : 80%;' onclick='RPJE_MAP_EDITOR_Export_Map_JSON()' ><h3>Export Map JSON</h3></button></h2>");

	$("#Tiles_Select_Menu").append("</br></br>");

	$("#Tiles_Select_Menu").append("<h2  style='text-align : center;' ><button style='width : 80%;' onclick='RPJE_GetEngine().currentMap.clearMap()' ><h3>Clear Map</h3></button></h2>");

	$("#Tiles_Select_Menu").append("<hr>");

	$("#Tiles_Select_Menu").append("</br></br>");

	$("#Tiles_Select_Menu").append("<h2  style='text-align : center;' ><button style='width : 80%;' onclick='RPJE_MAP_EDITOR_Close_Tiles_Select_Menu()' ><h3>Close</h3></button></h2>");

}


function RPJE_MAP_EDITOR_SelectTile(tile,is_ground_bool)
{
	RPJE_MAP_EDITOR_CurrentTile = tile;
	RPJE_MAP_EDITOR_Is_ground = is_ground_bool;

	var typetmp = "";

	if(RPJE_MAP_EDITOR_Is_ground)
	{
		typetmp = " This is a ground tile";
	}
	else
	{
		typetmp = " This is NOT a ground tile, tis is an object";
	}

	var text = "Selected = " + RPJE_MAP_EDITOR_CurrentTile + typetmp;

	//console.log(text);

	RPJE_MAP_EDITOR_Close_Tiles_Select_Menu();
}