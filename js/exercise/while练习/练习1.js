//假如投资的年利率为5%，试求从1000增长到5000，需要花多少年
var a = 1000;
var i=0;
while (a<5000) {
    i++;
    a *= 1.05;
}
console.log(i);