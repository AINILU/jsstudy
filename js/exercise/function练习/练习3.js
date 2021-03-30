//创建一个函数，可以在控制台中输出一个人的信息
//可以输出人的name，age，gender，address
//实参可以是任意的数据类型，也可以是对象
//可以将参数封装到对象中，然后通过对象传递
// function sayHello(name,age,gender,address) {
//     console.log('我是'+name+',今年我'+age+'岁了，我的性别是'+gender+',家庭地址是'+address);
// }

// sayHello('sun',18,'男','江苏南京');

// 创建一个对象
var obj = {
    name:'zhu',
    age:15,
    gender:'女',
    address:'苏州'
};
function sayHello(o) {
    console.log('我是'+o.name+',今年我'+o.age+'岁了，我的性别是'+o.gender+',家庭地址是'+o.address);
}
sayHello(obj);
//实参可以是一个对象,也可以是一个函数
function fun2(a) {
    // console.log(a);
    
}
fun2(sayHello(obj));
//sayHello  函数对象,相当于直接使用函数对象
//sayHello()调用函数,相当于使用的是函数的返回值
