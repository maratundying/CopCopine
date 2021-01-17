jQuery(document).ready(function($) {
	$(document).click(function(){
		if($('#email').length>0){
			if($("#email").val().length==0 && !$('#email').attr('placeholder')){
				$("#email").attr('placeholder', 'Email');
			}
		}
		$('.emailLegend').remove()
		$('#mail_input button').removeAttr('style')
	})

	$(document).on('mouseover','#mail_input button',function(){
		$('#mail_input button').removeAttr('style')
	})

	$(document).on('mouseleave','#mail_input button',function(){
		let len=$('#email').val().length;
		if(len!=0){
			$("#mail_input button").css('color','white')
			$("#mail_input button").css('background-color','#A8977A')
		}
	})

	$(document).on('focus','#email',function(event){
		$("#email").removeAttr('placeholder')
		event.stopPropagation()
		$(".emailLegend").remove()
		let text=`<span class='emailLegend'>Email</span>`;
		$("#mail_input").append(text)
	})

	$(document).on('click','#email',function(event){
		event.stopPropagation()
		let len=$('#email').val().length;
		if(len!=0){
			$("#mail_input button").css('color','white')
			$("#mail_input button").css('background-color','#A8977A')
		}
	})

	$(document).on('click','#email_submit_button',function(){
		$('#email_success').remove()
		$('#wrong_email').remove()
		let input=$("#email").val()
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if(re.test(String(input).toLowerCase())){ //right
    		var div=`
    			<div id='email_success'>Inscription reussit</div>
    		`
    		$('#mail_input').remove()
    		$("#mail_div").append(div)
    	}

    	else{ //wrong
    		var div = `
    			<div id='wrong_email'>Введенный Email адрес не верен! Пожалуйста, укажите свой правильный Email адрес.</div>
    		`
    		$('#mail_div').append(div)

    		$('#email').css({
    			'border': '1px solid red',
    			'background-color': 'white !important',
    		});

    		$("#email_submit_button").removeAttr('style')

    		$("#email_submit_button").css('color','red')
    	}
	})

	$(document).on('input',function(){
		let len=$('#email').val().length;
		if(len!=0){
			$("#mail_input button").css('color','white')
			$("#mail_input button").css('background-color','#A8977A')
		}
	})

	$(document).on('click','.footerSection',function(){
		if(!$(this).hasClass('toggle')){
			$(this).addClass('toggle');
			$(this).children('h5').removeClass('opened').addClass('closed')
		}
		else{
			$(this).children('h5').removeClass('closed').addClass('opened')
			$(this).removeClass('toggle')
		}
	})

	$(document).on('click','.iconsDivToggleButton',function(){
		if(!$(this).parent().children('div').hasClass('iconsDivToggle')){
			$(this).parent().children('div').addClass('iconsDivToggle')
			$(this).removeClass('opened').addClass('closed')
		}
		else{
			$(this).removeClass('closed').addClass('opened')
			$(this).parent().children('div').removeClass('iconsDivToggle')
		}
	})

	$(document).on('mouseover','#icons_div a',function(){
		$('.cloudTitle').remove()
		let website=$(this).data('website');
		let title=`<div class='cloudTitle'>${website}</div>`
		$(this).append(title)
	})

	$(document).on('mouseleave','#icons_div a',function(){
		$('.cloudTitle').remove()
		
	})

	$('.paymentIcon').on('mouseover',function(){
		$("#payment_icons_div").children().css({
			'fill':'#897047',
			'transition-duration': '0.3s',
		});
	})

	$('.paymentIcon').on('mouseleave',function(){
		$("#payment_icons_div").children().css({
			'fill':'#A8977A',
			'transition-duration': '0.3s',
		});
	})
});