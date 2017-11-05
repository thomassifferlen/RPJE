var _JoystickEnabled = false;

function EnableJoystick()
{
	_JoystickEnabled = true;
}

function DisableJoystick()
{
	_JoystickEnabled = false;
}

function is_JoystickEnabled()
{
	return _JoystickEnabled;
}

function MoveUp(doyoumove)
{
	if (doyoumove)
	{
		MainEngine.player.is_Moving = true;
		MainEngine.player.direction = PLAYER_DIRECTION_UP;
	}
	else
	{
		if(MainEngine.player.direction == PLAYER_DIRECTION_UP)
		{
			MainEngine.player.is_Moving = false;
		}
	}
}

function MoveRight(doyoumove)
{
	if (doyoumove)
	{
		MainEngine.player.is_Moving = true;
		MainEngine.player.direction = PLAYER_DIRECTION_RIGHT;
	}
	else
	{
		if(MainEngine.player.direction == PLAYER_DIRECTION_RIGHT)
		{
			MainEngine.player.is_Moving = false;
		}
	}
}

function MoveLeft(doyoumove)
{
	if (doyoumove)
	{
		MainEngine.player.is_Moving = true;
		MainEngine.player.direction = PLAYER_DIRECTION_LEFT;
	}
	else
	{
		if(MainEngine.player.direction == PLAYER_DIRECTION_LEFT)
		{
			MainEngine.player.is_Moving = false;
		}
	}
}

function MoveDown(doyoumove)
{
	if (doyoumove)
	{
		MainEngine.player.is_Moving = true;
		MainEngine.player.direction = PLAYER_DIRECTION_DOWN;
	}
	else
	{
		if(MainEngine.player.direction == PLAYER_DIRECTION_DOWN)
		{
			MainEngine.player.is_Moving = false;
		}
	}
}

window.onkeydown = function(event)
{
	var key = event.which || event.keyCode;

	switch(key)
	{
		case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
			MoveUp(true);
		break;

		case 40 : case 115 : case 83 : // Flèche bas, s, S
			MoveDown(true);
		break;

		case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
			MoveLeft(true);
		break;

		case 39 : case 100 : case 68 : // Flèche droite, d, D
			MoveRight(true);
		break;
	}
}

window.onkeyup = function(event)
{
	var key = event.which || event.keyCode;

	switch(key)
	{
		case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
			MoveUp(false);	
		break;

		case 40 : case 115 : case 83 : // Flèche bas, s, S
			MoveDown(false);
		break;

		case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
			MoveLeft(false);
		break;

		case 39 : case 100 : case 68 : // Flèche droite, d, D
			MoveRight(false);
		break;
	}
}

window.onresize = function(event)
{
    MainEngine.displayManager.screenFit(16, 9);
};

console.log("[INFO] EventsManager Loaded");