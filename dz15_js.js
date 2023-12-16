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
