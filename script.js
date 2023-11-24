// let data=""

// document.querySelector("button").addEventListener("click",function(){
//     data+=document.querySelector("button").value;
//     document.querySelector("input").value= data;
// })

let data="";

function Valueadd(x){
    data+=x;
    document.querySelector("input").value=data;
 
}
function result(){
    document.querySelector("input").value="";
    let res=eval(data);
    document.querySelector("input").value=res;
    data=res;
}

function cln(){
    document.querySelector("input").value=""
    data='';
}

function dlt(){
    data=data.slice(0,-1);
    document.querySelector("input").value=data;
}