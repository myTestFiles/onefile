/****分页功能****/
var config = {
	pageAll: null, // 总页数
	itemAll: null, // 总条数
	curPage: null, // 当前页
	nextBtn: null, // 下一页按钮
	prevBtn: null, // 上一页按钮
}

/****loading样式****/


/****弹窗****/

/****金额的判断****
	1、无小数点的情况下（小数点的后面的数的长度不能超过两位）
		(1)小数点位于第一位的情况
		(2)
	2、有小数点的情况下
		(1)直接将输入的数放进输入框
	3、失去焦点的时候判断最后一位是否是"."
/
function judgeMoney(num){
		var money = 0;
		var len = num.length;
		if (num.indexOf('.') >= 0){
			if (num.indexOf('.') == 0) {
				money = '0.';
			} else {
				if (len - (num.indexOf('.') + 1) > 2) {
					money = num.substring(0,len - 1);
				}
			}
		} else {
			money = num;
		}
		return money;
	}




