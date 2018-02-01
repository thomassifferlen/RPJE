const NPC_DIRECTION_UP = 1;
const NPC_DIRECTION_DOWN = 2;
const NPC_DIRECTION_RIGHT = 3;
const NPC_DIRECTION_LEFT = 4;
const NPC_DIRECTION_UNKNOWN = 0;

class NpcSprite
{
  constructor(path)
  {
      this.path = path;
      this.img = new Image();
      this.img.src = this.path;
  }
}

class Npc
{
  constructor(name)
  {
    this.name = name;
    this.hp = 150;
    this.loot_exp = 10;
    this.speed = 2;
    this.is_Moving = false;

    this.position = new PairStruct(80,100);
    this.destination = new PairStruct(-1,-1);

    this.friendly = true

    this.spriteNumber = 1;

    this.direction = NPC_DIRECTION_DOWN;

    this.NpcSprites_Up = [];
    this.NpcSprites_Right = [];
    this.NpcSprites_Down = [];
    this.NpcSprites_Left = [];

    console.log("[INFO] Npc Ready");

  } //End constructor() function

  AddSprite(direction, imgPath)
  {
        var tmpSprite = new NpcSprite(imgPath);

        switch(direction)
        {
            case NPC_DIRECTION_UP :
                this.NpcSprites_Up.push(tmpSprite);
            break;

            case NPC_DIRECTION_DOWN :
                this.NpcSprites_Down.push(tmpSprite);
            break;

            case NPC_DIRECTION_RIGHT :
                this.NpcSprites_Right.push(tmpSprite);
            break;

            case NPC_DIRECTION_LEFT :
                this.NpcSprites_Left.push(tmpSprite);
            break;

            default :
                console.error("[ERROR] Npc AddSprite() --> invalid direction");
            break;  
        }
  }
}