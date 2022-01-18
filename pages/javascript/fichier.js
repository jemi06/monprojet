function funct1(x,y) {
    let som= (x+y);
    document.write (som);
   

}
function funct2(mult1,mult2) {
    let mult= mult1 * mult2;
    document.write (mult);
   

}
function funct3(a,b) {
    return (funct1 + funct2) ;
 }



function funct4(x, y) {
   for ( i = 1;i<=x; i++){
         for ( j=1;j<=i; j++){
             document.write(y);
            }
            document.write("<br>");
   }
}

function funct5(num, motif) {
   let i, j, k;
   k = num -1;
   for (i = 1; i <= num; i++) {
       for (j = 1; j <= k; j++) {
           document.write(" ");
       }
       for (j = 1; j <= 2 * i - 1; j++) {
           document.write(motif);
       }
       document.write("<br>");
       k--;                    
   }
}