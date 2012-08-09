(function($){
	jQuery.fn.extend({
		
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
					console.debug(data);
					if(data == 'Yes'){
						affirmativeCallback();
					}else if(data == 'No'){
						negativeCallback();
					}
				}
			});
		}
	});
})(jQuery);