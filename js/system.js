jQuery(function(){
	//显示隐藏菜单
	var showText='显示';
	var hideText='隐藏';
	// initialise the visibility check
	var is_visible = false;
	// append show/hide links to the element directly preceding the element with a class of "toggle"
	$('.toggle').prev().append(' <a href="#" class="toggleLink">'+hideText+'</a>');
	// hide all of the elements with a class of 'toggle'
	$('.toggle').show();
	// capture clicks on the toggle links
	$('a.toggleLink').click(function() {
		// switch visibility
		is_visible = !is_visible;
		// change the link text depending on whether the element is shown or hidden
		if ($(this).text()==showText) {
			$(this).text(hideText);
			$(this).parent().next('.toggle').slideDown('slow');
		}
		else {
			$(this).text(showText);
			$(this).parent().next('.toggle').slideUp('slow');
		}
		// return false so any link destination is not followed
		return false;
	});
	//end//显示隐藏菜单
	
	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
	
	try{
		$('.wisdomForm').wisdomForm();
	}catch(error){console.error(error)}
	
	
	//显示隐藏按钮
	$('article.module > header > a.headerCloseButton').hover(function(){
		$(this).addClass('ui-state-hover');
	},function(){
		$(this).removeClass('ui-state-hover');
	});
	
	$('article.module > header > a.headerCloseButton').toggle(function(){
			$(this).parent('header').next().transition({
				height: '0',
				margin:'0',
				overflow:'hidden',
				opacity: 0
			});
		},function(){
			$(this).parent('header').next().transition({
				height: 'auto',
				margin:'10px 20px',
				opacity: 1
			});
	});
});