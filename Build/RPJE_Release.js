
//[GENERATED] : INCLUDE : ../Src/HTML_Elements/HTML_Elements.js
function Add_HTML_Joystick()
{
	document.body.innerHTML += '<div class="JoystickZone noselect"><div class="JoystickMain" id="JoystickMain"><div class="Joystick" id="Joystick"></div></div></div>';
}

function Add_HTML_Dialog_Zone()
{
	document.body.innerHTML += '<div id="Dialog" class="Dialog"></div>';
}

function Add_HTML_Game_Responsive_Canvas()
{
	document.body.innerHTML += '<div class="child"></div><div class="heightFlex"><div class="child"></div><div id="GameZone"><canvas id="Game" class="NoCanvasAntialias"></canvas></div><div class="child"></div></div><div class="child"></div>';	
}


//[GENERATED] : INCLUDE : ../Src/UI/Dialog/Dialog.js
// DIALOG BASED
var CurrentDialog = "";
var Writing_Interval;
var currentLetterIndex = 0;
var DialogEnd = false;

var DialogEndFunction = null;

var DialogReady = true;

function RPJE_Game_Dialog(str, endFunction)
{
	if (DialogReady)
	{
		DialogReady = false;
		CurrentDialog = str;
		DialogEndFunction = endFunction;
		DialogEnd = false;
		document.getElementById("Dialog").innerHTML = "";
		RPJE_StopEngine();
		RPJE_Game_HideDialog(false);
		RPJE_StartWriting(20);

		document.getElementById("Dialog").addEventListener("mousedown", function()
		{
	    	if(DialogEnd)
	    	{
	    		RPJE_Game_DialogEnd();
	    	}
		});

		document.getElementById("Dialog").addEventListener("touchstart", function()
		{
	    	if(DialogEnd)
	    	{
	    		RPJE_Game_DialogEnd();
	    	}

		});
	}
	else
	{
		if(DialogEnd)
    	{
    		RPJE_Game_DialogEnd();
    	}
	}
	
}

function RPJE_Game_DialogEnd()
{
	RPJE_Game_HideDialog(true);

	RPJE_StartEngine( RPJE_GetEngine().GetEngineSpeed());

	currentLetterIndex = 0;
	CurrentDialog = "";
	DialogEnd = false;
	DialogReady = true;

	if(DialogEndFunction != null)
	{
		DialogEndFunction();
	}
}

function RPJE_Game_HideDialog(is_Hide)
{
	if(!is_Hide)
	{
		document.getElementById("Dialog").style.display = 'block';
	}
	else
	{
		document.getElementById("Dialog").style.display = 'none';
	}
}

function RPJE_StartWriting(speed)
{
	Writing_Interval = setInterval(function()
	{
		if(currentLetterIndex < CurrentDialog.length)
		{
			document.getElementById("Dialog").innerHTML += CurrentDialog.charAt(currentLetterIndex);
			currentLetterIndex++;
		}
		else
		{
			RPJE_StopWriting();
		}

	}, speed);
}

function RPJE_StopWriting()
{
	clearInterval(Writing_Interval);
	DialogEnd = true;
}
//[GENERATED] : INCLUDE : ../Src/UI/Popup/Popup.js
var RPJE_Popup_isReadyToOpen = true;

function RPJE_Game_DisplayPopup(is_Hide)
{
	if(is_Hide)
	{
		 RPJE_Game_OpenPopup();
	}
	else
	{
		RPJE_Game_ClosePopup();
	}
}

function RPJE_Game_OpenPopup()
{
	if(RPJE_Popup_isReadyToOpen)
	{
		var tmpH = (document.height !== undefined) ? document.height : document.body.offsetHeight;
      	var tmpW = (document.width !== undefined) ? document.width : document.body.offsetWidth;

      	if(tmpH > tmpW)
      	{
      		document.getElementById("PopupCanvas").style.width = tmpW/1.2 + "px" ;
      		document.getElementById("PopupCanvas").style.height = tmpW/1.2 + "px";
      	}
      	else
      	{
      		document.getElementById("PopupCanvas").style.width = tmpH/1.2 + "px" ;
      		document.getElementById("PopupCanvas").style.height = tmpH/1.2 + "px";
      	}

      	var canvas = document.getElementById('PopupCanvas');
	    var ctx = canvas.getContext('2d');

	  	ctx.canvas.width = 150;
	  	ctx.canvas.height = 150;

		document.getElementById("Popup").style.display = 'flex';
		RPJE_Popup_isReadyToOpen = false;
	}
}

