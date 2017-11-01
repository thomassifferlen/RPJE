function main()
{
	LoadJoystick();
	SetMainEngine(new RPJE_Engine(new RPJE_Config(16,9,4)));
	StartEngine();
	EnableJoystick(); //Enable Joystick and disable Keyboard - DisableJoystick() for Keyboard only
}