//打印99乘法表
var i,j;
for(i=1;i<10;i++){
    for(j=1;j<i+1;j++){
        document.write('<span>'+j+'x'+i+'='+i*j+'</span>');
    }
    document.write('<br>');
}