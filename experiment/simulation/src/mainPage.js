

var speed1=0;
var noh=0;
var ansCount=0;
function config1(){
	
	$("#canvas-div").html('<img src="images/mainPage.png" style="margin-top:20px" class="img-fluid" >');
	$("#centerText2").html("DIAGRAM");
	
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
		+'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select number of holes on the disc</label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf"  id="noh" style="height:auto;" >'
	   +'<option value="0">--- Select number of holes on the disc --- </option>'
	   +'<option value="2" >2  </option>'
	   +'<option value="4" >4  </option>'
	   +'<option value="8" >8  </option>'
	   +'<option value="16" >16  </option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'  
	   +'<div class="row slidecontainer" >'
	  
	   +'<div class="col-sm-6">'
	
	   +'<label class="labelstyle">Select speed (RPM)(Min:100 - Max:1000)</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf"  id="speed" style="height:auto;" >'
	   +'<option value="0">--- Select speed in RPM --- </option>'
	   +'<option value="100" >100  </option>'
	   +'<option value="200" >200  </option>'
	   +'<option value="300" >300  </option>'
	   +'<option value="400" >400  </option>'
	   +'<option value="500" >500  </option>'
	   +'<option value="600" >600  </option>'
	   +'<option value="700" >700  </option>'
	   +'<option value="800" >800  </option>'
	   +'<option value="900" >900  </option>'
	   +'<option value="1000" >1000  </option>'
	   +'</select>'
	   +'</div>'
	  
	   +'</div>'
	  
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
	   +'<div class="col-sm-12" id="mimicbtnquesAns" >'
	 +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg" disabled><b>CALCULATE</b></button>'
	   
	      +'</div>'
	      
//data-toggle="modal" data-target="#congfModel"

	   +'</div>'
	   + '<div class="row"  id="CalculateActualFlow" hidden>'
		   +'<div class=" col-sm-4">'
	       +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Number of Pulses  : </label>'
	       +'</div>'
           +'<div class="col-sm-4">'
	       +'<input type="text" id="flowAns"  style=margin:15px 10px;width:100%;"  class=" form-control" />'
	       +'</div>'
	       +'<div class="col-sm-4">'
	       +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
	       +'</div>'
	       +'</div>'
	     
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

		
		$("#speed").change(function(){
			 
			  noh= parseInt($("#noh").children(":selected").attr("value"));
			  speed1=parseInt($("#speed").children(":selected").attr("value"));
			  if(noh==0 || speed1==0)
			  {
			  	$("#validMaterialMsg").html("Wrong configuration.");
			 // 	 console.log("hole"+noh);
			//  	 console.log("speed"+speed1);
			  	$("#validMaterialMsg").prop("hidden",false);
				
			  	
			  }
			  else{
					$("#validMaterialMsg").prop("hidden",true);
				  $("#checkConfg").prop("disabled",false);
			  }
			  
		  });
		$("#noh").change(function(){
			  $("#noh").prop("disabled",false);
			  noh=parseInt($("#noh").children(":selected").attr("value"));
			  speed1=parseInt($("#speed").children(":selected").attr("value"));
			  if(noh==0)
			  {
			  	$("#validMaterialMsg").html("Wrong configuration.");
			 // 	 console.log("hole"+noh);
			 // 	console.log("speed"+speed1);
			
			  	$("#validMaterialMsg").prop("hidden",false);
			  }
			  else
				  {
				  $("#validMaterialMsg").prop("hidden",true);
				  }
			 
		  });
	   $("#checkConfg").click(function(){

		   $("#flowAns").val('');
			$("body").css("padding","0px 0px 0px 0px");
		   $("#noh,#speed").prop("disabled",true);
		  noh= parseInt($("#noh").val());
		//  console.log("hole"+noh);
		
		  speed1=parseInt($("#speed").children(":selected").attr("value"));
		   $("#speed option[value="+speed1+"]").css("background-color","#dacecf");
		   
		   $("#speed option[value="+speed1+"]").attr("disabled",true);
		  if(noh==0 )
			  {
			  	$("#validMaterialMsg").html("Select number of holes.");
			  	$("#checkConfg").prop("disabled",true);
			  	$("#validMaterialMsg").prop("hidden",false);
			  }
		  else if(speed==0){
			  $("#validMaterialMsg").html("Select speed RPM.");
			  $("#checkConfg").prop("disabled",true);
			  	$("#validMaterialMsg").prop("hidden",false);
		  }
		  else
			  {
//			  		mimic(value,noh);
			  $("#CalculateActualFlow").prop("hidden",false);
			  $("#checkConfg").prop("disabled",true);
				 }
	   });
			var id=0;
		  $("#btnAnsCheck").click(function() {
			  ansCount++;
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#flowAns").val();
			  
			//	console.log("ans check"+flowAns);
				flow=speed1*noh;

				if(flowAns=="" || isAlphabetical(flowAns)){
					
					$("#modelMsg").html("Enter numeric value");
					
				}
				else
					{
					if (id <= 3) {
						if (flowAns == flow) {
							
							
							 $("#modelMsg").css("color", "#a94442");
							$("#modelMsg").html("Change the speed and take next reading.");
							
							$("#CalculateActualFlow").prop("hidden",true);
							$("#checkConfg").prop("hidden",false);	
							 $("#speed").prop("disabled",false);
							 id=0;
							addtoMasterJson();
							//tableCreate();
							
							
						} else if (flowAns != flow) {
							
							 $("#modelMsg").css("color", "red");
						$("#modelMsg").html("<b>Entered value is incorrect. Try again.</b>");
						
						}


					} else if (id == 4) {
						 $("#modelMsg").css("color", "#a94442");
						$("#modelMsg").html("<b>FORMULA : <br>PULSES = SPEED * NUMBER OF HOLES</b>");
						
					} else {
						flowAns = $("#flowAns").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == flow) {
							
							
							$("#modelMsg").css("color", "#a94442");
							$("#modelMsg").html("<b>Change the speed and take next reading.</b>");
							$("#CalculateActualFlow").prop("hidden",true);
							$("#checkConfg").prop("hidden",false);
							$("#speed").prop("disabled",false);
							id=0;
							addtoMasterJson();
						//	tableCreate();
							
							
							
						} else {
							$("#modelMsg").css("color", "#28a745");
							$("#modelMsg").html("<b>Correct answer is " + flow+"</b>");
							

						}
					}
					id++;
					}
					function addtoMasterJson()
					{
						tempJson={};
						tempJson.speed = speed1;
						tempJson.noh = noh;
						tempJson.flow = flow;
						arrayJson.push(tempJson);
						masterJson.demo = arrayJson;
						//console.log(masterJson);
						tableCreate(masterJson);
						tempJson={};
						tempJson.stdPulsesCount=ansCount;
						resultMasterJson.std=tempJson;
						//console.log(resultMasterJson);
					}
				});
