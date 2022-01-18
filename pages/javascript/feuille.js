
       
    function funct1(x,y) {
         let som= x+y;
         document.write (som);
         return(som);
         

     }
     function funct2(x,y) {
         let mult= x*y;
         return (mult);

     }

     function funct3(x,y) {
        return (funct1 + funct2) ;
     }
     //function funct4(x, y ) {
       // for (let i = 0;i<=x; i++);{}
        //for (let j=1;j<=i; j++)
       // {document.write(y);}
        
     //}
     //document.write("<br>");

     function funct4(x, y) {
     for (let i = 1; i <= x; i++){

         for (let j=1 ;j <= i; j++){
            document.write(y);
        }
        document.write("<br>");
            
        }      
}

    function funct5(num, motif){let i, j, k;
    k=num-1;
        for (i=1;i<=num;i++){
             for (j=1; j<=k;j++){
        document.write("");
        }
        for (j=1;j<=2*i-1;j++){
        document.write(motif);
         }
         document.write("<br>");
         k=k-1;
}
}
