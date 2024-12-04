
function tableCreate(masterJson)		
{

			//console.log(masterJson);

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
			for (var i = 0; i < masterJson.demo.length; i++) {
				tableMainDiv += '<tr>'
					+ '   <td><center>' + masterJson.demo[i].noh + '</center></td>'
					+ '   <td><center style="color:red">' + masterJson.demo[i].speed + '</center></td>'
				    + '   <td><center style="color:red">' + masterJson.demo[i].flow + '</center></td>'
					+ '     </tr>'
			}
			tableMainDiv += ' </tbody>'
				 + '  </table>'
				 + ' </div>'
				 +'<div class="row" id="nextLevelDiv" hidden>'
				 +'<div class="col-sm-12">'
				 +'<button type="submit" class="btn btn-danger" id="nextLevel" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >GO TO NEXT LEVEL</button>'
				  +'</div>'
				 +'</div>'
				 
			$("#tableDesign").html(tableMainDiv);
			if(masterJson.demo.length==5)
				{
				$("#modelMsg").html('<b>GO TO NEXT LEVEL</b>');
				
				$("#checkConfg,#speed").prop("disabled",true);
				$("#nextLevelDiv").prop("hidden",false);
				}
			   $("#nextLevel").click(function(){
				   $("#main-div-conf,#canvas-div,#tableDesign").html("");
				   $("#centerText1").html("READINGS");
				   $("#centerText2").html("MIMIC");
				   if(noh==2){
					    $('#disc').attr('src', 'images/disc2r.png');
				   }
				   else if(noh==4){
					    $('#disc').attr('src', 'images/disc4r.png');
				   }
				   else if(noh==8){
					    $('#disc').attr('src', 'images/disc8r.png');
				   }
				   else if(noh==16){
					    $('#disc').attr('src', 'images/disc16r.png');
				   }
				   application(masterJson);
			   });
			
}