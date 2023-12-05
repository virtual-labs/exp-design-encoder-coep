function config1(){
	arrayJson=[];
	masterJson={};
//	tempJson = {};	

var weight="";
 var meter="";
var cylinderPiston="";
data = {};
dataJson = {};
var wrongCounter=0;
var htm='<div class="row" >'
//		+'<div class="col-sm-6">'
//	   +'<label class="labelstyle">Select speed (RPM) </label>'
//	   +'</div>'
//	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Number Of Holes</label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf"  id="noh" style="height:auto;" >'
	   +'<option value="0">--- Select Number Of Holes --- </option>'
	   +'<option value="16" >16  </option>'
//	   +'<option value="2" >2  </option>'
//	   +'<option value="21">21</option>'
//	   +'<option value="37" >37  </option>'
	 
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'  
	   +'<div class="row slidecontainer" >'
	  
	   +'<div class="col-sm-6">'
	
	   +'<label class="labelstyle">Select speed (RPM)(Min:100 - Max:1800)</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +' <input type="range" min="100" max="1800" value="18" id="speed">'
	   +'<center><span id="sliderValue"></span></center>'
	   +'</div>'
	  
	   +'</div>'
	  +'<br>'
	  +'<br>'
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
//	   +'<label for="meter">Select Arm length (mm) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<span id="validMaterialMsg" class="validMaterialMsgStyle" hidden><span>'
	   +'</div>'
	   +'</div>'
	  +'<br>'
	   +'<div class="row"  >'
	   +'<div class="col-sm-12" id="mimicbtnquesAns">'
	 +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg" ><b>Start Mimic</b></button>'
	   
	      +'</div>'
	      
//data-toggle="modal" data-target="#congfModel"

	   +'</div>'
	   + '<div class="row"  id="CalculateActualFlow" hidden>'
		   +'<div class=" col-sm-4">'
	       +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Count Number of Pulses  : </label>'
	       +'</div>'
           +'<div class="col-sm-4">'
	       +'<input type="text" id="flowAns"  style=margin:15px 10px;width:100%;"  class=" form-control" />'
	       +'</div>'
	       +'<div class="col-sm-4">'
	       +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
	       +'</div>'
	       +'</div>'
	       +'<br>'
	       +'<br>'
	       + ' <!-- Modal -->'
			+ '<div class="modal fade" id="myModal" role="dialog">'
			+ ' <div class="modal-dialog modal-md">'
			+ '    <div class="modal-content">'
			+ '     <div class="modal-header">'
			
			+ '       <h4 class="modal-title">Message box</h4>'
			+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
			+ '     </div>'
			+ '     <div class="modal-body" id="modelMsg">'
//			+ '       <p >This is a small modal.</p>'
			+ '     </div>'
			+ '     <div class="modal-footer">'
			+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
			+ '     </div>'
			+ '   </div>'
			+ ' </div>'
			+ '</div>'
			//model Close
	
  $("#main-div-conf").html(htm);

var value=0;
var noh=0;
		$(document).on('input', '#speed', function() {
			value = parseInt($(this).val());
		    $('#sliderValue').html(value);
		});
	 
	 
	  
	   $("#checkConfg").click(function(){
//		 if($("#noh").val()=="0")  
//		 {
//			 $("#modelMsg").html("Please select required field. ");
//				
//		 }  
//		   
//	   else{
		   $("#flowAns").val('');
			$("body").css("padding","0px 0px 0px 0px");
		   $("#noh").prop("disabled",true);
		  noh= parseInt($("#noh").val());
		  console.log("hole"+noh);
		  console.log("value"+value);
		  if(noh==0 || value==0)
			  {
			  	$("#validMaterialMsg").html("Select Number Of Holes.");
			  	 console.log("hole"+noh);
			  	 console.log("value"+value);
			  	$("#validMaterialMsg").prop("hidden",false);
			  }
		  else
			  {

			  		mimic(value,noh);
				 }
			var id=0;
		  $("#btnAnsCheck").click(function() {
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#flowAns").val();
			  
				console.log("ans check"+flowAns);
				flow=value*noh;

				if(flowAns==""){
					
					$("#modelMsg").html("Enter numeric value ");
					
				}
				else
					{
					if (id <= 3) {
						if (flowAns == flow) {
							
							
							 $("#modelMsg").css("color", "blue");
							$("#modelMsg").html("Change the Speed and take  next reading .   ");
							
							$("#CalculateActualFlow").prop("hidden",true);
							$("#checkConfg").prop("hidden",false);	
							addtoMasterJson();
							tableCreate();

							
						} else if (flowAns != flow) {
							
							 $("#modelMsg").css("color", "red");
						$("#modelMsg").html("Entered value is incorrect.Try again . ");
						
						}


					} else if (id == 4) {
						 $("#modelMsg").css("color", "blue");
						$("#modelMsg").html("FORMULA : PULSES = SPEED * NUMBER OF HOLES  ");
						
					} else {
						flowAns = $("#flowAns").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == flow) {
							
							
							$("#modelMsg").css("color", "blue");
							$("#modelMsg").html("Change the Speed and take  next reading .  ");
							$("#CalculateActualFlow").prop("hidden",true);
							$("#checkConfg").prop("hidden",false);
							addtoMasterJson();
							tableCreate();
							
							
							
						} else {
							
							$("#modelMsg").html("Correct answer is " + flow);
							

						}
					}
					id++;
					}
					function addtoMasterJson()
					{
						tempJson={};
						tempJson.value1 = value;
						tempJson.noh = noh;
						tempJson.flow = flow;
						arrayJson.push(tempJson);
						masterJson.demo = arrayJson;
						console.log(masterJson);
						tableCreate(masterJson);
					}
				});
//	   }
	   });

	  
}	
		
		
	   