function RPJE_Game_ClosePopup()
{
	if(!RPJE_Popup_isReadyToOpen)
	{
		document.getElementById("Popup").style.display = 'none';
		RPJE_Popup_isReadyToOpen = true;
	}
}







//[GENERATED] : INCLUDE : ../Src/Other/PairStruct.js
class PairStruct
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;

	} //End constructor() function
}
//[GENERATED] : INCLUDE : ../Src/Other/RandomSTR.js
function Tools_randomSTR()
{
  	var text = "";
  	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  	for (var i = 0; i < 10; i++)
    	text += possible.charAt(Math.floor(Math.random() * possible.length));

	console.log("[INFO] Random STR : " + text);

  	return text;
}


//[GENERATED] : INCLUDE : ../Src/Libs/SimpleJoystick.js
var Html_JoystickMain;
var Html_Joystick;

var JoystickReady = false;

var _JoystickMainWidth = 0;
var _JoystickMainHeigth = 0;

var _JoystickWidth = 0;
var _JoystickHeigth = 0;

var _PositionX = 0;
var _PositionY = 0;

var _JoystickMax = 0;
var _Joystick_isMousedown = false;

function LoadJoystick()
{
	Html_JoystickMain = document.getElementById("JoystickMain");
	Html_Joystick = document.getElementById("Joystick");

	Html_JoystickMain.addEventListener('touchstart', Joystick_OnTouchStart, false);
	Html_JoystickMain.addEventListener('touchmove', Joystick_OnTouchMove, false);
	Html_JoystickMain.addEventListener('touchcancel', Joystick_OnTouchCancel, false);
	Html_JoystickMain.addEventListener('touchend', Joystick_OnTouchEnd, false);

	Html_JoystickMain.addEventListener('mousedown', Joystick_OnMouseDown, false);
	Html_JoystickMain.addEventListener('mousemove', Joystick_OnMouseMove, false);
	Html_JoystickMain.addEventListener('mouseup', Joystick_OnMouseUp, false);

	console.log("[INFO] Joystick Ready");

	_JoystickMainHeigth = $( "#JoystickMain" ).height();
	_JoystickMainWidth = $( "#JoystickMain" ).width();

	_JoystickHeigth = $( "#Joystick" ).height();
	_JoystickWidth = $( "#Joystick" ).width();

	_JoystickMax = _JoystickMainWidth /2;

	$( "#Joystick" ).css( "left", (_JoystickMainWidth/2 - _JoystickWidth/2).toString() ) ;
	$( "#Joystick" ).css( "top",  (_JoystickMainHeigth/2 - _JoystickHeigth/2).toString() ) ;

	JoystickReady = true;
}

function Joystick_OnTouchStart(event)
{

}

function Joystick_OnMouseDown(event)
{
	_Joystick_isMousedown = true;
}

function Joystick_OnMouseUp(event)
{
	$( "#Joystick" ).css( "left", (_JoystickMainWidth/2 - _JoystickWidth/2).toString() ) ;
	$( "#Joystick" ).css( "top",  (_JoystickMainHeigth/2 - _JoystickHeigth/2).toString() ) ;

	_PositionX = 0;
	_PositionY = 0;

	_Joystick_isMousedown = false;
}

function Joystick_OnMouseMove(event)
{
	if (_Joystick_isMousedown)
	{
		var tmpWidth = (event.clientX  - $('#JoystickMain').offset().left - _JoystickWidth /2);
		var tmpHeigth =  (event.clientY  - $('#JoystickMain').offset().top - _JoystickHeigth /2);

		if(tmpHeigth > _JoystickMainHeigth - _JoystickHeigth)
		{
			tmpHeigth =  _JoystickMainHeigth - _JoystickHeigth;
		}

		if(tmpWidth >  _JoystickMainWidth - _JoystickWidth)
		{
			tmpWidth = _JoystickMainWidth - _JoystickWidth;
		}

		if(tmpHeigth < 0)
		{
			tmpHeigth = 0;
		}

		if(tmpWidth < 0)
		{
			tmpWidth = 0;
		}

		$( "#Joystick" ).css( "left",  tmpWidth.toString() ) ;
		$( "#Joystick" ).css( "top",  tmpHeigth.toString() ) ;

		 _PositionX = event.clientX  - $('#JoystickMain').offset().left;
		 _PositionY = event.clientY  - $('#JoystickMain').offset().top;


		if( _PositionX > _JoystickMainHeigth)
		{
			_PositionX = _JoystickMainHeigth;
		}

		if( _PositionX <   0)
		{
			_PositionX = 0;
		}

		if( _PositionY > _JoystickMainHeigth)
		{
			_PositionY = _JoystickMainHeigth;
		}

		if( _PositionY <  0)
		{
			_PositionY = 0;
		}


		_PositionY -= _JoystickMax;
		_PositionX -= _JoystickMax;
	}
	
}

