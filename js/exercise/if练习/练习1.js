/*
    从键盘输入小明期末成绩信息：
        当成绩为100时，给车
        80，手机
        60，书
        其他，什么都没有
*/ 
/*
    prompt();可以弹出一个提示框，该提示框会带有一个文本框
        用户可以在文本框中输入一段内容，该函数需要一个字符串作为参数，
        该字符串会作为提示框的提示文字
    用户的输入内容会作为函数的返回值返回，可以定义一个变量来接受该内容
*/
var score ;

score = prompt('小明的期末成绩是:');
// 判断值是否合法
if(score>100 || score <0 || isNaN(score)){
    alert('xjbs');
}
else{
    
    if(score == 100){
        alert('车');
    }
    else if(score >=80){
        alert('手机');
    }
    else if(score >=60){
        alert('书');
    }
    else{
        alert('什么都没有');
    }
}
