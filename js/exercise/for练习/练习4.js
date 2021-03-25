//输入一个数字,判断是否是质数

// while (true) {   
//     var a = prompt('请输入数字');
//     var n = 0;
//     for(var i=2;i<a;i++){
//         if (a%i !== 0) {
//             n++;
//         }
//     }
//     if (n==a-2) {
//         alert(a+"是质数");
//     }else{
//         alert(a+'是合数');
//     }
// }


var a = prompt('请输入');
var flag = true;
if (a<1) {
    alert('该值不合法');
}else{
    for(var i=2;i<a;i++){
        if (a%i == 0) {
            flag = false;
        }
    }
    if (flag) {
        alert(a+'是质数');
    }else{
        alert(a+'不是质数');
    }
}