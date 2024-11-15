	resultMasterJson ={};
	
			var flag = false;
			var myRadio = null;
			dataQues = {};

			var questions = '';
			questions += ''
				+ '<div id = "questionDiv">'

			for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

				for (var j = 0; j < QuestionsJSON.data["SEC"][0].QUES.length; j++) {

					questions += '<div class="col-md-12">'
						+ '<br><span class="queno">Question No : ' + (i + 1) + '</span>'
						+ '<br><div class="queTitle">'

						+ QuestionsJSON.data["SEC"][i].QUES[j].QC
						+ '</div>'

					for (var k = 0; k < QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++) {

						questions += '<div>'
							+ '<div class="ansTitle col-md-6">'

							+ "<input class='radioType'  name='radio-" + i + "' id='" + i + "' ANSID='" + QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID + "' type='radio'"
							+ "' value='"
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ "' >"
							+ '<p style="margin: -20px 0 8px 29px;font-size: 18px;">'
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ '</p>'

							+ '</div>'
							+ '</div>'
					}
					questions += '</div>'
				}
			}

			questions += '<div class="buttonDiv">'
				+ '<button  class="btn btn-danger" id="testSubmit" data-toggle="modal" data-target="#myModal" >Submit Test</button>'
				
				
//				+ '<button id="mimicSubmit" class=" btn btn-danger nextLevelBtn" hidden>Next Level</button>'

				+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="myModal" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg">This is a small modal.</p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" data-dismiss="modal" id="btnNext" >NEXT</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				
				+ '</div>'
				+ ' </div>'

				
				
		

			$("#canvas-div").html(questions);


			var flg = false;
			$('#testSubmit').on('click', function() {		
				$("body").css("padding","0px 0px 0px 0px");
					var arr = [];
					
					for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

						var qid = $('input[name=radio-' + i + ']').attr(
							'id');

						var ansId = $('input[name=radio-' + i + ']:checked').attr(
							'ANSID');

						myRadio = $(
							'input[name=radio-' + i + ']:checked')
							.val();

						if (myRadio == null) {
							flag = flag && false;
							//alert('Please attempt all the questions');
							$("body").css("padding","0px");
							$("#modelMsg").html("<b class='boldTextRed'>Please attempt all the questions.</b>");
							break;
						}
						arr.push({
							"QID": qid,
							"ANS": myRadio,
							"ANSId": ansId
						});
					}

					var ansCount = 0;

					if (myRadio != null) {
						for (var i = 0; i < arr.length; i++) {
							if (arr[i].ANSId == "true") {
								ansCount++;
							}
						}
						
//					 
//						 $("#modelMsg").html("<b class='boldTextGreen'>Test Submitted Successfully ");

						$("#modelMsg").html("<b class='boldTextGreen'>Test submitted successfully .<br/> Correct answers are : " + ansCount + "</b>");
						flg = true;
						$("body").css("padding","0px 0px 0px 0px");
						$("#centerText1").html("CONFIGURATION");
//						selectDesign();
						tempJson={};
						tempJson.correctQuestion=ansCount;
						resultMasterJson.question=tempJson;
						//console.log(resultMasterJson);
		   					
					}

						
			});
			
			$("#btnNext").click(function(){
				if(flg == true){
					config1();
				}
			})
			
	
