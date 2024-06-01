$(document).ready(function(){

    $('form').submit(function(){

        if($.trim($('#id').val()) == ''){
            alert("ID를 입력 하세요");
            id.focus();
            return false;
        }

        if( $.trim($('#pass').val())== ''){
            alert("비밀번호를 입력 하세요");
           $('#pass').focus();
            return false;
        }

        if( $.trim($('#jumin1').val())== ''){
            alert("주민번호 앞자리를 입력 하세요");
           $('#jumin1').focus();
            return false;
        }

        if( $.trim($('#jumin1').val()).length != 6){
            alert("주민번호 앞자리 6자리를 입력 하세요");
           $('#jumin1').val("").focus();
            return false;
        }

if($.trim($('#jumin2').val())== ''){
            alert("주민번호 뒷자리를 입력 하세요");
           $('#jumin2').focus();
            return false;
        }

        if($.trim($('#jumin2').val()).length != 7){
            alert("주민번호 뒷자리 7자리를 입력 하세요");
            $('#jumin2').val("").focus();
             return false;
        }

        
        if($.trim($('#email').val())== ''){
            alert("E-Mail 주소를 입력 하세요");
           $('#email').focus();
            return false;
        }

        if($.trim($('#domain').val()) == ''){
            alert("도메인 주소를 입력 하세요");
            $('#domain').focus();
             return false;
         }
         /*
                var cnt = $('input:radio:checked).length;
                if(cnt == 0){
                    alert('성별을 선택하세요');
                    return false;
                }
         */

var cnt = $('input:checkbox:checked').length;
        if(cnt < 2){
            alert('취미를 2개 이상 선택하시오.');
            return false
        }

       
        if( $.trim($('#post1').val()) == ''){
            alert("우편번호를 입력 하세요");
            $('#post1').focus();
             return false;
        }

        
        if( !$.isNumeric($('#post1').val()) == ''){
            alert("우편번호는 숫자만 입력 가능합니다.");
            $('#post1').val("").focus();
             return false;
        }

       
        if($.trim($('#intro').val()) == ''){
           alert('자기소개를 작성하세요.')
           $('#intro').focus();
           return false;
        }

    }); // submit() end
});


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
			var ref = "idcheck.html?id="+input_id;
			window.open(ref, "idcheck", "width=350,height=200");
		}else{
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
	
	





	





