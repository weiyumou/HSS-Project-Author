$(document).ready(function(){
    $("#submit").click(function(){
    	var form_array = $('form').serializeArray();
    	for(var i = 0; i != form_array.length; ++i){

    		if(form_array[i].name == "出生地" && form_array[i].value == "其他"){
    			form_array[i].value = $('#origin-other-text').val();
    		}

			if(form_array[i].name == "家庭语言" && form_array[i].value == "其他"){
				form_array[i].value = $('#lang-home-other-text').val();
			}

			if($('#lang-other-text').val() != ""){
				if(form_array[i].name == "其他语言听力"){
					form_array[i].name = $('#lang-other-text').val() + "听力";
				}else if(form_array[i].name == "其他语言口语"){
					form_array[i].name = $('#lang-other-text').val() + "口语";
				}else if(form_array[i].name == "其他语言阅读"){
					form_array[i].name = $('#lang-other-text').val() + "阅读";
				}else if(form_array[i].name == "其他语言写作"){
					form_array[i].name = $('#lang-other-text').val() + "写作";
				}
			}

			if(form_array[i].name == "与祖父母交流" && form_array[i].value == "其他"){
				form_array[i].value = $('#lang-gra-pa-other-text').val();
			}else if(form_array[i].name == "与父母交流" && form_array[i].value == "其他"){
				form_array[i].value = $('#lang-pa-ma-other-text').val();
			}else if(form_array[i].name == "与兄弟姐妹交流" && form_array[i].value == "其他"){
				form_array[i].value = $('#lang-bro-sis-other-text').val();
			}else if(form_array[i].name == "与同学交流" && form_array[i].value == "其他"){
				form_array[i].value = $('#lang-clas-other-text').val();
			}else if(form_array[i].name == "与朋友交流" && form_array[i].value == "其他"){
				form_array[i].value = $('#lang-fri-other-text').val();
			}else if(form_array[i].name == "与陌生人交流" && form_array[i].value == "其他"){
				form_array[i].value = $('#lang-str-other-text').val();
			}

    	}

    	var w = window.open("");
    	var output = "";
    	for(var i = 0; i != form_array.length; ++i){
    		w.document.writeln(form_array[i].name + ":" + form_array[i].value + "<br>");
    	}
    });
});