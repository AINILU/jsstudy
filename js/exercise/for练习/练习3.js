//水仙花数
// 1个三位数，每位数的三次幂之和，等于本身
var a,b,c;
for(a=1;a<10;a++){
    for(b=0;b<10;b++){
        for(c=0;c<10;c++){
            if (a*a*a+b*b*b+c*c*c == a*100+b*10+c) {
                console.log(a*100+b*10+c);
            }
        }
    }
}


// for(var i=100;i<1000;i++){
//     var bai = parseInt(i/100);
//     var shi = parseInt((i-bai*100)/10);
//     var ge = i%10;
//     if(bai*bai*bai+shi*shi*shi+ge*ge*ge == i){
//         console.log(i);
//     }
// }