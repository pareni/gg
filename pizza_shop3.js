
function login(){
    event.preventDefault();
    let name=document.getElementById('name').value;
    let gmail=document.getElementById('gmail').value;
    let password=document.getElementById('password').value;

    console.log(name)
    console.log(gmail)
    console.log(password)


    const para12 = document.createElement("h1");
    para12.id='h1'
    para12.innerText = "Реєстрація пройшла без проблем";
    document.body.appendChild(para12);


    const para0 = document.createElement("p");
    para0.id='p1'
    para0.innerText = name;
    document.body.appendChild(para0);

    const para1 = document.createElement("p");
    para1.id='p1'
    para1.innerText = gmail;
    document.body.appendChild(para1);

    const para2 = document.createElement("p");
    para2.id='p1'
    para2.innerText = password;
    document.body.appendChild(para2);



};



function adres(){
    event.preventDefault();
    let adresa=document.getElementById('adresa').value;
    console.log(adresa)

    const para26 = document.createElement("p");
    para26.id='p1'
    para26.innerText = "Дякуємо, смачного!";
    document.body.appendChild(para26);

    const para27 = document.createElement("p");
    para27.id='p1'
    para27.innerText = adresa;
    document.body.appendChild(para27);
};


function support(){
    event.preventDefault();
    const para263 = document.createElement("h3");
    para263.id='h3'
    para263.innerText = "Дякуємо за відгук! Ми станемо краще!";
    document.body.appendChild(para263);


};