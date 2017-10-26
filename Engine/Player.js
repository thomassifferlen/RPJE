const PLAYER_DIRECTION_UP = 1;
const PLAYER_DIRECTION_DOWN = 2;
const PLAYER_DIRECTION_RIGHT = 3;
const PLAYER_DIRECTION_LEFT = 4;

const PLAYER_DIRECTION_UNKNOWN = 0;


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

    this.position = new PairStruct(0,0);
    this.bag = new Array();

    this.spriteNumber = 1;

    this.direction = PLAYER_DIRECTION_DOWN;

    console.log("[INFO] Player Ready");

  } //End constructor() function

  Move(targetMap, GameConfig)
  {
    if(this.is_Moving)
    {

        switch(this.direction)
        {
            case PLAYER_DIRECTION_UP:

                if(targetMap.isWalkableTile(Math.floor((this.position.x + (GameConfig.tileSize / 2))/GameConfig.tileSize),Math.floor(((this.position.y + (GameConfig.tileSize / 2)) - this.speed)/GameConfig.tileSize)))
                {
                    this.position.y -= this.speed;
                }

            break;

            case PLAYER_DIRECTION_DOWN:
               
                if(targetMap.isWalkableTile(Math.floor((this.position.x + (GameConfig.tileSize / 2))/GameConfig.tileSize),Math.floor(((this.position.y + (GameConfig.tileSize / 2))  + this.speed)/GameConfig.tileSize)))
                {
                    this.position.y += this.speed;
                }

            break;

            case PLAYER_DIRECTION_RIGHT:
                
                if(targetMap.isWalkableTile(Math.floor((this.position.x + (GameConfig.tileSize / 2) + this.speed)/GameConfig.tileSize),Math.floor((this.position.y + (GameConfig.tileSize / 2)) /GameConfig.tileSize)))
                {
                    this.position.x += this.speed;
                }

            break;

            case PLAYER_DIRECTION_LEFT:

                if(targetMap.isWalkableTile(Math.floor((this.position.x + (GameConfig.tileSize / 2) - this.speed) /GameConfig.tileSize),Math.floor((this.position.y + (GameConfig.tileSize / 2)) /GameConfig.tileSize)))
                {
                    this.position.x -= this.speed;
                }

            break;

        }

        switch(this.spriteNumber)
        {
            case 1:
                this.spriteNumber = 2;
            break;

            case 2:
                this.spriteNumber = 3;
            break;

            case 3:
                this.spriteNumber = 4;
            break;

            case 4:
                this.spriteNumber = 1;
            break;

            default :
                this.spriteNumber = 1;
                console.warn("[WARN] Move() -> spriteNumber : incorrect value - fixing it to default value");
            break;
        }

        
    }    
  }
}