var oUl = document.getElementById('ul');
var allPersonArr = [
	{name : '刘云' , age : 20 , sex : 'female'},
	{name : '刘德华' , age : 40 , sex : 'male'},
	{name : '小宝宝' , age : 3 , sex : 'male'},
	{name : '宋小宝' , age : 18 , sex : 'female'},
	{name : '蔡小宝' , age : 33 , sex : 'female'},
	{name : '蔡嫂嫂' , age : 20 , sex : 'female'},
	{name : '蔡连鹏' , age : 24 , sex : 'male'}
];
var filterArr = allPersonArr;
var lastSex = 'all';
function bindEventByActions(actions){
	actions.forEach(function(ele,index){
		switch(ele.type){
			case 'filterName':
				ele.doc.oninput = function(){
					randerPageByArr(
						filterArr = filterPersonArr(allPersonArr,this.value)
						);
					lastSex = 'all';
				}
				break;
			case 'addAge':
				ele.doc.onclick = function(){
					randerPageByArr(addAge(filterSex(filterArr,lastSex)));
				}
				break;
			case 'filterSex':
				ele.doc.onclick = function(){
					randerPageByArr(filterSex(filterArr,lastSex = ele.prame));
				}
				break;
		}
	})
}
bindEventByActions(actions);
