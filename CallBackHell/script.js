'use Scrit'
let  timer=10;
let time=document.getElementById('display')


setTimeout(()=>{
  time.innerHTML=timer--;
  setTimeout(()=>{
   time.className='badge rounded-pill bg-light text-drak'
   time.innerHTML=timer--;
   setTimeout(()=>{
    time.className='badge rounded-pill bg-green'
    time.innerHTML=timer--;
    setTimeout(()=>{
        time.className='badge rounded-pill bg-light text-drak '
        time.innerHTML=timer--;
        setTimeout(()=>{
            time.className='badge rounded-pill bg-yellow '
            time.innerHTML=timer--;
            setTimeout(()=>{
                time.className='badge rounded-pill bg-light text-dark '
                time.innerHTML=timer--;
                setTimeout(()=>{
                    time.className='badge rounded-pill bg-yellow'
                    time.innerHTML=timer--;
                    setTimeout(()=>{
                        time.className='badge rounded-pill bg-light text-dark'
                        time.innerHTML=timer--;
                        setTimeout(()=>{
                            time.className='badge rounded-pill bg-yellow'
                            time.innerHTML=timer--;
                            setTimeout(()=>{
                                time.className='badge rounded-pill bg-light text-dark'
                                time.innerHTML=timer--;
                                setTimeout(()=>{
                                    time.className='badge rounded-pill bg-yellow text-dark'
                                    time.innerHTML="Happy INDEPENTENCE DAY";
                                   
                                },1000)
                            },1000) 
                        },1000) 
                       },1000) 
                   },1000) 
               },1000) 
           },1000) 
       },1000) 
   },1000) 
  },1000)
},1000)
