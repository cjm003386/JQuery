//회원가입 버튼 클릭했을 경우
$(document).ready(function(){
	var is_idcheck_click=false;	//id 중복검사 했는지 여부
	var idcheck_value='';		//id 중복검사시 값
	
	//회원가입 버튼 클리할때 이벤트 처리 부분
	$("form").submit(function(){
		

	// $.trim(문자열)는 문자열의 앞, 뒤 공백을 제거합니다.
		if($.trim($("#id").val()) == ""){
			alert("ID를 입력 하세요");
			$("#id").focus();
			return false;
		}
		
		var submit_id_value=$.trim($("#id").val())
		if(!is_idcheck_click || submit_id_value !=idcheck_value){
			alert("ID 중복검사를 하세요");
			return false;
		}
		
		
		
		
	//비밀번호 공백 유효성 검사
	if($.trim($("#pass").val()) == ""){
			alert("비밀번호를 입력 하세요");
			$("#pass").focus();
			return false;
		}
		
	//주민번호 앞자리 공백 유효성 검사
	if($.trim($("#jumin1").val())== ""){
			alert("주민번호 앞자리를 입력하세요");
			$("#jumin1").focus();
			return false;
		}
	
	if($.trim($("#jumin1").val()).length !=6){
			alert("주민번호 앞자리 6자리를 입력하세요");
			$("#jumin1").val("").focus();
			return false;
		}
	
	//주민번호 뒷자리 공백 유효성 검사	
	if($.trim($("#jumin2").val()) == ""){
			alert("주민번호 뒷자리를 입력하세요");
			$("#jumin2").focus();
			return false;
		}
		
	//주민번호 뒷자리 7자리 유효성 검사
	if($.trim($("#jumin2").val()).length !=7){
			alert("주민번호 뒷자리를 7자리를 입력하세요");
			$("#jumin2").val("").focus();
			return false;
		}
		
	//이메일 공백 유효성 검사	
	if($.trim($("#email").val()) ==""){
			alert("E-mail주소를 입력하세요");
			$("#email").focus();
			return false;
		}
		
	//도메인 공백 유효성 검사
	if($.trim($("#domain").val()) ==""){
			alert("도메인 주소를 입력 하세요");
			$("#domain").focus();
			return false;
		}
		
	/*
		var cnt = $('input:radio:checked').length;
		if(cnt==0){
			alert("성별을 입력하세요");
			return false;
		}
		*/	
	

	
	
	//취미를 2개 이상 체크하도록 하는 유효성 검사
	var cnt=$('input:checkbox:checked').length;
	
	if (cnt < 2){
		alert("2개이상 취미를 선택하세요")
		return false;
	}
	
	//우편번호 공백 유효성 검사
	if($.trim($("#post1").val()) == ""){
		alert("우편번호를 입력 하세요");
		$("#post1").focus();
		return false;
	}
	
		if (!$.isNumeric($('#post1').val())) {
			alert("우편번호는 숫자만 입력 가능합니다.");
			$('#post1').val("").focus();
			return false;
		}
		
		if($.trim($("#post1").val()).length !=5){
			alert("우편번호는 다섯자리입니다.");
			$("#post1").focus();
			return false;
		}


	
	if($.trim($("#address").val()) == ""){
		alert("주소를 입력 하세요");
		$("#address").focus();
		return false;
	}
	
	if($.trim($("#intro").val()) == ""){
		alert("자기소개를 입력 하세요");
		$("#intro").focus();
		return false;
	}
	
}); //submit() end

	// ID중복검사 부분
	$("#idcheck").click(function(){
	// $.trim(문자열)는 문자열의 앞, 뒤 공백을 제거합니다.
	var	input_id=$.trim($("#id").val());
	if(input_id==""){
		alert("ID를 입력 하세요");
		$("#id").focus();
		return false;
	}else {
		//첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개이상
		pattern = /^[A-Z][a-zA-Z0-9_]{3,}$/;
		if(pattern.test(input_id)){
			idcheck_value=input_id
			is_idcheck_click=true;
			var ref = "idcheck.html?id="+input_id;
			window.open(ref, "idcheck", "width=350,height=200");
		}else {
			alert("첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다.");
			$("#id").val('').focus();
		}
		
	}
}); //$("#idcheck").click

	//우편 검색 버튼 클릭
	$("#postcode").click(function(){
		window.open("post.html","post",
					"width=400,height=500,scrollbars=yes");
		
	}); // $("#postcode").click
	
	//도메인 선택 부분
	$("#sel").change(function(){
		if($("#sel").val() == ""){
		   $("#domain").val("").focus();
		   $("#domain").prop("readOnly",false);
		}else{//도메인 선택한 경우
			$("#domain").val($("#sel").val());
			$("#domain").prop("readOnly",true);
		}
	});
	
	$("#jumin1").keyup(function(){
		if($.trim($("#jumin1").val()).length == 6){
			pattern=/^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|[3][01])$/;
			if(pattern.test($("#jumin1").val())){
				$("#jumin2").focus(); //주민번호 뒷자리로 포커스 이동
			}else{ alert("숫자 또는 형식에 맞게 입력하세요[yymmdd]");
					$("#jumin1").val('').focus();
			}	
			
		}
	});
	
	$("#jumin2").keyup(function(){
		if($.trim($("#jumin2").val()).length == 7){
			pattern = /^[1234][0-9]{6}$/;
			if(pattern.test($("#jumin2").val())){
				var c = $("#jumin2").val().substring(0,1);
				var index = (c-1)%2; //c=1,3이면 index=0
									 //c=2,4이면 index=1
				$("input[type=radio]").eq(index)
									  .prop("checked",true);
			}else{
				alert("형식에 맞게 입력하세요[1234][0-9]{6}");
				$("#jumin2").val('').focus();
			}
		}
		
	});
	
	


});


	





