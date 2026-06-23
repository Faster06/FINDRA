function login(){

const login =
document.getElementById('login').value;

const password =
document.getElementById('password').value;

if(login === '' || password === ''){
alert('Fill all fields');
return;
}

const user = {
login:login
};

localStorage.setItem(
'findraUser',
JSON.stringify(user)
);

window.location.href='profile.html';

}

  function goRegister(){
window.location.href='register.html';
}
