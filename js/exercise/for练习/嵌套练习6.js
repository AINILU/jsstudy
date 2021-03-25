//打印1-100所有质数
// console.time();计时器开头，用timeEnd结尾
console.time('test');
var i,j;
for(i=2;i<=100;i++){
    var flag=true;
    for(j=2;j<=Math.sqrt(i);j++){
        if(i%j ==0){
            flag=false;
            break;
        }
    }
    if (flag) {
        document.write(i+'&nbsp;&nbsp;&nbsp;&nbsp;');
    }
}
console.timeEnd('test');

// Math.sqrt();开方
var result = Math.sqrt(36);
console.log(result);