//打印1-100之间所有奇数之和

var sum = 0;
for(var i=1;i<=100;i++){
    // 判断i是否是奇数
    if(i%2 !== 0){
        // console.log(i);
        sum = sum + i;
    }
    
}
console.log(sum);
