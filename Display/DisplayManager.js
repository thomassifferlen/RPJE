const TILE_HEIGHT_CLASSIC = 0;
const TILE_HEIGHT_TWO = 16;
const TILE_HEIGHT_THREE = 32;

class DisplayManager
{
  constructor(Config)
  {
    this.canvas = document.getElementById('Game');
    this.ctx = this.canvas.getContext('2d');

    this.tilesIMG_Array = new Array();

    this.tileSize = Config.tileSize;

    this.loadTiles("Assets/");

  	this.ctx.canvas.width = Config.nbr_Width * this.tileSize;
  	this.ctx.canvas.height = Config.nbr_Height * this.tileSize;

    console.log("[INFO] DisplayManager Ready");

    
  } //End constructor() function

  loadTiles(pathFolder)
  {

	this.tilesIMG_Array["null"] = new Image();
	this.tilesIMG_Array["null"].src = pathFolder + "null.png";

	this.tilesIMG_Array["ground"] = new Image();
	this.tilesIMG_Array["ground"].src = pathFolder + "ground.png";

	this.tilesIMG_Array["grass"] = new Image();
	this.tilesIMG_Array["grass"].src = pathFolder + "grass.png";

	this.tilesIMG_Array["blue_flower_3"] = new Image();
	this.tilesIMG_Array["blue_flower_3"].src = pathFolder + "Flowers/" + "blue_flower_3.png";

	this.tilesIMG_Array["red_flower_3"] = new Image();
	this.tilesIMG_Array["red_flower_3"].src = pathFolder + "Flowers/" + "red_flower_3.png";

	this.tilesIMG_Array["white_flower_3"] = new Image();
	this.tilesIMG_Array["white_flower_3"].src = pathFolder + "Flowers/" + "white_flower_3.png";

	this.tilesIMG_Array["objects_fence_1"] = new Image();
	this.tilesIMG_Array["objects_fence_1"].src = pathFolder + "Fences/" + "objects_fence_1.png";

	this.tilesIMG_Array["objects_fence_2"] = new Image();
	this.tilesIMG_Array["objects_fence_2"].src = pathFolder + "Fences/" + "objects_fence_2.png";

	this.tilesIMG_Array["objects_fence_3"] = new Image();
	this.tilesIMG_Array["objects_fence_3"].src = pathFolder + "Fences/" + "objects_fence_3.png";

	this.tilesIMG_Array["objects_fence_4"] = new Image();
	this.tilesIMG_Array["objects_fence_4"].src = pathFolder + "Fences/" + "objects_fence_4.png";

	this.tilesIMG_Array["objects_fence_5"] = new Image();
	this.tilesIMG_Array["objects_fence_5"].src = pathFolder + "Fences/" + "objects_fence_5.png";

	this.tilesIMG_Array["objects_fence_angle_1"] = new Image();
	this.tilesIMG_Array["objects_fence_angle_1"].src = pathFolder + "Fences/" + "objects_fence_angle_1.png";

	this.tilesIMG_Array["objects_fence_angle_2"] = new Image();
	this.tilesIMG_Array["objects_fence_angle_2"].src = pathFolder + "Fences/" + "objects_fence_angle_2.png";

	this.tilesIMG_Array["objects_fence_angle_3"] = new Image();
	this.tilesIMG_Array["objects_fence_angle_3"].src = pathFolder + "Fences/" + "objects_fence_angle_3.png";

	this.tilesIMG_Array["objects_fence_angle_4"] = new Image();
	this.tilesIMG_Array["objects_fence_angle_4"].src = pathFolder + "Fences/" + "objects_fence_angle_4.png";


      //Player

      this.tilesIMG_Array["player_Down_1"] = new Image();
      this.tilesIMG_Array["player_Down_1"].src = pathFolder + "Player/" + "player_Down_1.png";

      this.tilesIMG_Array["player_Down_2"] = new Image();
      this.tilesIMG_Array["player_Down_2"].src = pathFolder + "Player/" + "player_Down_2.png";

      this.tilesIMG_Array["player_Down_3"] = new Image();
      this.tilesIMG_Array["player_Down_3"].src = pathFolder + "Player/" + "player_Down_3.png";

      this.tilesIMG_Array["player_Up_1"] = new Image();
      this.tilesIMG_Array["player_Up_1"].src = pathFolder + "Player/" + "player_Up_1.png";

      this.tilesIMG_Array["player_Up_2"] = new Image();
      this.tilesIMG_Array["player_Up_2"].src = pathFolder + "Player/" + "player_Up_2.png";

      this.tilesIMG_Array["player_Up_3"] = new Image();
      this.tilesIMG_Array["player_Up_3"].src = pathFolder + "Player/" + "player_Up_3.png";

      this.tilesIMG_Array["player_Right_1"] = new Image();
      this.tilesIMG_Array["player_Right_1"].src = pathFolder + "Player/" + "player_Right_1.png";

      this.tilesIMG_Array["player_Right_2"] = new Image();
      this.tilesIMG_Array["player_Right_2"].src = pathFolder + "Player/" + "player_Right_2.png";

      this.tilesIMG_Array["player_Right_3"] = new Image();
      this.tilesIMG_Array["player_Right_3"].src = pathFolder + "Player/" + "player_Right_3.png";

      this.tilesIMG_Array["player_Left_1"] = new Image();
      this.tilesIMG_Array["player_Left_1"].src = pathFolder + "Player/" + "player_Left_1.png";

      this.tilesIMG_Array["player_Left_2"] = new Image();
      this.tilesIMG_Array["player_Left_2"].src = pathFolder + "Player/" + "player_Left_2.png";

      this.tilesIMG_Array["player_Left_3"] = new Image();
      this.tilesIMG_Array["player_Left_3"].src = pathFolder + "Player/" + "player_Left_3.png";

  }

