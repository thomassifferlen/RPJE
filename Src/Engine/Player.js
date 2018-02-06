const PLAYER_DIRECTION_UP = 1;
const PLAYER_DIRECTION_DOWN = 2;
const PLAYER_DIRECTION_RIGHT = 3;
const PLAYER_DIRECTION_LEFT = 4;

const PLAYER_DIRECTION_UNKNOWN = 0;

class PlayerSprite
{
  constructor(path)
  {
      this.path = path;
      this.img = new Image();
      this.img.src = this.path;
  }
}

class bagItem
{
	constructor(name, text)
	{
		this.name = name;
		this.text = text;
        this.effect = 0;
	} //End constructor() function
}

class Player
{
  constructor(name)
  {
    this.name = name;
    this.hp = 150;
    this.exp = 0;
    this.speed = 4;
    this.is_Moving = false;

    this.position = new PairStruct(100,100);
    this.bag = new Array();

    this.spriteNumber = 0;

    this.direction = PLAYER_DIRECTION_DOWN;

    this.PlayerSprites_Up = [];
    this.PlayerSprites_Right = [];
    this.PlayerSprites_Down = [];
    this.PlayerSprites_Left = [];

    console.log("[INFO] Player Ready");

  } //End constructor() function

  GetFacingMapObject(map, GameConfig)
  {
        var mapObject = -1;


        switch(this.direction)
        {
            case PLAYER_DIRECTION_UP :

                var posX = Math.floor((this.position.x )/GameConfig.tileSize);
                var posY = Math.floor((this.position.y - this.speed *2)/GameConfig.tileSize);

                mapObject = map.getMapObj(posX, posY);
            break;

            case PLAYER_DIRECTION_DOWN :

                var posX = Math.floor((this.position.x )/GameConfig.tileSize);
                var posY = Math.floor((this.position.y + this.speed *3)/GameConfig.tileSize);

                mapObject = map.getMapObj(posX, posY );
            break;

            case PLAYER_DIRECTION_RIGHT :

                var posX = Math.floor((this.position.x + this.speed * 2)/GameConfig.tileSize);
                var posY = Math.floor((this.position.y + 5)/GameConfig.tileSize);

                mapObject = map.getMapObj(posX , posY);

            break;

            case PLAYER_DIRECTION_LEFT :

                var posX = Math.floor((this.position.x - this.speed *2)/GameConfig.tileSize);
                var posY = Math.floor((this.position.y )/GameConfig.tileSize);

                mapObject = map.getMapObj(posX, posY);
            break;

            default :
                console.error("[ERROR] Player GetFacingMapObject() --> invalid direction");
            break;  
        }

        return mapObject;
  }

  AddSprite(direction, imgPath)
  {
        var tmpSprite = new PlayerSprite(imgPath);

        switch(direction)
        {
            case PLAYER_DIRECTION_UP :
                this.PlayerSprites_Up.push(tmpSprite);
            break;

            case PLAYER_DIRECTION_DOWN :
                this.PlayerSprites_Down.push(tmpSprite);
            break;

            case PLAYER_DIRECTION_RIGHT :
                this.PlayerSprites_Right.push(tmpSprite);
            break;

            case PLAYER_DIRECTION_LEFT :
                this.PlayerSprites_Left.push(tmpSprite);
            break;

            default :
                console.error("[ERROR] Player AddSprite() --> invalid direction");
            break;  
        }
  }

