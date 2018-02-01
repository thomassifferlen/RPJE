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