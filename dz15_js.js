document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('nameInput').value;
    console.log('Name: ' + name)
    var prizvyshe = document.getElementById('PrizvysheInput').value;
    console.log('Prizvyshe: ' + prizvyshe)
    var password = document.getElementById('PasswordInput').value;
    console.log('Password: ' + password)
    var password2 = document.getElementById('PasswordInput_check').value;
    console.log('Password: ' + password2)

})          

function f() {
    var name = document.getElementById('nameInput').value;
    document.getElementById("result1").innerText='Your name  '+name
    var prizvyshe = document.getElementById('PrizvysheInput').value;
    document.getElementById("result2").innerText='Your pr  '+prizvyshe
    var password = document.getElementById('PasswordInput').value;
    document.getElementById("result3").innerText='Your password  '+password
    var password2 = document.getElementById('PasswordInput_check').value;
    document.getElementById("result4").innerText='Your password  '+password
    
}

