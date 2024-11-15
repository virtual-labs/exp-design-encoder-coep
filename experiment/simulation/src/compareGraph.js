
function compareGraph()		
{
	$("#tableDesign").prop("hidden", false);
	$("#stdTable").prop("hidden", false);
	$("#actualTable").prop("hidden", false);
			$("#procedure,#simDemo").prop("hidden",true);
		$("#result").prop("hidden",false);
//		alert("GRAPH");
		$("#centerText1").html("READINGS");
		$("#centerText2").html("GRAPH");
		table1();
		
		table2();
		graph1();
		
		
		
}
function table1()
{

	var tableMainDiv = '<div class="well well-lg">'
		+'<center class="tableheadingStyle">TABLE-1 (Standard readings)</center>'
        + '<table class="table table-bordered" >'
		+ ' <thead>'
		+ '  <tr>'
//		+ '   <th scope="col"><center>Number of Holes</center></th>'
		+ '  <th scope="col"><center>Speed (RPM)</center></th>'
		+ '  <th scope="col"><center>Pulses</center></th>'

		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0; i < masterJson.demo.length; i++) {
		tableMainDiv += '<tr>'
//			+ '   <td><center>' + masterJson.demo[i].noOfHole + '</center></td>'
			+ '   <td><center style="color:red">' + masterJson.demo[i].speed + '</center></td>'
		    + '   <td><center style="color:red">' + masterJson.demo[i].flow + '</center></td>'
			+ '     </tr>'
	}
	tableMainDiv += ' </tbody>'
			 + '  </table>'
//			 + ' </div>'
			$("#main-div-conf").html(tableMainDiv); 

}
function table2()
{

	var tableMainDiv = '<div class="well well-lg">'
		+'<center class="tableheadingStyle">TABLE-2 (Actual readings)</center>'
        + '<table class="table table-bordered" >'
		+ ' <thead>'
		+ '  <tr>'
//		+ '   <th scope="col"><center>Number of Holes</center></th>'
		+ '  <th scope="col"><center>Speed (RPM)</center></th>'
		+ '  <th scope="col"><center>Pulses</center></th>'

		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0; i < masterJson1.demo.length; i++) {
		tableMainDiv += '<tr>'
//			+ '   <td><center>' + masterJson1.demo[i].noOfHole + '</center></td>'
			+ '   <td><center style="color:red">' + masterJson1.demo[i].speed + '</center></td>'
		    + '   <td><center style="color:red">' + masterJson1.demo[i].pulseError + '</center></td>'
			+ '     </tr>'
	}
	tableMainDiv += ' </tbody>'
			 + '  </table>'
//			 + ' </div>'
			 $("#main-div-conf").append(tableMainDiv); 

}
function graph1()
{
		$("#canvas-div").css("margin-top","20px");
	  var xdata = [];
	    var ydata = []; // in kg/m³
var graphData=[];

var xdata1 = [];
var ydata1 = []; // in kg/m³
var graphData1=[];
for (var i = 0; i < masterJson.demo.length; i++) 
{
	
	xdata[i]=parseInt(masterJson.demo[i].speed);
	ydata[i]=parseInt(masterJson.demo[i].flow);
//	frequencyData[i]=temp.toFixed(3);
	
}
for (var j = 0; j < masterJson.demo.length; j++) {
	tempArr = [];
	tempArr[0] = xdata[j];
	tempArr[1] = ydata[j];

	graphData.push(tempArr);

}


for (var i = 0; i < masterJson1.demo.length; i++) 
{
	
	xdata1[i]=parseInt(masterJson1.demo[i].speed);
	ydata1[i]=parseInt(masterJson1.demo[i].pulseError);
//	frequencyData[i]=temp.toFixed(3);
	
}
for (var j = 0; j < masterJson1.demo.length; j++) {
	tempArr = [];
	tempArr[0] = xdata1[j];
	tempArr[1] = ydata1[j];

	graphData1.push(tempArr);

}


Highcharts.chart('canvas-div', {
	exporting: { enabled: true },
	credits: { enabled: false},
    chart: {
        type: 'scatter'
    },
    title: {
        text: 'Speed v/s Pulses'
    },
    xAxis: {
        title: {
            text: 'Speed'
        },
        // No need to specify categories if using x and y objects
    },
    yAxis: {
        title: {
            text: 'Pulses'
        }
    },
    tooltip: {
      formatter: function () {
          return `<b>${this.series.name}</b><br/>Speed: ${Highcharts.numberFormat(this.x, 2)}<br/>Pulses: ${Highcharts.numberFormat(this.y)}`;
      }
  },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true,
            marker: {
                enabled: true,
                radius: 4
            }
        }
    },
   
    series: [{
        name: 'Standard  ',
        data: graphData,  // First series data
        color: 'green',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        }
    }, {
        name: 'Observed ',
        data: graphData1,  // Second series data
        color: 'red',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        }
    }]
});
htm='<div class="row " >'
	+'<div  class="col-sm-12" >   '   
	+'<button class="btn btn-danger btnStyle" id="result" ><b> Result</b></button>'
	+'</div>'
	+'</div>'
	$("#canvas-div").append(htm);
	$("#result").click(function(){
	result();
});
}
//function graph2()
//{
//	 // Data for liquids, density, and frequency
//	
//    var xdata = [];
//    var ydata = []; // in kg/m³
//    var graphData=[];
//    
//    for (var i = 0; i < masterJson1.demo.length; i++) 
//    {
//    	
//    	xdata[i]=parseInt(masterJson1.demo[i].speed);
//    	ydata[i]=parseInt(masterJson1.demo[i].pulses);
////    	frequencyData[i]=temp.toFixed(3);
//    	
//    }
//    for (var j = 0; j < masterJson1.demo.length; j++) {
//		tempArr = [];
//		tempArr[0] = xdata[j];
//		tempArr[1] = ydata[j];
//
//		graphData.push(tempArr);
//
//	}
//    Highcharts.chart('actualTable', {
//        credits: { enabled: false },
//        chart: {
//            type: 'spline', // Using spline for smooth curves
//            animation: Highcharts.svg, // Animation for smoother transitions
//            marginRight: 10,
////            events: {
////                load: function () {
////                    const series = this.series[0]; // Get the series for pulses
////
////                    // Update the graph every second
////                    setInterval(function () {
////                        const speed = Math.floor(Math.random() * 200); // Random speed (0-200 degrees/sec)
////                        const pulses = Math.floor(Math.random() * 20); // Random pulses (0-20)
////
////                        // Add the new data point
////                        series.addPoint([speed, pulses], true, true);
////                    }, 1000); // Every second
////                }
////            }
//        },
//        title: {
//            text: 'Speed vs Pulses'
//        },
//        xAxis: {
//            title: {
//                text: 'Speed '
//            },
//            tickInterval: 50,
//            min: 0 // Minimum speed on the X-axis
//        },
//        yAxis: {
//            title: {
//                text: 'Pulses'
//            },
//            min: 0 // Minimum pulses on the Y-axis
//        },
//        tooltip: {
//            formatter: function () {
//                return `<b>${this.series.name}</b><br/>Speed: ${Highcharts.numberFormat(this.x, 2)}<br/>Pulses: ${Highcharts.numberFormat(this.y, 2)}`;
//            }
//        },
//        legend: {
//            enabled: true
//        },
//        exporting: {
//            enabled: false
//        },
//        series: [{
//            name: 'Pulses',
//            data: graphData
//        }]
//    });
//    
//  
//	
//}