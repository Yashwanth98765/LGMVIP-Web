document.querySelector('#btn').onclick=function()
{
    if(document.querySelector('input').value.length==0)
    {
        alert(' enter a new task')
    }
    
}
   
 document.getElementById('btn').addEventListener('click',
function go (){ 
    let input= document.getElementById('input').value;
    let elem=document.createElement('li');
    let btn1=document.createElement('button');
    let btn2=document.createElement('button');
    btn1.innerText="Done";
    btn2.innerText="Delete";
    btn1.className="done";
    btn2.className="delete";
   
    elem.innerText=input; 
    let ul=document.querySelector('ul'); 
    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2);

 btn1.addEventListener('click',function()
 {
    elem.style.textDecoration="line-through red";
 });
 btn2.addEventListener('click',function()
 {
   elem.remove();
 });
 document.getElementById('input').value="";
}
);

