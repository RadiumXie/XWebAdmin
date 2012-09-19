(function($){
	jQuery.fn.extend({
		equalHeight:function() {
           // find the tallest height in the collection
           // that was passed in (.column)
            tallest = 0;
            this.each(function(){
                thisHeight = $(this).height();
                if( thisHeight > tallest)
                    tallest = thisHeight;
            });
			//对齐body高度。
			var bodyHeight = jQuery(document).height();
			if(bodyHeight > tallest){
				tallest = bodyHeight;
			}

            // set each items height to use the tallest value found
            this.each(function(){
                $(this).height(tallest);
            });
        },
		
		toggleMenu:function(){
			//显示隐藏菜单
			var showText='显示';
			var hideText='隐藏';
			// append show/hide links to the element directly preceding the element with a class of "toggle"
			var aLink = $(this).find('.toggle').prev().prepend(' <a href="#" class="toggleLink">'+hideText+'</a>');
			
			// hide all of the elements with a class of 'toggle'
			//$('.toggle').show('slow');
			// capture clicks on the toggle links
			aLink.find('a.toggleLink').click(function() {
				var $this = $(this);
				$(this).parent().next('.toggle').toggle('slow',function(){
					if($this.text() == showText){
						$this.text(hideText);
					}else{
						$this.text(showText);
					}
				});
			});
		}
	});
	
	jQuery.extend({
		/**
		 * 确认对话框
		 * message：对话框内容。
		 * affirmativeCallback：确定的回调函数。
		 * negativeCallback：否定的回调函数
		 */
		confirm:function(message,affirmativeCallback,negativeCallback){
			$.Zebra_Dialog(message, {
				'type':     'question',
				'title':    '确认',
				'overlay_opacity':	0.8,
				'onClose':	function(data){
					if(data == 'Yes'){
						if($.isFunction(affirmativeCallback)){
							affirmativeCallback();
						}
					}else if(data == 'No'){
						if($.isFunction(negativeCallback)){
							negativeCallback();
						}
					}
				}
			});
		}
	});
})(jQuery);