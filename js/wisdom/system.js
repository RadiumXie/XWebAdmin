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
		$('input.datePicker').datepicker();
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
		$('header#header').css('backgroundPositionX','+=1px');
	},50);
    //双击User标题栏，隐藏左侧窗口。
    $('#toggleMenu').toggle(function(){
        $(this).attr('class','icon-chevron-right');
        $('section#secondary_bar .user').hide();
        $('aside#sidebar').hide();
        $('section#main').width('100%');
        $('section#secondary_bar .breadcrumbs_container').width('100%');
    },function(){
        $(this).attr('class','icon-chevron-left');
        $('section#secondary_bar .user').show();
        $('aside#sidebar').show();
        $('section#main').width('82%');
        $('section#secondary_bar .breadcrumbs_container').width('82%');
    });
});