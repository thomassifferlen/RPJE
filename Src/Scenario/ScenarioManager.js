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