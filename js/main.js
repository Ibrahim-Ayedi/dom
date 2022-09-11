let p1price=document.getElementById('product1price')
let pqtn=document.getElementById('product-qtn')
let total=document.getElementById('total')
let part1=document.getElementById('part1')



let p1price2=document.getElementById('product1price2')
let pqtn2=document.getElementById('product-qtn2')
let part2=document.getElementById('part2')



let p1price3=document.getElementById('product1price3')
let pqtn3=document.getElementById('product-qtn3')
let part3=document.getElementById('part3')

let heart=document.getElementById('thumbs')
let heart1=document.getElementById('thumbs1')
let heart2=document.getElementById('thumbs2')
// function thumbs(){
//     if(thumbs.style.color=='red'){
//       thumbs.style.color='black'
//     }
//     else{
//       thumbs.style.color='red'
//     } }
    function inc(){
        pqtn.innerHTML=+pqtn.innerHTML+1
        p1price.innerHTML=+p1price.innerHTML+250;
        total.innerHTML=+total.innerHTML+250
      }
      function dec(){
        if(pqtn.innerHTML==0){
          pqtn.innerHTML=pqtn.innerHTML
          total.innerHTML=+total.innerHTML
          p1price.innerHTML=p1price.innerHTML
        }
        else{  pqtn.innerHTML=+pqtn.innerHTML-1
          total.innerHTML=+total.innerHTML-250
          p1price.innerHTML=+p1price.innerHTML-250}
      
      }
      function remove(){
        part1.style.display='none'
        total.innerHTML=+total.innerHTML-p1price.innerHTML
        }
        function thumbs(){
            if(heart.style.color=='red'){
              heart.style.color='black'
            }
            else{
              heart.style.color='red'
            }
        }
        function thumbs1(){
          if(heart1.style.color=='red'){
            heart1.style.color='black'
          }
          else{
            heart1.style.color='red'
          }
      }
      function thumbs2(){
        if(heart2.style.color=='red'){
          heart2.style.color='black'
        }
        else{
          heart2.style.color='red'
        }
    }
        function inc2(){
            pqtn2.innerHTML=+pqtn2.innerHTML+1
            p1price2.innerHTML=+p1price2.innerHTML+250;
            total.innerHTML=+total.innerHTML+250
          }
          function dec2(){
            if(pqtn2.innerHTML==0){
              pqtn2.innerHTML=pqtn2.innerHTML
              total.innerHTML=+total.innerHTML
              p1price2.innerHTML=p1price2.innerHTML
            }
            else{  pqtn2.innerHTML=+pqtn2.innerHTML-1
              total.innerHTML=+total.innerHTML-250
              p1price2.innerHTML=+p1price2.innerHTML-250}
          }
          function remove2 (){
            part2.style.display='none'
            total.innerHTML=total.innerHTML-p1price2.innerHTML
            }
            
            
            // function thumbs3(){
            //   if(thumbs3.style.color=='red'){
            //     thumbs3.style.color='black'
            //   }
              
            //   else{
            //     thumbs3.style.color='red'
            //   }
            // }
            function inc3(){
              pqtn3.innerHTML=+pqtn3.innerHTML+1
              p1price3.innerHTML=+p1price3.innerHTML+250;
              total.innerHTML=+total.innerHTML+250
            }
            function dec3(){
                if(pqtn3.innerHTML==0){
                  pqtn3.innerHTML=pqtn3.innerHTML
                  total.innerHTML=+total.innerHTML
                  p1price3.innerHTML=p1price3.innerHTML
                }
                else{  pqtn3.innerHTML=+pqtn3.innerHTML-1
                  total.innerHTML=+total.innerHTML-250
                  p1price3.innerHTML=+p1price3.innerHTML-250}
              
              }
              function remove3(){
              part3.style.display='none'
              total.innerHTML=total.innerHTML-p1price3.innerHTML
              }