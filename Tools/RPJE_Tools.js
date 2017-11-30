// ENGINE

var loopInterval;

function RPJE_SetMainEngine(thisEngine)
{
	MainEngine = thisEngine;
}

function RPJE_StartEngine(speed)
{
	loopInterval = setInterval(function(){ MainEngine.tick(); }, speed);
}

function RPJE_StopEngine()
{
	clearInterval(loopInterval);
}

function RPJE_GetEngine()
{
	return MainEngine;
}

// DIALOG BASED

var CurrentDialog = "";
var Writing_Interval;
var currentLetterIndex = 0;
var DialogEnd = false;

var DialogEndFunction = null;

function RPJE_Game_Dialog(str, endFunction)
{
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

function RPJE_Game_DialogEnd()
{
	RPJE_Game_HideDialog(true);
	RPJE_StartEngine(40);

	currentLetterIndex = 0;
	CurrentDialog = "";
	DialogEnd = false;

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