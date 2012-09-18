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

            // set each items height to use the tallest value found
            this.each(function(){
                $(this).height(tallest);
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