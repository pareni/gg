var scet=1
var peoples_all={
    1:{
        firstname:'Illya',
        secondname:'Koynash',
        city:'Dnipro',
        password:'*********'
    }
};


console.log(peoples_all)

function appending(){
    event.preventDefault()
    scet++
    peoples_all[scet]={
        firstname:document.getElementById('firstname').value,
        secondname:document.getElementById('secondname').value,
        city:document.getElementById('city').value,
        password:document.getElementById('password').value
    }
    console.log(peoples_all)
    
    for (i=1;i<scet+1;i++){
        const para = document.createElement("p");
        para.id='p1'
        para.innerText =i+'.'+ peoples_all[i].firstname;
        document.body.appendChild(para);

        const para2 = document.createElement("p");
        para2.id='p1'
        para2.innerText =i+'.'+ peoples_all[i].secondname;
        document.body.appendChild(para2);

        const para3 = document.createElement("p");
        para3.id='p1'
        para3.innerText =i+'.'+ peoples_all[i].city;
        document.body.appendChild(para3);


        const para4 = document.createElement("p");
        para4.id='p1'
        para4.innerText =i+'.'+ peoples_all[i].password;
        document.body.appendChild(para4);
        
    };
};



function deleatt(){
    event.preventDefault()
    var element_for_del=document.getElementById('KEY').value
    delete peoples_all[element_for_del]
    console.log(peoples_all)



};

function changes(){
    event.preventDefault()
    var key1=document.getElementById('KEY_1').value
    var key2=document.getElementById('KEY_2').value
    var zn=document.getElementById('znaczen').value

    peoples_all[key1][key2]=zn

    console.log(peoples_all)


};

    