//	   }
	   
//		$("#typetacho").change(function(){
//		typetacho1=$("#typetacho").children(":selected").attr("value");
//		
//		
//		   if(typetacho1==0){
//			  
//				   $("#error").html("<b style='font-size:14px;color:red'>Select Tachometer Type</b>");
//				   $("#speed,#noh").prop("disabled",true);
//				   
//		   }
//		   else if(typetacho1==1)
//			   {
//			   $("#speed,#noh").prop("disabled",false);
//			   $("#error").prop("hidden",true);
//			   $("#typetacho").prop("disabled",true);
//			  
//			   str=''
//				   +'<option value="0">--- Select disc type --- </option>'
//				   +'<option value="2" >2  </option>'
//				   +'<option value="4" >4  </option>'
//				   +'<option value="16" >16  </option>'
//				   $("#noh").html(str);
//			   }
//		   else if(typetacho1==2)
//			 {
//			   $("#speed,#noh").prop("disabled",false);
//			 $("#error").prop("hidden",true);
//			 $("#typetacho").prop("disabled",true);
//			 
//		   str=''
//			   +'<option value="0">--- Select rotor toothed type --- </option>'
//			   +'<option value="8" >8  </option>'
//			   +'<option value="13" >13  </option>'
//			   +'<option value="17" >17  </option>'
//			   $("#noh").html(str);
//		   }
//		 
//		  
//	});

	  
}	
		
		
	   