  drawMap(mapToDraw, playerToDraw)
  {
      var tilePositionPlayerX = Math.floor(playerToDraw.position.x / this.tileSize);
      var tilePositionPlayerY = Math.floor(playerToDraw.position.y / this.tileSize);


  		for(var x = 0 ; x < mapToDraw.nbr_Width ; x++)
	    {
	      for(var y = 0 ; y < mapToDraw.nbr_Height ; y++)
	      {
            // ground

	        	switch(mapToDraw.mapTiles[x][y])
	        	{
	        		case 0:
	        			this.ctx.drawImage(this.tilesIMG_Array["ground"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
	        		break;

	        		case 1:
						    this.ctx.drawImage(this.tilesIMG_Array["grass"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
	        		break;

	        		case 2:
						    this.ctx.drawImage(this.tilesIMG_Array["blue_flower_3"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
	        		break;

	        		case 3:
						    this.ctx.drawImage(this.tilesIMG_Array["red_flower_3"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
	        		break;

	        		case 4:
						    this.ctx.drawImage(this.tilesIMG_Array["white_flower_3"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
	        		break;

	        		default :
	        			this.ctx.drawImage(this.tilesIMG_Array["null"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
                console.warn("[WARN] Unknown Tile");
	        		break;
	        	}
	      }
	    } //EndFor

      for(var y = 0 ; y < mapToDraw.nbr_Height ; y++)
      {
        for(var x = 0 ; x < mapToDraw.nbr_Width ; x++)
        {
           
            switch(mapToDraw.mapObjects[x][y])
            {
              case 0:
                
              break;

              case 1:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_1"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              case 2:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_2"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              case 3:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_3"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              case 4:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_4"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              case 5:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_5"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              case 6:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_angle_1"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              case 7:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_angle_2"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              case 8:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_angle_3"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              case 9:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_angle_4"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              /*case 5:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_5"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;

              case 5:
                  this.ctx.drawImage(this.tilesIMG_Array["objects_fence_5"], x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
              break;*/

              case -1:
                  //invisible wall
              break;

              default :
                  console.warn("[WARN] Unknown Map Object");
              break;
            }

             //Objects 
            
        }
      } //EndFor

        var tmpStrSprite =" player_";
        var playerError = false;

        switch(playerToDraw.direction)
        {
            case PLAYER_DIRECTION_UP:
                 switch(playerToDraw.spriteNumber)
                  {
                      case 1:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Up_1"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 2:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Up_2"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 3:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Up_1"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 4:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Up_3"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;
                  }
            break;

            case PLAYER_DIRECTION_DOWN:
                  switch(playerToDraw.spriteNumber)
                  {
                      case 1:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Down_1"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 2:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Down_2"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 3:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Down_1"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 4:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Down_3"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;
                  }
            break;

            case PLAYER_DIRECTION_RIGHT:  
                  switch(playerToDraw.spriteNumber)
                  {
                      case 1:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Right_1"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 2:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Right_2"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 3:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Right_1"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 4:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Right_3"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;
                  }
            break;

            case PLAYER_DIRECTION_LEFT:
                  switch(playerToDraw.spriteNumber)
                  {
                      case 1:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Left_1"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 2:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Left_2"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 3:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Left_1"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;

                      case 4:
                          this.ctx.drawImage(this.tilesIMG_Array["player_Left_3"], playerToDraw.position.x - TILE_HEIGHT_CLASSIC,  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                      break;
                  }
            break;
        }

  }

}