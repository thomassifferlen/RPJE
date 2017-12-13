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

  drawPlayer(playerToDraw)
  {
       switch(playerToDraw.direction)
        {
            case PLAYER_DIRECTION_UP:
                if (playerToDraw.PlayerSprites_Up.length > playerToDraw.spriteNumber)
                {
                   this.ctx.drawImage(playerToDraw.PlayerSprites_Up[playerToDraw.spriteNumber].img , playerToDraw.position.x - TILE_HEIGHT_CLASSIC - (this.tileSize/2),  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                }
            break;

            case PLAYER_DIRECTION_DOWN:
                if (playerToDraw.PlayerSprites_Down.length > playerToDraw.spriteNumber)
                {
                       this.ctx.drawImage(playerToDraw.PlayerSprites_Down[playerToDraw.spriteNumber].img , playerToDraw.position.x - TILE_HEIGHT_CLASSIC - (this.tileSize/2),  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                }  
            break;

            case PLAYER_DIRECTION_RIGHT:  
                if (playerToDraw.PlayerSprites_Right.length > playerToDraw.spriteNumber)
                {
                     this.ctx.drawImage(playerToDraw.PlayerSprites_Right[playerToDraw.spriteNumber].img , playerToDraw.position.x - TILE_HEIGHT_CLASSIC - (this.tileSize/2),  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);
                }
            break;

            case PLAYER_DIRECTION_LEFT:
                if (playerToDraw.PlayerSprites_Left.length > playerToDraw.spriteNumber)
                {
                     this.ctx.drawImage(playerToDraw.PlayerSprites_Left[playerToDraw.spriteNumber].img , playerToDraw.position.x - TILE_HEIGHT_CLASSIC - (this.tileSize/2),  playerToDraw.position.y - TILE_HEIGHT_CLASSIC - 5);

                }   
            break;

            default:
                   // console.log(playerToDraw.direction);
            break;
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
                        this.ctx.drawImage( this.tilesGroundIMG_Array[i].img , x * this.tileSize, y * this.tileSize - (this.tileSize - this.tilesGroundIMG_Array[i].img.naturalHeight));
                } 
            }

            for( var i = 0 ; i < this.tilesObjIMG_Array.length ; i++ )
            {
                if( this.tilesObjIMG_Array[i].TileValue == mapToDraw.mapObjects[x][y])
                {
                        this.ctx.drawImage( this.tilesObjIMG_Array[i].img , x * this.tileSize, y * this.tileSize - (this.tileSize - this.tilesGroundIMG_Array[i].img.naturalHeight));
                }
            }
	      }
	    } 

       
      this.drawPlayer(playerToDraw);

  }

}