function Joystick_OnTouchEnd()
{
	$( "#Joystick" ).css( "left", (_JoystickMainWidth/2 - _JoystickWidth/2).toString() ) ;
	$( "#Joystick" ).css( "top",  (_JoystickMainHeigth/2 - _JoystickHeigth/2).toString() ) ;

	_PositionX = 0;
	_PositionY = 0;
}

function Joystick_OnTouchCancel()
{
	$( "#Joystick" ).css( "left", (_JoystickMainWidth/2 - _JoystickWidth/2).toString() ) ;
	$( "#Joystick" ).css( "top",  (_JoystickMainHeigth/2 - _JoystickHeigth/2).toString() ) ;

	_PositionX = 0;
	_PositionY = 0;

	console.warn("[WARN] touchcancel event -> Joystick position reset");
}

function Joystick_OnTouchMove()
{	
	var tmpWidth = (event.touches[0].clientX  - $('#JoystickMain').offset().left - _JoystickWidth /2);
	var tmpHeigth =  (event.touches[0].clientY  - $('#JoystickMain').offset().top - _JoystickHeigth /2);

	if(tmpHeigth > _JoystickMainHeigth - _JoystickHeigth)
	{
		tmpHeigth =  _JoystickMainHeigth - _JoystickHeigth;
	}

	if(tmpWidth >  _JoystickMainWidth - _JoystickWidth)
	{
		tmpWidth = _JoystickMainWidth - _JoystickWidth;
	}

	if(tmpHeigth < 0)
	{
		tmpHeigth = 0;
	}

	if(tmpWidth < 0)
	{
		tmpWidth = 0;
	}

	$( "#Joystick" ).css( "left",  tmpWidth.toString() ) ;
	$( "#Joystick" ).css( "top",  tmpHeigth.toString() ) ;

	 _PositionX = event.touches[0].clientX  - $('#JoystickMain').offset().left;
	 _PositionY = event.touches[0].clientY  - $('#JoystickMain').offset().top;


	if( _PositionX > _JoystickMainHeigth)
	{
		_PositionX = _JoystickMainHeigth;
	}

	if( _PositionX <   0)
	{
		_PositionX = 0;
	}

	if( _PositionY > _JoystickMainHeigth)
	{
		_PositionY = _JoystickMainHeigth;
	}

	if( _PositionY <  0)
	{
		_PositionY = 0;
	}


	_PositionY -= _JoystickMax;
	_PositionX -= _JoystickMax;
}

function GetJoystick_X()
{
	if(JoystickReady)
	{
		return _PositionX;
	}
	else
	{
		console.warn("[WARN] GetJoystick_X -> JoystickReady is set to False - Please launch LoadJoystick function");
	}
	
}

function GetJoystick_X_Percent()
{
	if(JoystickReady)
	{
		return (_PositionX * 100 )/ _JoystickMax ;
	}
	else
	{
		console.warn("[WARN] GetJoystick_X_Percent -> JoystickReady is set to False - Please launch LoadJoystick function");
	}
}

function GetJoystick_Y_Percent()
{
	if(JoystickReady)
	{
		return (_PositionY * 100 )/ _JoystickMax ;
	}
	else
	{
		console.warn("[WARN] GetJoystick_Y_Percent -> JoystickReady is set to False - Please launch LoadJoystick function");
	}
}

function GetJoystick_Y()
{
	if(JoystickReady)
	{

		return _PositionY;
	}
	else
	{
		console.warn("[WARN] GetJoystick_Y -> JoystickReady is set to False - Please launch LoadJoystick function");
	}
}

function GetJoystick_Max()
{
	return _JoystickMax;
}


console.log("SimpleJoystick.js - By https://github.com/thomassifferlen");
//[GENERATED] : INCLUDE : ../Src/Engine/ActionManager.js
class Action
{
    constructor(id, func, name)
    {
      this.id = id;
      this.func = func;
      this.name = name;
    }

    run()
    {
        this.func();
    }
}

class ActionManager
{
  constructor()
  {

    this.Actions_Array = [];

    console.log("[INFO] ActionManager Ready");
  } //End constructor() function

  Add_Action( newAction )
  {
    this.Actions_Array.push(newAction);
  }

  Run_Action_By_ID( id )
  {
      if(id != -1)
      {
          for( var i = 0 ; i < this.Actions_Array.length ; i++ )
          {
              if(this.Actions_Array[i].id == id)
              {
                  this.Actions_Array[i].run();
              }
          }
      }    
  }

}

