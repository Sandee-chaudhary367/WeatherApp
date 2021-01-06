const form=document.querySelector("form");
const input=document.querySelector("input");

const mess1= document.querySelector("#mess1");
const mess2= document.querySelector("#mess2");
const mess3= document.querySelector("#mess3");
const mess4= document.querySelector("#mess4");
const mess5= document.querySelector("#mess5");
const mess6= document.querySelector("#mess6");
const mess7= document.querySelector("#mess7");



form.addEventListener("submit",(e)=>{
    e.preventDefault();

    mess1.textContent="Loading.....";
    mess2.textContent="";
    mess3.textContent="";
    mess4.textContent="";
    mess5.textContent="";
    mess6.textContent="";


    fetch(`/weather?address=${input.value}`).then((response)=>{
        response.json().then((data)=>{

            if(data.error){
                console.log(data);
                mess1.textContent=data.error;
                mess2.textContent="";
                mess3.textContent="";
                mess4.textContent="";
                mess5.textContent="";
                mess6.textContent="";
            }
            else{
            mess1.textContent=data.mess1;
            mess2.textContent=data.mess2;
            mess3.textContent=data.mess3;
            mess4.textContent=data.mess4;
            mess5.textContent=data.mess5;
            mess6.textContent=data.mess6;
            console.log(data.place);}
        });
        });
});