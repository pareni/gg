const tasks = ['піти на роботу', 'прибрати дім'];
let e=0
function to_do_task() {
    event.preventDefault();
    
    let a=document.getElementById('first_task').value;
    tasks.push(a)
    console.log(tasks)
};

function print_all(){
    event.preventDefault();
    if (e===0){
        for (i=0;i<tasks.length;i++){
            const para = document.createElement("p");
            para.id='p1'
            para.innerText = i+1+'. '+tasks[i];
            document.body.appendChild(para);
            }}
    else{
        for (i=0;i<tasks.length;i++){
            var elementToRemove = document.getElementById('p1');
            elementToRemove.parentNode.removeChild(elementToRemove);
        }
        
        for (i=0;i<tasks.length;i++){
            const para = document.createElement("p");
            para.id='p1'
            para.innerText = i+1+'. '+tasks[i];
            document.body.appendChild(para);
            }
    }
    e++
};



function del_task(){
    
    event.preventDefault();

    let b=document.getElementById('num_task').value
    tasks.pop(b-1)

};


function reg_task(){
    event.preventDefault();
    let c= document.getElementById('num_task1').value
    let d= document.getElementById('for_what').value

    tasks[c-1]=d





};

function del_p(){
    event.preventDefault();
    var elementToRemove = document.getElementById('p1');
    elementToRemove.parentNode.removeChild(elementToRemove);

};