//[GENERATED] : INCLUDE : ../Src/Scenario/ScenarioManager.js
class ScenarioStep
{
	  constructor(name, func, id)
	  {
	  		this.name = name;
	  		this.func = func;
	  		this.ID = id;
	  		this.StepDone = false;

	  		this.requiredStepsID = [];
	  }

	  run()
	  {
	          this.func();
	          this.StepDone = true;
	  }
}

class ScenarioManager
{
	  constructor()
	  {

	    this.Steps_Array = [];
	    this.currentStep_id = 0;

	    console.log("[INFO] ScenarioManager Ready");
	  } //End constructor() function

	  Add_Scenario_Step( newStep )
	  {
	    this.Steps_Array.push(newStep);
	  }

	  Run_ScenarioStep_By_ID( id )
	  {
	      if(id != -1)
	      {
	          for( var i = 0 ; i < this.Steps_Array.length ; i++ )
	          {
	              if(this.Steps_Array[i].ID == id)
	              {
	              		if(this.VerifyStepRequirements(this.Steps_Array[i].requiredStepsID) && this.Steps_Array[i].StepDone == false)
	              		{
	              			this.Steps_Array[i].run();
	              		}
	              		else
	              		{
	              			//console.log("Step invalid requirements or already done !");
	              		}   	
	              }
	              else
	              {
	              	//console.log('no match' + id);
	              }
	          }
	      }    
	  }

	  GetSetp_ByID(id)
	  {
			if(id != -1)
			{
			  for( var i = 0 ; i < this.Steps_Array.length ; i++ )
			  {
			      if(this.Steps_Array[i].ID == id)
			      {
			          return this.Steps_Array[i];
			      }
			  }
			}

			return null; 
	  }

	  VerifyStepRequirements(requiredSteps)
	  {
	  	// we want all steps (by id) in the array are already done , if not , return false
	  		for( var i = 0 ; i < requiredSteps.length ; i++ )
	          {
	          		if (this.GetSetp_ByID(requiredSteps[i]) != null)
	          		{
						if(!this.GetSetp_ByID(requiredSteps[i]).StepDone)
						{
							return false;
						}
	          		}
	          		else
	          		{
	          			console.log("[WARN] Invalid step ID required ... returning False");
	          			return false;
	          		}
	          }
	          return true;	
	  }
}
//[GENERATED] : INCLUDE : ../Src/Network/NetworkManager.js
var RPJE_NETWORK_LAST_RESPONSE = "NULL";

class NetworkManager
{
    constructor(id_client)
    {
      this.id_client = id_client;
      this.Socket = null;
      this.url_serv = "";
      this.lastResponse = "Please getLastResponse()";

      console.log("[INFO] NetworkManager Ready");
    }

    updateLastResponse()
    {
       this.lastResponse = RPJE_NETWORK_LAST_RESPONSE;
    }

    getLastResponse()
    {
      this.updateLastResponse();
      return this.lastResponse;
    }

    sendCmd(str)
    {
        this.Socket.send(this.id_client + "##-##" + str);
    }

    send_Player_To_Server(currentPlayer)
    {
        this.sendCmd(currentPlayer.position.x.toString() + "##-##" + currentPlayer.position.y.toString() + "##-##" + currentPlayer.direction.toString() + "##-##" + currentPlayer.spriteNumber.toString());
    }

