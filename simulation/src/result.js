function result(){
	$("#procedure,#result").prop("hidden",true);
	$("#main-divResult,#saveAsJpg").prop("hidden",false);
	htm=''
		+'<div class="row" >'
		+'<div class="col-sm-2">'
		+'</div>'
		+'<div class="col-sm-8 nameTitle" style="background-color:#304250">'
		+'<span>'
		+'<h3><center style="font-weight: bold;">TACHOMETER </center></h3>'

		+'</span>'
		+'</div>'
		+'<div class="col-sm-2">'
		+'</div>'
		+'</div>'
		
		+'<div class="row">'
		+'<div class="col-sm-3">'
		+'</div>'
		+'<div class="col-sm-6 " style="">'
		+'<span>'
		+'<h6><center style="font-weight: bold;border-style: dashed;" class="blink">Experiment completed successfully</center></h6>'
//		+'<br><h6><center style="font-weight: bold;">Experiment completed .</center></h6>'
		+'</span>'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-2">'
		+'   <p><b> Date: <span id="currentDate"></span></b></p>'
		+'     <p><b> Time: <span id="currentTime"></span></b></p>'
	   
		+'</div>'
		+'</div>'
		
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-10">'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-4">'
		+'		 <table class="table table-bordered" style=" vertical-align: middle;">'
		+'    <thead class="thead" style="background-color: #445f66;color: #fff;">'
		+'      <tr>'
		+'        <th>COMPETENCY ( TACHOMETER )</th>'
		+'        <th>STATUS</th>'


		+'      </tr>'
		+'    </thead>'
		+'    <tbody>'
		+'      <tr>'
		+'        <td ><span class="stageLabel">Basic Knowledge</span></td>'
		+'        <td id="basicKnowledge">'
		
		+'       </td>'
		+'      </tr>'
		+'      <tr>'
		+'        <td><span class="stageLabel">Configuration</span></td>'
		+'        <td id="config">'
		
		+'       </td>'
		+'      </tr>'
		+'      <tr>'
		+'        <td><span class="stageLabel">Application</span></td>'
		+'        <td id="application">'
		
		+'       </td>'
		+'      </tr>'
		+'      <tr>'
		+'        <td><span class="stageLabel">Mimic </span></td>'
		+'        <td >'
		+'         <div class="alert alert-success attainedText">'
	    +'         <center><strong>Attained</strong> </center>'
	     +'       </div>'
		+'       </td>'
		+'      </tr>'
		+'      <tr>'
		+'        <td><span class="stageLabel">Observation</span></td>'
		+'        <td>'
		+'         <div class="alert alert-success attainedText">'
	    +'         <center><strong>Attained</strong> </center>'
	     +'       </div>'
		+'       </td>'
		+'      </tr>'
		+'    </tbody>'
		+'  </table>'
		+'</div>'
		+'<div class="col-sm-4" id="graphDiv" style="overflow: hidden;border-style: groove">'
		
		+'</div>'
        +'<div class="col-sm-4">'
        +' <div class="panel panel-default">'
        +' <div class="panel-heading"><center><b style="color:#fff;">BASIC KNOWLEDGE</b></center></div>'
        +' <div class="panel-body">'
        +'<div class="row">'
        +'<div class="col-sm-4">'
//        +'<center><img src="images/vertical_line1.png"></img></center>'
        +' <div class="panel panel-default">'
        +' <div class="panel-heading"><center class="subTitle">Total Question</center></div>'
        +'<div class="panel-body">'
        +' <div class="alert alert-warning " >'
        +' <center><strong>6</strong> </center>'
        +'</div>'
        +'</div>'
        +' </div>'
        +'</div>'
        +'<div class="col-sm-4">'
//        +'<center><img src="images/vertical_line1.png"></img></center>'
        +' <div class="panel panel-default">'
        +'  <div class="panel-heading"><center class="subTitle">Correct Answer</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>'+resultMasterJson.question.correctQuestion+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
        +'</div>'
        +'<div class="col-sm-4">'
//        +'<center><img src="images/vertical_line1.png"></img></center>'
        +' <div class="panel panel-default">'
        +' <div class="panel-heading "><center class="subTitle">Wrong Answer</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-danger">'
        +' <center><strong>'+parseInt(6-resultMasterJson.question.correctQuestion)+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +' </div>'
        +' </div>'
		+'</div>'
		+'</div>'
		+'<br>'
		+'<div class="row">'
		+'<div class="col-sm-6" style="border-style: dashed;border-color: lightgray;">'
		+'<h4><center class="appTitle"  ><b style="color:#fff;"> </b> <b style=" font-weight: 500; color: #e0ce97;">CONFIGURATION</b></center></h4>'
		+'<div class="row">'
		
		+'<div class="col-sm-12">'
		+'<h6><center class="appTitle" style="background-color:#4b4242;font-weight: bold;">Pulses calculation <b style=" font-weight: bold; color: #e0ce97;"></b></center></h6>'
		+'</div>'
		
		+'</div>'
		+'<div class="row">'
		
		+'<div class="col-sm-12">'
		
		+'<div class="panel panel-default">'
		+' <div class="panel-body">'
		
		+'<div class="row">'
		
		+'<div class="col-sm-6">'
		
		+'<div class="panel panel-default" style="margin-top:0px;">'
		+'<div class="panel-heading"><center class="subTitle">Expected Attempt</center></div>'
		+' <div class="panel-body">'
		   +' <div class="alert alert-success">'
	        +' <center><strong>5</strong> </center>'
	        +'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		
		+'<div class="panel panel-default" style="margin-top:0px;">'
		+' <div class="panel-heading"><center class="subTitle">Total Attempt</center></div>'
		+' <div class="panel-body">'
		   +' <div class="alert alert-warning">'
	        +' <center><strong>'+resultMasterJson.std.stdPulsesCount+'</strong> </center>'
	        +'</div>'
		+'</div>'
		+' </div>'
			
		
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+' </div>'
		+'</div>'
		
		
		+'</div>'
		+'</div>'
		
		
		//Thickness Panel
		
		+'<div class="col-sm-6" style="border-style: dashed;border-color: lightgray;">'
		+'<h4><center class="appTitle" style="font-weight: bolder;" > <b style=" font-weight: 500; color: #e0ce97;">APPLICATION</b></center></h4>'
		+'<div class="row">'
		+'<div class="col-sm-12">'
		+'<h6><center class="appTitle" style="background-color:#4b4242;font-weight: bolder;">Accuracy (%) calculation <b style=" font-weight: bold; color: #e0ce97;"></b></center></h6>'
		+'</div>'
		
		
		+'</div>'
		
		//First Row Thickness
		+'<div class="row">'
		
		
		+'<div class="col-sm-12">'
		+'<div class="panel panel-default">'
		
		+' <div class="panel-body">'
		+'<div class="row">'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Expected Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>5</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.actual.actualPulsesCount+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		
		+'</div>'
		+'<br>'
		
		$("#main-div1,#main-div").html("");
	
	
		$("#main-divResult").html(htm);
		
		$('#saveAsJpg').on('click', function() {
			$('#saveAsJpg').prop("hidden",true);
		    html2canvas(document.querySelector("#main-divResult")).then(canvas => {
		        // Append the screenshot canvas to the body
		        document.body.appendChild(canvas);
		        $("canvas").css("display","none");
		        // Optionally save the screenshot as an image
		        var link = document.createElement('a');
		        link.download = 'Tachometer_report.png';
		        link.href = canvas.toDataURL();
		        link.click();
		    });
		});
		
		
//		console.log(resultMasterJson.question.correctQuestion);
		CorrectAnswer=parseInt(resultMasterJson.question.correctQuestion);
		var tempBasicKnowledge=parseInt((CorrectAnswer/6)*100);
	//	console.log("temp "+tempBasicKnowledge);
		
		
		if(tempBasicKnowledge>=60){
			 var str=''
				 +' <div class="alert alert-success attainedText">'
			    +'  <center><strong>Attained</strong> </center>'
			     +'  </div>'
			     $("#basicKnowledge").html(str);
			     
		}
		else
			{
			 var str=''
				 +' <div class="alert alert-danger attainedText">'
			    +'  <center><strong>Not Attained</strong> </center>'
			     +'  </div>'
			     $("#basicKnowledge").html(str);
			}
		var congCounterTotal=parseInt(resultMasterJson.std.stdPulsesCount);
		var tempCalPer=parseInt((5/congCounterTotal)*100);
	//	console.log("tempCalPer "+tempCalPer);
		if(tempCalPer>=60){
			 var str=''
				 +' <div class="alert alert-success attainedText">'
			    +'  <center><strong>Attained</strong> </center>'
			     +'  </div>'
			     $("#config").html(str);
			     
		}
		else
			{
			 var str=''
				 +' <div class="alert alert-danger attainedText">'
			    +'  <center><strong>Not Attained</strong> </center>'
			     +'  </div>'
			     $("#config").html(str);
			}
		var appCounterTotal1=parseInt(resultMasterJson.actual.actualPulsesCount);
		var tempCalPer1=parseInt((5/appCounterTotal1)*100);
	//	console.log("tempCalPer1 "+tempCalPer1);
		if(tempCalPer1>=60){
			 var str=''
				 +' <div class="alert alert-success attainedText">'
			    +'  <center><strong>Attained</strong> </center>'
			     +'  </div>'
			     $("#application").html(str);
			     
		}
		else
			{
			 var str=''
				 +' <div class="alert alert-danger attainedText">'
			    +'  <center><strong>Not Attained</strong> </center>'
			     +'  </div>'
			     $("#application").html(str);
			}

	// Build the chart
	Highcharts.chart('graphDiv', {
		credits: { enabled: false},
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie'
	    },
	    title: {
	        text: ' ',
	        align: 'left'
	    },
	    tooltip: {
	        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            dataLabels: {
	                enabled: true,
	                format: '<span style="font-size: 1.2em"><b>{point.name}</b>' +
	                    '</span><br>' +
	                    '<span style="opacity: 0.6">{point.percentage:.1f} ' +
	                    '%</span>',
	                connectorColor: 'rgba(128,128,128,0.5)'
	            }
	        }
	    },
	    series: [{
	        name: '',
	        data: [
	            { name: 'Basic Knowledge', y: tempBasicKnowledge },
	            { name: 'Configuration', y: tempCalPer },
	            { name: 'Application', y: tempCalPer1 },
	            { name: 'Mimic', y: 100 },
	          
	            { name: 'Observation', y: 100 }
	        ]
	    }]
	});
	
     $(document).ready(function() {
    	 var currentDateTime = new Date();

         // Manually format the date as DD MM YYYY
         var day = String(currentDateTime.getDate()).padStart(2, '0');
         var month = String(currentDateTime.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
         var year = currentDateTime.getFullYear();

         var formattedDate = day + '/' + month + '/' + year;

         var time = currentDateTime.toLocaleTimeString();  // Get the current time

         // Display the formatted date and time in the respective elements
         $("#currentDate").text(formattedDate);
         $("#currentTime").text(time);
//         console.log("date "+date);
//         console.log("time "+time);
     });
 
}