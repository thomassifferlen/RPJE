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

    for(var x = 0 ; x < this.nbr_Width ; x++)
    {
      this.mapTiles[x] = new Array();
      this.mapEvent[x] = new Array();
      this.mapObjects[x] = new Array();

      for(var y = 0 ; y < this.nbr_Height ; y++)
      {
        this.mapTiles[x][y] = 0;
        this.mapEvent[x][y] = -1;
        this.mapObjects[x][y] = -1;
      }
    }

    console.log("[INFO] Map Ready");

  } //End constructor() function

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

}