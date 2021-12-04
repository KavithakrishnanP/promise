
const msg =(count)=> 
new Promise((resolve,reject)=>{
    // let count=10;
    if(count>=1){
        setTimeout(()=>{
            document.querySelector(".countdown").innnerText=count;
            resolve(count);
        }, 1000);
       
    }else{
        setTimeout(()=>{
            document.querySelector(".countdown").innnerText="Happy Independence Day";
            reject("completed");
        }, 1000);
    }
});

msg(9)
    .then((ct) => msg(--ct))
    // .then((ct) => msg(--ct))
    // .then((ct) => msg(--ct))
    // .then((ct) => msg(--ct))
    // .then((ct) => msg(--ct))
    // .then((ct) => msg(--ct))
    // .then((ct) => msg(--ct))
    // .then((ct) => msg(--ct))
    // .then((ct) => msg(--ct))
    // .then((ct) => msg(--ct))
    // .catch((err) => console.log(err));