  Move(targetMap, GameConfig)
  {
    if(this.is_Moving)
    {
        var tmpspeedX = this.speed;
        var tmpspeedY = this.speed;

        if( is_JoystickEnabled() )
        {
            var JoyX = GetJoystick_X_Percent();
            var JoyY = GetJoystick_Y_Percent();

            tmpspeedX = Math.floor((this.speed * JoyX) / 100);
            tmpspeedY = Math.floor((this.speed * JoyY) / 100);

            if(targetMap.isWalkableTile(Math.floor((this.position.x -8 + (GameConfig.tileSize / 2))/GameConfig.tileSize),Math.floor(((this.position.y + (GameConfig.tileSize / 2))  + tmpspeedY)/GameConfig.tileSize)))
            {
                this.position.y += tmpspeedY;
            }

            if(targetMap.isWalkableTile(Math.floor((this.position.x - 8 + (GameConfig.tileSize / 2) + tmpspeedX)/GameConfig.tileSize),Math.floor((this.position.y + (GameConfig.tileSize / 2)) /GameConfig.tileSize)))
            {
                this.position.x += tmpspeedX;
            }

            if( Math.abs(tmpspeedX) >= Math.abs(tmpspeedY) )
            {
                if ( tmpspeedX > 0 )
                {
                    this.direction = PLAYER_DIRECTION_RIGHT;

                    if(this.spriteNumber + 1 >= this.PlayerSprites_Right.length)
                    {
                        this.spriteNumber = 0;
                    }
                    else
                    {
                        this.spriteNumber ++;
                    }
                }
                else
                {
                    this.direction = PLAYER_DIRECTION_LEFT;

                     if(this.spriteNumber + 1 >= this.PlayerSprites_Left.length)
                    {
                        this.spriteNumber = 0;
                    }
                    else
                    {
                        this.spriteNumber ++;
                    }
                }
            }
            else
            {
                if ( tmpspeedY > 0 )
                {
                    this.direction = PLAYER_DIRECTION_DOWN;

                     if(this.spriteNumber + 1 >= this.PlayerSprites_Down.length)
                    {
                        this.spriteNumber = 0;
                    }
                    else
                    {
                        this.spriteNumber ++;
                    }
                }
                else
                {
                    this.direction = PLAYER_DIRECTION_UP;


                    if(this.spriteNumber + 1 >= this.PlayerSprites_Up.length)
                    {
                        this.spriteNumber = 0;
                    }
                    else
                    {
                        this.spriteNumber ++;
                    }
                }
            }
        }
        else
        {
            switch(this.direction)
            {
                case PLAYER_DIRECTION_UP:

                    if(targetMap.isWalkableTile(Math.floor((this.position.x + (GameConfig.tileSize / 2))/GameConfig.tileSize),Math.floor(((this.position.y + (GameConfig.tileSize / 2)) - tmpspeedY)/GameConfig.tileSize)))
                    {
                        this.position.y -= tmpspeedY;
                    }

                    if(this.spriteNumber + 1 >= this.PlayerSprites_Up.length)
                    {
                        this.spriteNumber = 0;
                    }
                    else
                    {
                        this.spriteNumber ++;
                    }

                break;

                case PLAYER_DIRECTION_DOWN:
                   
                    if(targetMap.isWalkableTile(Math.floor((this.position.x + (GameConfig.tileSize / 2))/GameConfig.tileSize),Math.floor(((this.position.y + (GameConfig.tileSize / 2))  + tmpspeedY)/GameConfig.tileSize)))
                    {
                        this.position.y += tmpspeedY;
                    }

                    if(this.spriteNumber + 1 >= this.PlayerSprites_Down.length)
                    {
                        this.spriteNumber = 0;
                    }
                    else
                    {
                        this.spriteNumber ++;
                    }

                break;

                case PLAYER_DIRECTION_RIGHT:
                    
                    if(targetMap.isWalkableTile(Math.floor((this.position.x + (GameConfig.tileSize / 2) + tmpspeedX)/GameConfig.tileSize),Math.floor((this.position.y + (GameConfig.tileSize / 2)) /GameConfig.tileSize)))
                    {
                        this.position.x += tmpspeedX;
                    }

                    if(this.spriteNumber + 1 >= this.PlayerSprites_Right.length)
                    {
                        this.spriteNumber = 0;
                    }
                    else
                    {
                        this.spriteNumber ++;
                    }

                break;

                case PLAYER_DIRECTION_LEFT:

                    if(targetMap.isWalkableTile(Math.floor((this.position.x + (GameConfig.tileSize / 2) - tmpspeedX) /GameConfig.tileSize),Math.floor((this.position.y + (GameConfig.tileSize / 2)) /GameConfig.tileSize)))
                    {
                        this.position.x -= tmpspeedX;
                    }

                    if(this.spriteNumber + 1 >= this.PlayerSprites_Left.length)
                    {
                        this.spriteNumber = 0;
                    }
                    else
                    {
                        this.spriteNumber ++;
                    }

                break;
            }
        }

        return true; 
    }  
    else
    {
        return false; 
    }
  }
}