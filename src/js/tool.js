
//根据name筛选数组
function randerPageByArr(PersonArr){
	var htmlArrStr = '';
	PersonArr.forEach(function(ele,index){
		htmlArrStr += '<li>' + 'name : ' + ele.name + '， age : ' + ele.age + '， sex : ' + ele.sex;
	})
	oUl.innerHTML = htmlArrStr;
}
//根据name筛选数组
function filterPersonArr(allPersonArr,val){
	return allPersonArr.filter(function(ele,index){
		 return ele.name.indexOf(val) != -1
	})
}
//将筛选出的数组年龄+1
function addAge(filterArr){
	return filterArr.map(function(ele,index){
		ele.age ++;
		return ele;
	})
}
//根据sex筛选数组
function filterSex(filterArr,sex){
	return filterArr.filter(function(ele,index){
		return sex === 'all' ? true : ele.sex === sex;
	})
}
