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
      		document.getElementById("PopupCanvas").style.width = tmpW/1.5 + "px" ;
      		document.getElementById("PopupCanvas").style.height = tmpW/1.5 + "px";
      	}
      	else
      	{
      		document.getElementById("PopupCanvas").style.width = tmpH/1.5 + "px" ;
      		document.getElementById("PopupCanvas").style.height = tmpH/1.5 + "px";
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






