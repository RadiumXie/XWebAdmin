; (function($, window, document, undefined) {
	var pluginName = 'wisdomGrid',
	defaults = {
		tableClass:'jqGridDataTable',//添加的table的class
		tableIdPrefix:'jqGridDataTable',//添加的table的ID前缀,ID格式为tableIdPrefix_数量
		jsonReader : {
			//数据来源
			root:"result",  
			//当前页码
			page: "pageNo",  
			//总页数
			total: "totalPages",
			//查询出道记录数
			records: "totalCount",
			repeatitems: false,  
			userdata: "userdata"
		},
		//标题
		caption:"数据表格",
		//载入数据时，禁止表格所有操作。
		loadui:'block',
		//获取数据的方式 GET/POST,为了使查询正常提交中文,提交方式为post
		mtype:'POST',
		//请求数据的地址
		url:'#', 
		//数据格式
		datatype: "json", 
		//列
		colModel:[],
		//显示行号
		rownumbers: true, 
		//默认每页显示行数
		rowNum:20,
		//可选行数
		rowList:[5,10,15,20,30,40,50], 
		//放置翻页的容器
		pager: '#page', 
		//排序字段
		sortname: 'id', 
		//排序类型
		sortorder: "desc", 
		sortable:true,
		//显示数据条数和页面等信息（左下角）
		viewrecords: true,
		//大数据量（>100）时提升性能
		gridview: false,
		//是否可以多选
		multiselect: false, 
		//点击某个按钮时，进行选中操作。
		//multikey:'ctrlKey',
		//高度
		height:450,
		//自动宽度
		//width:'auto',
		autowidth: true,
		sortable: true,
		//在表格下方多加一行,显示用户自定义数据,数据格式name:value
		footerrow:false,
		userDataOnFooter : false,
		loadComplete:jQuery.noop()
	};

	function Plugin(element, options) {
		this.element = $(element);
		this.options = $.extend({},defaults, options);

		this._defaults = defaults;
		this._name = pluginName;
		this._version = "version 0.1.0";

		this.init();
	}
	
	
	/* 对外私有de方法--private */
	var toggleLegend = function() {
		$(this.element).find('legend').css('cursor','pointer').click(function(){
			$(this).next('ul').toggle('fast','swing');
		});
	};
	
	/* 构造函数方法-private */
	var create = function() {
		var $table = $('<table></table>');
		this.element.append($table);
		//获得当前的表格数量。
		var tableSize = $('table.'+this.options.tableClass).length;
		$table.attr('id',this.options.tableIdPrefix+'_'+tableSize);
		$table.attr('class',this.options.tableClass);
		
		cumLoadComplete = function(data){};
		if(this.options.loadComplete != null){
			cumLoadComplete = this.options.loadComplete;
		}

		this.options.loadComplete = function(data){
			//预留给需要处理的函数
			cumLoadComplete(data);
		}
		jQuery($table).jqGrid(this.options);
		
	};

	/* 对外暴露de方法 */ 
	Plugin.prototype.setContent = function(val) {
		$(this.element).html(val);
		return $(this.element).html();
	};
	

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