    connect(url_serv)
    {
        this.url_serv = url_serv;
        this.Socket = new WebSocket(url_serv);

        this.Socket.onmessage = function(e)
        {
            RPJE_NETWORK_LAST_RESPONSE = e.data;
            //console.log(RPJE_NETWORK_LAST_RESPONSE);
        };

        console.log("[INFO] Multiplayer enabled, NetworkManager is connecting to : " + url_serv);
    }
 
}
//[GENERATED] : INCLUDE : ../Src/Engine/Npc.js
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
//[GENERATED] : INCLUDE : ../Src/Engine/Player.js
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

    this.position = new PairStruct(50,50);
    this.bag = new Array();

    this.spriteNumber = 0;

    this.direction = PLAYER_DIRECTION_DOWN;

    this.PlayerSprites_Up = [];
    this.PlayerSprites_Right = [];
    this.PlayerSprites_Down = [];
    this.PlayerSprites_Left = [];

    console.log("[INFO] Player Ready");

  } //End constructor() function

  SetPositionCoord(x, y, engineConfig)
  {
  		if(x > engineConfig.nbr_Width -1 || y > engineConfig.nbr_Height -1 || x < 0 || y < 0)
  		{
  			console.error("[ERROR] Player SetPositionCoord() invalid coordinates : " + x.toString() + " " + y.toString() + " must be between 0 / " + (engineConfig.nbr_Width -1).toString() + " and 0 / " + (engineConfig.nbr_Height -1).toString());
  			return false;
  		}

  		this.position.x = x * engineConfig.tileSize;
  		this.position.y = y * engineConfig.tileSize;		
  }

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
//[GENERATED] : INCLUDE : ../Src/Engine/Map.js
class Map
{
  constructor(nbr_Width, nbr_Height, worldPosition_X, worldPosition_Y)
  {
    this.nbr_Height = nbr_Height;
    this.nbr_Width = nbr_Width;

    this.worldPosition = new PairStruct(worldPosition_X, worldPosition_Y);

    //Double Arrays
    this.mapTiles = new Array();
    this.mapEvent = new Array();

    this.mapGoto = new Array();
    this.mapObjects = new Array();

    //LightMap
    this.mapLights = new Array();
    this.EnableLights = false;
    this.majorLightLevel = 0;

    for(var x = 0 ; x < this.nbr_Width ; x++)
    {
      this.mapTiles[x] = new Array();
      this.mapEvent[x] = new Array();
      this.mapObjects[x] = new Array();
      this.mapLights[x] = new Array();

      for(var y = 0 ; y < this.nbr_Height ; y++)
      {
        this.mapTiles[x][y] = 0;
        this.mapEvent[x][y] = -1;
        this.mapObjects[x][y] = -1;
        this.mapLights[x][y] = 0;
      }
    }

    console.log("[INFO] Map Ready");
  }

  randomizeMapGround(rangeMin, rangeMax)
  {
      for(var x = 0 ; x < this.nbr_Width ; x++)
      {
        for(var y = 0 ; y < this.nbr_Height ; y++)
        {
          this.mapTiles[x][y] = Math.floor(Math.random() * (rangeMax - rangeMin +1)) + rangeMin ;
        }
      }
  }

  clearMap()
  {
    for(var x = 0 ; x < this.nbr_Width ; x++)
    {
      for(var y = 0 ; y < this.nbr_Height ; y++)
      {
        this.mapTiles[x][y] = 99;
        this.mapEvent[x][y] = -1;
        this.mapObjects[x][y] = -1;
        this.mapLights[x][y] = 0;
      }
    }
  }

  loadMapJSON(str_JSON)
  {
    if(str_JSON != "NULL")
    {
        var JSON_obj = JSON.parse( str_JSON );

        for(var i = 0 ; i < JSON_obj['mapTiles'].length; i++)
        {
            var splitStr = JSON_obj['mapTiles'][i].split("-");

            this.setTile(splitStr[0], splitStr[1], splitStr[2])
        }

        for(var i = 0 ; i < JSON_obj['mapObjects'].length; i++)
        {
            var splitStr = JSON_obj['mapObjects'][i].split("-");

            this.seMapObj(splitStr[0], splitStr[1], splitStr[2])
        }

        console.log("[INFO] Map JSON Loaded");
    }
    else
    {
        console.error("[ERROR] loadMapJSON() failed, Map JSON is NULL");
    }
       
  }

  isWalkableTile(x,y)
  {
    //console.log(y);
      if( x < this.nbr_Width && x >= 0 && y < this.nbr_Height && y >= 0)
      {
          if(this.mapObjects[x][y] == -1)
          {
              return true;
          }
          else
          {
            return false;
          }
      }
      else
      {
          return false;
      }
  }

  setTile(x, y, value)
  {
        if( x < this.nbr_Width && x >= 0 && y < this.nbr_Height && y >= 0)
        {
            this.mapTiles[x][y] = parseInt(value);
        }
        else
        {
          console.error("[WARN] setTile() position is out of Map bounds - aborting function");
        }
  }

  setAmbiantLight(value)
  {
    if(value > 4 || value < 0)
    {
        console.error("[WARN] setAmbiantLight() invalid LightValue - should be between 0 and 4");
        return;
    }

      for(var x = 0 ; x < this.nbr_Width ; x++)
      {
        for(var y = 0 ; y < this.nbr_Height ; y++)
        {
           this.mapLights[x][y] = parseInt(value);
        }
      }

       this.majorLightLevel = parseInt(value);
  }

  setLightTile(x, y, value, is_strict)
  {
        if( x < this.nbr_Width && x >= 0 && y < this.nbr_Height && y >= 0)
        {
            if(value > 4 || value < 0)
            {
                console.error("[WARN] setLightTile() invalid LightValue - should be between 0 and 4");
            }
            else
            {
                if (!is_strict)
                {
                  if(this.mapLights[x][y] > parseInt(value))
                  {
                    this.mapLights[x][y] = parseInt(value);
                  }
                }
                else
                {
                  this.mapLights[x][y] = parseInt(value);
                }
            } 
        }
        else
        {
          console.warn("[WARN] setLightTile() position is out of Map bounds");
        }
  }

