
function tableCreate(masterJson)		
{

			console.log(masterJson);

			var tableMainDiv = '<div class="well well-lg">'
		        + '<table class="table table-bordered" >'
				+ ' <thead>'
				+ '  <tr>'
				+ '  <th scope="col"><center>Speed (RPM)</center></th>'
				+ '   <th scope="col"><center>Number of Holes</center></th>'
				+ '  <th scope="col"><center>Pulse</center></th>'

				+ '   </tr>'
				+ '  </thead>'
				+ '   <tbody>'
			for (var i = 0; i < masterJson.demo.length; i++) {
				tableMainDiv += '<tr>'
					+ '   <td><center>' + masterJson.demo[i].value1 + '</center></td>'
					+ '   <td><center>' + masterJson.demo[i].noh + '</center></td>'
					+ '   <td><center>' + masterJson.demo[i].flow + '</center></td>'
					+ '     </tr>'
			}
			tableMainDiv += ' </tbody>'
				 + '  </table>'
				 + ' </div>'
				 
				 
			$("#tableDesign").html(tableMainDiv);
			if(masterJson.demo.length==5)
				{
				$("#modelMsg").html('<img src="images/cong.gif" class="img-fluid" >');
				
				$("#checkConfg").prop("disabled",true);
				}
}