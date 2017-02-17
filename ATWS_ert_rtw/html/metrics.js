function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["ATWS_DW"] = {file: "C:\\Users\\seanryu\\OneDrive - MathWorks\\Works\\ATWS\\ATWS_ert_rtw\\ATWS.c",
	size: 49};
	 this.metricsArray.fcn["ATWS_initialize"] = {file: "C:\\Users\\seanryu\\OneDrive - MathWorks\\Works\\ATWS\\ATWS_ert_rtw\\ATWS.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["ATWS_step"] = {file: "C:\\Users\\seanryu\\OneDrive - MathWorks\\Works\\ATWS\\ATWS_ert_rtw\\ATWS.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["memset"] = {file: "C:\\MATLAB\\R2016b\\sys\\lcc\\include\\string.h",
	stack: 0,
	stackTotal: 0};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data;}
}
	 CodeMetrics.instance = new CodeMetrics();
