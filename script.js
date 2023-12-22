console.log("Hello World!")

let addBtn=document.getElementById("add-btn");

addBtn.addEventListener("click",function(){
    // console.log("heyy")

    if(item.value){
        let item=document.getElementById("item");

        let l1=document.getElementsByTagName("li")
        // console.log(l1)

        for(let i=0;i<l1.length;i++){
            if(item.value==l1[i].innerText){
                alert("Items already has been added! 😉😉");
                return
            }
        }

        let li=document.createElement("li");
        li.innerText=item.value;
        
        let list=document.getElementById("list");
        list.appendChild(li)
    } else {
        alert('Empty Todo list can not be added 😎!!')
    }





})


let clear=document.getElementById("clear");
clear.addEventListener("click", function(){
    let item=document.getElementById("item");
     item.value=""

})


let deleteAll=document.getElementById("delete-all")
deleteAll.addEventListener("click",function(){

      list.innerHTML=""
})


let deleteFirst=document.getElementById("delete-first");
deleteFirst.addEventListener("click",function(){
    let list=document.getElementById("list");
    let firstElement=list.firstElementChild;
    list.removeChild(firstElement)
})


let deleteLast=document.getElementById("delete-last");
deleteLast.addEventListener("click",function(){
    let list=document.getElementById("list");
    let lastElement=list.lastElementChild;
    list.removeChild(lastElement)
})