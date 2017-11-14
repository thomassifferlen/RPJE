const TILE_HEIGHT_CLASSIC = 0;
const TILE_HEIGHT_TWO = 16;
const TILE_HEIGHT_THREE = 32;

class SpriteTile
{
  constructor(path, TileValue)
  {
      this.path = path;
      this.TileValue = TileValue;
      this.img = new Image();
      this.img.src = this.path;
  }
}

class DisplayManager
{
  constructor(Config)
  {
    this.canvas = document.getElementById('Game');
    this.ctx = this.canvas.getContext('2d');

    this.tilesGroundIMG_Array = [];
    this.tilesObjIMG_Array = [];

    this.tilesIMG_Array = new Array();

    var pathFolder = "Assets/";

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

    this.tileSize = Config.tileSize;

  	this.ctx.canvas.width = Config.nbr_Width * this.tileSize;
  	this.ctx.canvas.height = Config.nbr_Height * this.tileSize;

    console.log("[INFO] DisplayManager Ready");
  } //End constructor() function

  screenFit(ratioW, ratioH)
  {
      var tmpH = (document.height !== undefined) ? document.height : document.body.offsetHeight;
      var tmpW = (document.width !== undefined) ? document.width : document.body.offsetWidth;

      if ( (tmpW)/(tmpH) < (ratioW / ratioH))
      {
          console.log("[INFO] Document height is too height for the specified ratio ... resizing game area !");
          document.getElementById('GameZone').style.width = tmpW + "px";
          document.getElementById('GameZone').style.height = Math.floor( tmpW / (ratioW / ratioH) ) + "px";

      }
      else if((tmpW)/(tmpH) > (ratioW / ratioH))
      {
          console.log("[INFO] Document width is too height for the specified ratio ... resizing game area !");
          document.getElementById('GameZone').style.height = tmpH + "px";
          document.getElementById('GameZone').style.width = Math.floor( tmpH * (ratioW / ratioH) ) + "px";
      }
      else if( (tmpW)/(tmpH) == (ratioW / ratioH))
      {
          document.getElementById('GameZone').style.width = tmpW + "px";
          document.getElementById('GameZone').style.height = tmpH + "px";
      }
  }

  loadTile(path, TileValue, is_ground)
  {
      var tmpSprite = new SpriteTile(path, TileValue);
      
      if(is_ground)
      {
          this.tilesGroundIMG_Array.push(tmpSprite);
      }
      else
      {
          this.tilesObjIMG_Array.push(tmpSprite);
      }
  }

  drawMap(mapToDraw, playerToDraw)
  {
      var tilePositionPlayerX = Math.floor(playerToDraw.position.x / this.tileSize);
      var tilePositionPlayerY = Math.floor(playerToDraw.position.y / this.tileSize);


  		for(var x = 0 ; x < mapToDraw.nbr_Width ; x++)
	    {
	      for(var y = 0 ; y < mapToDraw.nbr_Height ; y++)
	      {
            for( var i = 0 ; i < this.tilesGroundIMG_Array.length ; i++ )
            {
                if( this.tilesGroundIMG_Array[i].TileValue == mapToDraw.mapTiles[x][y])
                {
                        this.ctx.drawImage( this.tilesGroundIMG_Array[i].img , x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
                } 
            }

            for( var i = 0 ; i < this.tilesObjIMG_Array.length ; i++ )
            {
                if( this.tilesObjIMG_Array[i].TileValue == mapToDraw.mapObjects[x][y])
                {
                        this.ctx.drawImage( this.tilesObjIMG_Array[i].img , x * this.tileSize, y * this.tileSize - TILE_HEIGHT_CLASSIC);
                }
            }
	      }
	    } 



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