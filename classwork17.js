const tasks = ['піти на роботу', 'прибрати дім'];
function to_do_task() {
    event.preventDefault();
    
    let a=document.getElementById('first_task').value;
    tasks.push(a)
    console.log(tasks)
};

function print_all(){
    event.preventDefault();
    for (i=0;i<tasks.length;i++){
        const para = document.createElement("p");
        para.innerText = tasks[i];
        document.body.appendChild(para);
        
    }
    

};