  setLightSource(x, y)
  {
        if( x < this.nbr_Width && x >= 0 && y < this.nbr_Height && y >= 0)
        {
            this.setLightTile(x, y, 0, false);

            if(this.majorLightLevel > 1)
            {
              this.setLightTile(x - 1, y, 1, false);
              this.setLightTile(x + 1, y, 1, false);
              this.setLightTile(x, y + 1, 1, false);
              this.setLightTile(x, y - 1, 1, false);
            }

            if(this.majorLightLevel > 2)
            {
              this.setLightTile(x - 1, y - 1, 2, false);
              this.setLightTile(x + 1, y - 1, 2, false);
              this.setLightTile(x - 1, y + 1, 2, false);
              this.setLightTile(x + 1, y + 1, 2, false);
              this.setLightTile(x + 2, y, 2, false);
              this.setLightTile(x - 2, y, 2, false);
              this.setLightTile(x , y - 2, 2, false);
              this.setLightTile(x , y + 2, 2, false);
            }

            if(this.majorLightLevel > 3)
            {
              this.setLightTile(x , y + 3, 3, false);
              this.setLightTile(x , y - 3, 3, false);
              this.setLightTile(x + 3, y , 3, false);
              this.setLightTile(x - 3, y , 3, false);
              this.setLightTile(x - 2, y -1, 3, false);
              this.setLightTile(x - 1, y -2, 3, false);
              this.setLightTile(x - 2, y + 1, 3, false);
              this.setLightTile(x - 1, y + 2, 3, false);
              this.setLightTile(x + 2, y +1, 3, false);
              this.setLightTile(x + 1, y +2, 3, false);
              this.setLightTile(x + 2, y - 1, 3, false);
              this.setLightTile(x + 1, y - 2, 3, false);
            }
        }
        else
        {
          console.error("[WARN] setLightPoint() position is out of Map bounds - aborting function");
        }
  }

  seMapObj(x, y, value)
  {
        if( x < this.nbr_Width && x >= 0 && y < this.nbr_Height && y >= 0)
        {
            this.mapObjects[x][y] = parseInt(value);
        }
        else
        {
          console.error("[WARN] seMapObj() position is out of Map bounds - aborting function");
        }
  }

  getMapObj(x, y)
  { 
      if( x < this.nbr_Width && x >= 0 && y < this.nbr_Height && y >= 0)
      {
          return this.mapObjects[x][y];
      }
  }

  exportJSON()
  {

    var JSONExport = '{"mapTiles":['

    for(var x = 0 ; x < this.nbr_Width ; x++)
    {
      for(var y = 0 ; y < this.nbr_Height ; y++)
      {
         JSONExport = JSONExport + '"'+(x).toString()+'-'+(y).toString()+'-'+(this.mapTiles[x][y]).toString()+'"';

          JSONExport = JSONExport + ',';
      }
    }

    JSONExport = JSONExport.slice(0, -1);

    JSONExport = JSONExport + '],"mapObjects":[';

    for(var x = 0 ; x < this.nbr_Width ; x++)
    {
      for(var y = 0 ; y < this.nbr_Height ; y++)
      {

        if (this.mapObjects[x][y] != -1)
        {
            JSONExport = JSONExport + '"'+(x).toString()+'-'+(y).toString()+'-'+(this.mapObjects[x][y]).toString()+'"';

            
            JSONExport = JSONExport + ',';
             
        }
        
      }
    }

     JSONExport = JSONExport.slice(0, -1);

    JSONExport = JSONExport + ']}'

    return JSONExport;
  }

}
//[GENERATED] : INCLUDE : ../Src/Display/DisplayManager.js
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
                        this.ctx.drawImage( this.tilesObjIMG_Array[i].img , x * this.tileSize, y * this.tileSize - (this.tileSize - this.tilesObjIMG_Array[i].img.naturalHeight));
                }
            }
	      }
	    }  
      this.drawPlayer(playerToDraw);
      this.drawLights_and_Shadows(mapToDraw);
  }

  drawLights_and_Shadows(mapToDraw)
  {
    if(!mapToDraw.EnableLights) //if light are set off (performance issues for example)
    {
        return;
    }

      for(var x = 0 ; x < mapToDraw.nbr_Width ; x++)
        {
            for(var y = 0 ; y < mapToDraw.nbr_Height ; y++)
            {
              switch(mapToDraw.mapLights[x][y])
              {
                  case 0 :
                    this.ctx.beginPath();
                    this.ctx.rect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                    this.ctx.fillStyle = "rgba(0, 0, 0, 0)";
                    this.ctx.fill();
                  break;

                  case 1 :
                    this.ctx.beginPath();
                    this.ctx.rect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                    this.ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
                    this.ctx.fill();
                  break;

                  case 2 :
                    this.ctx.beginPath();
                    this.ctx.rect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                    this.ctx.fill();
                  break;

                  case 3 :
                    this.ctx.beginPath();
                    this.ctx.rect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                    this.ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
                    this.ctx.fill();
                  break;

                  case 4 :
                    this.ctx.beginPath();
                    this.ctx.rect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                    this.ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
                    this.ctx.fill();
                  break;

                  default:
                    console.log("[WARN] Invalid light / shadow value, ignoring ...");
                  break;

              }
            }
        }
  }

}
//[GENERATED] : INCLUDE : ../Src/Engine/Engine.js

