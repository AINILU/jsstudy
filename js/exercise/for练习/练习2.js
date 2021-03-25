//打印1-100所有7的倍数之和
for(var i = 1,sum = 0;i<=100;i++){
    if (i%7==0) {
        sum += i;
    }
}
console.log(sum);