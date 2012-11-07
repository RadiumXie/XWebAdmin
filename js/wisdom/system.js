jQuery(function(){
	try{
		$('.wisdomForm').wisdomForm();
	}catch(error){}
	
	
	//搜索框的显示和隐藏
	$('article.module > header > a.headerCloseButton').hover(function(){
		$(this).addClass('ui-state-hover');
	},function(){
		$(this).removeClass('ui-state-hover');
	});
	
	$('article.module > header > a.headerCloseButton').toggle(function(){
			$(this).children('span').removeClass('ui-icon-circle-triangle-n');
			$(this).children('span').addClass('ui-icon-circle-triangle-s');
			$(this).parent('header').next().hide('fast');
		},function(){
			$(this).children('span').removeClass('ui-icon-circle-triangle-s');
			$(this).children('span').addClass('ui-icon-circle-triangle-n');
			$(this).parent('header').next().show('fast');
	});
	
	//日期控件
	try{
		$('input.DatePicker').DatePicker({
			date: $(this).val(),
			current: $(this).val(),
			starts: 1,
			position: 'r',
			onBeforeShow: function(){
				//$(this).DatePickerSetDate($(this).val(), true);
			},
			onChange: function(formated, dates,element){
				$(element).val(formated);
				//$(element).DatePickerHide();
			}	
		});
	}catch(error){}
	
	try{
	//退出按钮对话框
	$('#modelLogoutDialog').modal({
		backdrop:true,
		keyboard:true,
		show:false
	});
	}catch(error){}
	
	//控制列高
	$('.column').equalHeight();
	
	//显示隐藏菜单
	$('#sidebar').toggleMenu();
	
	
	
	setInterval(function(){
		/*
		$('header#header').animate({
			backgroundPositionX:'+=300px',
		} ,10000);
		*/
		$('header#header').css('backgroundPositionX','+=1px');
	},50);
});