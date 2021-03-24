/*
    从键盘接受整数参数，如果该值为1-7，打印对应星期，否则打印非法参数
*/
var time;
time = +prompt();
switch (time) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        console.log('星期'+time);
        break;

    default:
        console.log("非法");
        break;
}