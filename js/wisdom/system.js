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

    //显示隐藏左侧菜单。隐藏左侧菜单时，自动放大右侧内容区域。
    $('#toggleMenu').toggle(function(){
        $('section#secondary_bar .user').animate({
            left:'-18%'
        },1000);
        $('aside#sidebar').animate({
            left:'-18%'
        },1000);
        $('section#main').animate({
            left:'0%',
            width:'100%'
        },1000);
        $('section#secondary_bar .breadcrumbs_container').animate({
            left:'0%',
            width:'100%'
        },1000);
        $(this).attr('class','icon-chevron-right');
    },function(){
        $('section#secondary_bar .user').animate({
            left:'0%'
        },1000);
        $('aside#sidebar').animate({
            left:'0%'
        },1000);
        $('section#main').animate({
            left:'18%',
            width:'82%'
        },1000);
        $('section#secondary_bar .breadcrumbs_container').animate({
            left:'18%',
            width:'82%'
        },1000);
        $(this).attr('class','icon-chevron-left');
    });
});