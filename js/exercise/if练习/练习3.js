/*
    键盘输入三个整数，num1-num3
    排序，从小到大输出
*/
// prompt()函数返回值类型为string
var num1,num2,num3;
var max,min,mid;
num1 = +prompt('num1值');
num2 = +prompt('num2值');
num3 = +prompt('num3值');

max = num1>num2 ? (num1>num3 ? num1 : num3) : (num2>num3 ? num2 : num3);
min = num1<num2 ? (num1<num3 ? num1 : num3) : (num2<num3 ? num2 : num3);
mid = num1>num2 ? (num1>num3 ? num3 : num1) : (num2>num3 ? num3 : num2);

alert(min + '<' + mid + '<' + max);

