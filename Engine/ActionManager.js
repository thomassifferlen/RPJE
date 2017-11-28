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
