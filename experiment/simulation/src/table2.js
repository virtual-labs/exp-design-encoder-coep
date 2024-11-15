
function tableCreate1(masterJson1)		
{

		//	console.log(masterJson1);

			var tableMainDiv = '<div class="well well-lg">'
		        + '<table class="table table-bordered" >'
				+ ' <thead>'
				+ '  <tr>'
				+ '   <th scope="col"><center>Number of Holes</center></th>'
				+ '  <th scope="col"><center>Speed (RPM)</center></th>'
				+ '  <th scope="col"><center>Pulses</center></th>'

				+ '   </tr>'
				+ '  </thead>'
				+ '   <tbody>'
			for (var i = 0; i < masterJson1.demo.length; i++) {
				tableMainDiv += '<tr>'
					+ '   <td><center>' + masterJson1.demo[i].noOfHole + '</center></td>'
					+ '   <td><center style="color:red">' + masterJson1.demo[i].speed + '</center></td>'
				    + '   <td><center style="color:red">' + masterJson1.demo[i].pulseError + '</center></td>'
					+ '     </tr>'
			}
			tableMainDiv += ' </tbody>'
				 + '  </table>'
				 + ' </div>'
				 +'<div class="row" id="nextLevelDiv1" hidden>'
				 +'<div class="col-sm-12">'
				 +'<button type="submit" class="btn btn-danger" id="nextLevel2" style="width:100%;margin-top: -6px; margin-bottom:20px;" data-toggle="modal" data-target="#myModal" >GO TO NEXT LEVEL</button>'
				  +'</div>'
				 +'</div>'
				 
			$("#table2").html(tableMainDiv);
			if(masterJson1.demo.length==5)
				{
					$("#nextLevelDiv1").prop("hidden",false);
//					$("#rpm,#reading,#start,#stop").prop("disabled",true);
				$("#modelMsg1").html('<b>GO TO NEXT LEVEL</b>');
//				$("#modelMsg1").html("<b>Change the Speed and take  next reading . </b> ");
				}
			   $("#nextLevel2").click(function(){
				   $("#discDiv,#nextLevel2,#graph,#table2").prop("hidden",true);
				   $("#graph,#main-div-conf,#graph,#tableDesign,#canvas-div,#action,#nextLevel2").html('');
				   $("#result").prop("hidden",false);
				   compareGraph();
			   });
			
}