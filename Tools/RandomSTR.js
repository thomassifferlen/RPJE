function Tools_randomSTR()
{
  	var text = "";
  	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  	for (var i = 0; i < 10; i++)
    	text += possible.charAt(Math.floor(Math.random() * possible.length));

	console.log("[INFO] Random STR : " + text);

  	return text;
}

