var ansCountA=1;
masterJson1={};
var arrJson1=[];
function application(){
	
	$("#tableDesign").prop("hidden", true);
	$("#stdTable").prop("hidden", true);
	$("#actualTable").prop("hidden", true);
	
	var htm=''
		+'<div class="row">'
		 +'<div class="col-sm-1">'
		 +'</div>'
		+'<div class="col-sm-10" style="background-color: #e9ecef;border-style: dashed;">'
		+'<span><center><b style="font-size:20px;color:red;">No of holes '+noh+' on the disc</b></center>'
		+'</div>'
		+'<div class="col-sm-1">'
		 +'</div>'
		+'</div>'
		+'<br>'
//		+'<div class="row">'
//		 +'<div class="col-sm-1">'
//		 +'</div>'
//		+'<div class="col-sm-10" >'
//		 +'<select  class="form-control selectConf"  id="speed" style="height:auto;" >'
//		  for(i=0;i<masterJson.demo.length;i++)
//			  {
//			      +'<option value='+masterJson.demo[i].speed+' >7000  </option>'
//			  }
//	htm+='</select>'
//		+'</div>'
//		+'<div class="col-sm-1">'
//		 +'</div>'
//		+'</div>'
//		+'<br>'
		 + '<div class="row"  id="CalculateActualFlow1" hidden>'
		   +'<div class=" col-sm-4">'
	       +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculate accuracy (%)  : </label>'
	       +'</div>'
         +'<div class="col-sm-4">'
	       +'<input type="text" id="flowAns1"  style=margin:15px 10px;width:100%;"  class=" form-control" />'
	       +'</div>'
	       +'<div class="col-sm-4">'
	       +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck1" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal2" >Submit</button>'
	       +'</div>'
	       +'</div>'
	      
	       + ' <!-- Modal -->'
			+ '<div class="modal fade" id="myModal2" role="dialog">'
			+ ' <div class="modal-dialog modal-md">'
			+ '    <div class="modal-content">'
			+ '     <div class="modal-header">'
			
			+ '       <h4 class="modal-title">Message box</h4>'
			+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
			+ '     </div>'
			+ '     <div class="modal-body" id="modelMsg1">'
//			+ '       <p >This is a small modal.</p>'
			+ '     </div>'
			+ '     <div class="modal-footer">'
			+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
			+ '     </div>'
			+ '   </div>'
			+ ' </div>'
			+ '</div>'
		+'</div>'
		$("#main-div-conf").html(htm);
		+'<div class="row">'
		+'<div class="col-sm-6">'
		 +'</div>'
		 +'<div class="col-sm-6">'
		 +'<span id="msgError"></span>'
		 +'</div>'
		 +'</div>'
		 
	mimic();		
 	
 	
 	$("#reading").click(function(){
 		
 		if(rotationSpeed==0){
			$("#modelMsg").html("Speed is Zero");
//			alert("speed zero");
		}
 		else{
 			
 			$("#CalculateActualFlow1").prop("hidden",false);
 			$("#plus,#minus").prop("disabled",true);
 			$("#reading").prop("disabled",true);	
 			$("#modelMsg").html("Take another reading.");
 			
 		}
	
 	});	
 	var randomNumber=0;
 	var randomNumber1=0;
 	var addMinusValue=0;
 	 var withError=0;
 	 var withError1=0;
 	 var setPulse=0;
 	 var flow = 0;
 	 var speed12 = 0;
 	function ErrorAssign()
 	{
 		pulse1=pulse;
 		
 		  var min = 1,
 	        max = 5,
 	       randomNumber = Math.random() * (max - min) + min;

 		randomNumber1=randomNumber;
 		//console.log(randomNumber1);
 		
 		addMinusValue = Math.floor(Math.random() * 2) + 1;
 	
 		//console.log(addMinusValue);
 		 var perValue=(pulse1*(randomNumber1/100)).toFixed(2);
 		perValue=parseFloat(perValue);
 		
		   	if(addMinusValue==1){
		   	//	console.log("add Error"+perValue);
		   		withError1=pulse1+perValue;
		   	}
		   	else
		   		{
		   		//console.log("minus Error"+perValue);
		   		withError1=pulse1-perValue;
		   		}
		   	withError=Math.round(withError1);
		   	tempstd=parseFloat(((pulse1-withError1)/pulse1)*100);
		   	
		   	tempstd=tempstd.toFixed(2);
//		   	withError=Math.round(temp);
//			console.log("pulse1 "+pulse1);
		   	//console.log("With Error"+withError);
		   	flow=Math.round(tempstd);
//		   	var answer1=((withError/pulse1)*100).toFixed(2);
//		   	answer1=parseFloat(answer1);
//		   	console.log("% "+answer1);
//		   	flow=(answer1/100).toFixed(2);
//		   	flow=parseFloat(flow);
			//console.log("flowAns "+flow);
			
 		
 	}
 	var id=0;
 	
	  $("#btnAnsCheck1").click(function() {
		  ansCountA++;
			$("body").css("padding","0px 0px 0px 0px");
			
		   var flowAns = $("#flowAns1").val();
		  

			if(flowAns=="" || isAlphabetical(flowAns)){
				
				 $("#modelMsg1").css("color", "red");
				$("#modelMsg1").html("Enter numeric value");
				
			}
			else
				{
				if (id <= 3) {
					if (flowAns == flow) {
						
						
						 $("#modelMsg1").css("color", "#a94442");
						$("#modelMsg1").html("Change the speed and take next reading.");
						$("#CalculateActualFlow1").prop("hidden",true);
						$("#plus,#minus").prop("disabled",false);
						 id=0;
						 addMasterJson1();
				 			tableCreate1(masterJson1);
						//tableCreate();
				 			$("#flowAns1").val(" ");
						
					} else if (flowAns != flow) {
						
						 $("#modelMsg1").css("color", "red");
					$("#modelMsg1").html("<b>Entered value is incorrect. Try again.</b> ");
					
					}


				} else if (id == 4) {
					 $("#modelMsg1").css("color", "#a94442");
					$("#modelMsg1").html("<img src='images/Accuracy1.png' class='img-responsive'> ");
					
				} else {
					flowAns = $("#flowAns1").val();
//					flow = flowAns.toFixed(2);
					if (flowAns == flow) {
						
						
						$("#modelMsg1").css("color", "#a94442");
						$("#modelMsg1").html("<b>Change the speed and take next reading. </b> ");
						$("#CalculateActualFlow1").prop("hidden",true);
						$("#plus,#minus").prop("disabled",false);
						id=0;
						addMasterJson1();
			 			tableCreate1(masterJson1);
			 			$("#flowAns1").val(" ");
						
					} else {
						$("#modelMsg1").css("color", "#28a745");
						$("#modelMsg1").html("<b>Correct answer is " + flow+"</b>");
						

					}
				}
				id++;
				}
				
			});
 	function addMasterJson1()
					{
							
						tempJson={};	
						tempJson.noOfHole=noh;
						tempJson.speed = parseInt($("#rpmValue").text());
						tempJson.pulses = pulse;
						tempJson.pulseError = withError;
						arrJson1.push(tempJson)
						masterJson1.demo = arrJson1;
						tempJson={};
						tempJson.actualPulsesCount=ansCountA;
						resultMasterJson.actual=tempJson;
					//	console.log(resultMasterJson);
						
						}
 	
$("#minus").click(function(){
		
		if(rotationSpeed==0);
		{
			$("#modelMsg").html("Start motor");
		}
 	});	
var flg =0;
	$("#start").click(function(){
		
//		graphPulse(masterJson1);
		
//		if(flg==0){
    		$("#rpmValue").text(0);
    		
//    		flg++;
	    	
//    	}
    	
			$("#light").prop("hidden",false);
			 $('#light').addClass('blinking');
			//console.log(masterJson1);
			$("#start").prop("disabled",true);	
			$("#plus,#minus,#stop").prop("disabled",false);	
			if(rotationSpeed!=0)
			{
				$("#modelMsg").html("Start motor");
			}
			else{
			
				$("#reading").prop("disabled",false);	
				$("#pulseContainer,pulseDisplay").prop("hidden",false);
				
			}
    	
		
 	});	
$("#stop").click(function(){
	rotationSpeed=0;
	pulse=0;
	$("#start").prop("disabled",false);
		$("#plus,#minus").prop("disabled",true);
		$("#pulseValue").text("0");
		if(rotationSpeed!=0)
		{
			$("#modelMsg").html("Start motor");
		}
		else{
			$("#start").prop("disabled",false);
			
		}
		
 	});	
	 let rotationSpeed = 0;  // Degrees per frame (controls speed)
	    let rotation = 0;       // Current rotation angle
	    let lastTime = 0;
	    let pulses = [];        // Stores pulse signal history
	    const maxPulses = 50;   // Limit pulse history display
	    const noiseChance = 0.1; // 10% chance of noise/error
	    let pulseCount = 0;
	    let pulse=0;
	function 	mimic(){
//		graphPulse(masterJson1);
//		 $('#disc').attr('src', 'images/disc16.png');
		$("#discDiv,#graph,#rpm,#reading,#start,#pulseValue,#stop").prop("hidden",false);
		$("#plus,#minus").prop("disabled",true);
		
	    // Get the offset position
	    var disc1 = $("#disc").offset();
	    var RPM = $("#rpmImg").offset();
	    var shaft = $("#shaft").offset();
	    //for disc
	    var disc1startX = disc1.left;
	    var disc1startY = disc1.top;

	    // Get the width and height
	    var disc1width = $("#disc").width();
	    var disc1height = $("#disc").height();

	    // Calculate the end position
	    var disc1endX = disc1startX + disc1width;
	    var disc1endY = disc1startY + disc1height;

	  //  console.log("#disc "+disc1);
	  //  console.log("#rpmimg "+RPM);
	  //  console.log("#shaft "+shaft);
	    
	    $('#rpmImg').css('margin-top', '87%');
	    $('#shaft').css('margin-top', '50%');
//	    $('#shaft').css('margin-left', '-19%');
		    let rpmDisplay = document.getElementById('rpmValue');
		    let disc = document.getElementById('disc');
		    let pulseContainer = document.getElementById('pulseContainer');
		   
		 
		    // Function to rotate the disc and update the display
		    function rotateDisc(timestamp) {
		        if (!lastTime) lastTime = timestamp;
		        const elapsed = timestamp - lastTime; // Calculate time between frames
		        lastTime = timestamp;

		        // Update the rotation based on time elapsed
		        rotation += (rotationSpeed * elapsed) / 1000;  // Time normalized to seconds
		        disc.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

		        // Generate a pulse every 45 degrees (simulating a pulse sensor trigger)
		        if (Math.floor(rotation) % 45 === 0) {
//		            generatePulse();
		        }

		        // Calculate RPM (rotationSpeed is degrees per second, so RPM is that divided by 360 times 60)
		        let rpm = (rotationSpeed * 60) / 360;
//		        rpmDisplay.textContent = Math.round(rpm);

		        requestAnimationFrame(rotateDisc);
		    }

//		    // Adjust speed based on user input
//		    document.addEventListener('keydown', function(event) {
//		        if (event.key === 'ArrowUp') {
//		            rotationSpeed += 30;  // Increase speed
//		        } else if (event.key === 'ArrowDown') {
//		            rotationSpeed = Math.max(0, rotationSpeed - 30);  // Decrease speed but not below 0
//		        }
//		    });
		   
		    
//		    $("#plus").click(function() {
//		    	  // Increase speed
//		    	$("#pulseDiv").prop("hidden",true);
////		    		console.log($("#rpmValue").val());
//		    	  speed12=parseInt($("#rpmValue").val());
//		    	 rotationSpeed += 30;
//		    	
//		    	 $("#reading").prop("disabled",false);	
//		    	
//		    	 
//		    });
		    $("#plus").click(function() {
		    	 rpmValue = $('#rpmValue').text();
		    	if(rpmValue<1000){
		    		
		    	
		    		 rpmValue = parseInt(parseInt(rpmValue) + parseInt(100));
					// console.log("rpmValue : "+rpmValue);
					 
				    	 rotationSpeed += rpmValue;  // Increase speed
				    	 pulse=rpmValue*noh;
				    	  ErrorAssign();
				    	 $("#pulseValue").html(withError);
				    	 $("#rpmValue").html(rpmValue);
				    	 $("#reading,#minus").prop("disabled",false);	
		    
		    	}
		    	else if(rpmValue==1000){
		    		
		    		$("#rpmValue").html(1000);
		    		rpmValue=1000;
					// console.log("rpmValue : "+rpmValue);
					 
				    	 rotationSpeed += rpmValue;  // Increase speed
				    	 pulse=rpmValue*noh;
				    	  ErrorAssign();
				    	 $("#pulseValue").html(withError);
				    	 $("#rpmValue").html(rpmValue);
				    	 $("#reading,#minus").prop("disabled",false);	
				    	 $("#plus").prop("disabled",true);
		    	}
		    	else{

					$("#modelMsg").html("Maximum speed is 1000");
		    	}
		    		
				
			    	 
			    });
			    $("#minus").click(function() {
			    	rpmValue = $('#rpmValue').text();
			    	if(rpmValue==0){
			    		rpmValue=0;
			    		rotationSpeed =0 ;
			    		$("#rpmValue").html(0);
			    		 $("#minus").prop("disabled",true);
			    		 $("#plus").prop("disabled",false);
			    	}
			    	else{
			    		
						 rpmValue = parseInt(parseInt(rpmValue) - parseInt(100));
						//console.log("rpmValue : "+rpmValue);
//					    	   rotationSpeed = Math.max(0, rotationSpeed - rpmValue);  // Decrease speed but not below 0
								rotationSpeed -= rpmValue;
								
					    	   pulse=rpmValue*noh;
					    	   ErrorAssign();
						    	 $("#pulseValue").html(withError);  
						    	 $("#rpmValue").html(rpmValue);
						    	 $("#reading,#plus").prop("disabled",false);	
			    	}
				 
			    });

			     // Start the animation			
			
//		    $("#minus").click(function() {
//		    	
//		    	  $("#pulseDiv").prop("hidden",true);
//		    	 speed12=parseInt($("#rpmValue").val());
//		    	   rotationSpeed = Math.max(0, rotationSpeed - 30);  // Decrease speed but not below 0
//		    	   console.log("speed12 "+speed12);
//		    	   
//			    	 $("#reading").prop("disabled",false);	
//		    });

		    requestAnimationFrame(rotateDisc);  // Start the animation			
		}
	
}