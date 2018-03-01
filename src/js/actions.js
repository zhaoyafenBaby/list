var oInp = document.getElementById('oInp');
var oAge = document.getElementById('age');
var oMale = document.getElementById('male');
var oFemale = document.getElementById('female');
var oAll = document.getElementById('all');

var actions = [
	{doc : oInp , type : 'filterName'},
	{doc : oAge , type : 'addAge'},
	{doc : oMale , type : 'filterSex' , prame : 'male'},
	{doc : oFemale , type : 'filterSex' , prame : 'female'},
	{doc : oAll , type : 'filterSex' , prame : 'all'}
];
