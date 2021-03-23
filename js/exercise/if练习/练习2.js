/*
    高180cm，富1000w，帅500
    三个满足，一定
    1-2个，可能
    0，不嫁
*/

var height,rich,hanson,result;
height = prompt('请输入身高');
rich = prompt('请输入财富');
hanson = prompt('请输入帅');

result = (height>=180)+(rich>=1000)+(hanson>=500);

if(result == 3){
    alert('一定');
}
else if(result == 1 || result == 2 ){
    alert('可能');
}
else{
    alert('不嫁');
}