var MainEngine = "NULL";


class RPJE_Config
{
	constructor(nbr_Width, nbr_Height, worldSize, tileSize)
	{
		this.nbr_Height = nbr_Height;
		this.nbr_Width = nbr_Width;
		this.worldSize = worldSize;
		this.tileSize = tileSize;
		this.EngineSpeed = 40;
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
		Add_HTML_Game_Responsive_Canvas();
		Add_HTML_Dialog_Zone();
		Add_HTML_Joystick();

		this.is_Ready = false;

		this.config = myRPJE_Config;
		this.currentMap = new Map(this.config.nbr_Width, this.config.nbr_Height);
		
		this.displayManager = new DisplayManager(myRPJE_Config);

		this.actionManager = new ActionManager();

		this.scenarioManager = new ScenarioManager();

		this.networkManager = new NetworkManager(Tools_randomSTR());

		this.world = new Array();

		this.player = new Player("PlayerName");

		this.NpcArray = new Array();

		this.player_Guest_Multiplayer = new Player("Guest");

		for(var x = 0 ; x < this.config.worldSize ; x++)
	    {
	      this.world[x] = new Array();

	      for(var y = 0 ; y < this.config.worldSize ; y++)
	      {
	        this.world[x][y] = "NULL";
	      }
	    }

	    this.is_Ready = true;
	    this.is_Multiplayer = false;

	    this.displayManager.screenFit(this.config.nbr_Width, this.config.nbr_Height);

	    this.TickFunc_Array = [];

	    console.log("[INFO] Engine Ready");
	}

	Multiplayer_Connect_To(str)
	{
		this.networkManager.connect(str);
		this.is_Multiplayer = true;
		console.log("[INFO] Multiplayer to : " + str);
	}

	SetWorldMap(x ,y, json)
	{
		 this.world[x][y] = json;
	}

	SetEngineSpeed(speed_ms)
	{
		this.config.EngineSpeed = speed_ms;
	}

	GetEngineSpeed(speed_ms)
	{
		return this.config.EngineSpeed;
	}

	UpdateScreen()
	{
		this.displayManager.drawMap(this.currentMap, this.player);
	}

	UpdateMultiplayerScreenParts(net_Players_Array)
	{
		for( var i = 0 ; i < net_Players_Array.length ; i++)
		{
			if(net_Players_Array[i].id != this.networkManager.id_client) // si c'est pas le player local
			{
				this.player_Guest_Multiplayer.position.x = net_Players_Array[i].posx;
				this.player_Guest_Multiplayer.position.y = net_Players_Array[i].posy;
				this.player_Guest_Multiplayer.spriteNumber = parseInt(net_Players_Array[i].spriteNumber);
				this.player_Guest_Multiplayer.direction = parseInt(net_Players_Array[i].direction);

				this.displayManager.drawPlayer(this.player_Guest_Multiplayer);
			}
		}
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

	Action()
	{
		this.actionManager.Run_Action_By_ID(this.player.GetFacingMapObject(this.currentMap, this.config));
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

			var is_move = this.player.Move(this.currentMap,this.config);

			this.UpdateScreen();

			if(this.is_Multiplayer) // si on est en multijoueur
			{
				if(this.networkManager.Socket.readyState === this.networkManager.Socket.OPEN)
				{
	   				this.networkManager.send_Player_To_Server(this.player);

					if(this.networkManager.getLastResponse() != "NULL")
					{
						var networkPlayers = JSON.parse( this.networkManager.getLastResponse() );

						//console.log(this.networkManager.getLastResponse() );
						//console.log(networkPlayers["Players"]);

						this.UpdateMultiplayerScreenParts(networkPlayers["Players"])
					}
				}
				else if(this.networkManager.Socket.readyState === this.networkManager.Socket.CLOSED)
				{
	   				console.log("[INFO] Closing Multiplayer ....");
	   				this.is_Multiplayer = false;
				}	
			}
		}
		else
		{
			console.warn("[INFO] tick() -> Engine is_Ready is set to False");
		}
	}
}

