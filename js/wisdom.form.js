; (function($, window, document, undefined) {

	var pluginName = 'wisdomForm',
	defaults = {
		propertyName: "value"
	};

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;
		this._version = "version 0.1.0";

		this.init();
	}

	/* 对外私有de方法--private */
	/**
	 * 点击Legend时，隐藏、显示表单。
	 */
	var toggleLegend = function() {
		$(this.element).find('legend').css('cursor','pointer').click(function(){
			$(this).next('ul').toggle('fast','swing');
		});
	};

	/* 构造函数方法-private */
	var create = function() {
		//表单验证
		try{
			$(this.element).validate({
				errorElement:'div',
				errorPlacement: function(error, element) {
					error.addClass('tooltip tooltip-inner');
					element.after(error);
					var pos = $.extend({}, element.offset(), {
						width: element.outerWidth()
					  , height: element.outerHeight()
					  }),
					  actualWidth = error.outerWidth(),
					  actualHeight = error.outerHeight();
					error.css({display:'block',opacity:'0.8',top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2});
				},
				highlight: function(element, errorClass) {
					//高亮显示
					$(element).addClass(errorClass);
					$(element).parents('li:first').children('label').addClass(errorClass);
				},
				unhighlight:function(element, errorClass){
					$(element).removeClass(errorClass);
					$(element).parents('li:first').children('label').removeClass(errorClass);
				}
			});
		}catch(error){alert(error)}
	};

	/* 对外暴露de方法 
	Plugin.prototype.setContent = function(val) {
		$(this.element).html(val);
		return $(this.element).html();
	};
	*/

	/* 获取和设置参数变量--get|set 方法 */
	Plugin.prototype.get = function(v) {
		try {
			if (typeof v == 'string') return eval("this.options." + v);
			else throw new Error("Invilid parameter type!");
		} catch(e) {
			alert(e.message);
		}
	};
	Plugin.prototype.set = function(v, l) {
		try {
			if (typeof v == 'string') eval("this.options." + v + "= l;");
			else throw new Error("Invilid parameter type!");
		} catch(e) {
			alert(e.message);
		}
	};

	/* 初始化方法 */
	Plugin.prototype.init = function() {
		create.call(this); //构造函数
		toggleLegend.call(this); //私有函数调用方法
	};
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	}

})(jQuery, window, document);