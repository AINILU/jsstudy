/*
    对于成绩大于60分的，输出合格，低于60输出不合格
*/
var score ;
score = +prompt();
switch (score>60?1:0) {
    case 1:
        console.log("合格");
        break;

    default:
        console.log('不合格');
        break;
}
// switch (true) {
//     case score >= 60:
//         console.log("合格");
//         break;

//     default:
//         console.log('不合格');
//         break;
// }