console.log("RPJE by https://github.com/thomassifferlen - Role Playing Javascript Engine V1.0");
//[GENERATED] : INCLUDE : ../Src/Other/RPJE_Tools.js
// ENGINE
var loopInterval;

function RPJE_SetMainEngine(thisEngine)
{
	MainEngine = thisEngine;
}

function RPJE_StartEngine(speed)
{
	RPJE_GetEngine().SetEngineSpeed(speed);
	loopInterval = setInterval(function(){  RPJE_GetEngine().tick(); }, RPJE_GetEngine().GetEngineSpeed());
}

function RPJE_StopEngine()
{
	clearInterval(loopInterval);
}

function RPJE_GetEngine()
{
	return MainEngine;
}
//[GENERATED] : INCLUDE : ../Src/Engine/HTMLEventsManager.js
var _JoystickEnabled = false;

function EnableJoystick()
{
	LoadJoystick();
	
	_JoystickEnabled = true;

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
}

function DisableJoystick()
{
	_JoystickEnabled = false;
}

function is_JoystickEnabled()
{
	return _JoystickEnabled;
}

window.onresize = function(event)
{
    RPJE_GetEngine().displayManager.screenFit(RPJE_GetEngine().config.nbr_Width, RPJE_GetEngine().config.nbr_Height);
};

//This Will execute this function each engine tick


console.log("[INFO] EventsManager Loaded");
//[GENERATED] : INCLUDE : ../Src/Engine/HTMLEventsManager.js
var _JoystickEnabled = false;

function EnableJoystick()
{
	LoadJoystick();
	
	_JoystickEnabled = true;

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
}

function DisableJoystick()
{
	_JoystickEnabled = false;
}

function is_JoystickEnabled()
{
	return _JoystickEnabled;
}

window.onresize = function(event)
{
    RPJE_GetEngine().displayManager.screenFit(RPJE_GetEngine().config.nbr_Width, RPJE_GetEngine().config.nbr_Height);
};

//This Will execute this function each engine tick


console.log("[INFO] EventsManager Loaded");
//[GENERATED] : INCLUDE : ../Src/JS_Obj_Load/RPJE_JS_Obj_Load_Tools.js
function RPJE_JS_Obj_Load_Player_Sprites(JS_Obj, is_guest_player)
{
	for (PlayerDirection in JS_Obj)
	{

		if(PlayerDirection == "PLAYER_DIRECTION_UP")
		{
			for(var i = 0; i < JS_Obj[PlayerDirection].length ; i++)
			{
				if(is_guest_player)
				{
					RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_UP, JS_Obj[PlayerDirection][i]);
				}
				else
				{
					RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_UP, JS_Obj[PlayerDirection][i]);
				}
				
			}
		}
		else if(PlayerDirection == "PLAYER_DIRECTION_DOWN")
		{
			for(var i = 0; i < JS_Obj[PlayerDirection].length ; i++)
			{
				if(is_guest_player)
				{
					RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_DOWN, JS_Obj[PlayerDirection][i]);
				}
				else
				{
					RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_DOWN, JS_Obj[PlayerDirection][i]);
				}
			}
		}
		else if(PlayerDirection == "PLAYER_DIRECTION_RIGHT")
		{
			for(var i = 0; i < JS_Obj[PlayerDirection].length ; i++)
			{
				if(is_guest_player)
				{
					RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_RIGHT, JS_Obj[PlayerDirection][i]);
				}
				else
				{
					RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_RIGHT, JS_Obj[PlayerDirection][i]);
				}
			}
		}
		else if(PlayerDirection == "PLAYER_DIRECTION_LEFT")
		{
			for(var i = 0; i < JS_Obj[PlayerDirection].length ; i++)
			{
				if(is_guest_player)
				{
					RPJE_GetEngine().player_Guest_Multiplayer.AddSprite( PLAYER_DIRECTION_LEFT, JS_Obj[PlayerDirection][i]);
				}
				else
				{
					RPJE_GetEngine().player.AddSprite( PLAYER_DIRECTION_LEFT, JS_Obj[PlayerDirection][i]);
				}
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
//[GENERATED] : INCLUDE : ../Src/MapEditor/EditMap.js
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