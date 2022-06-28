let loginBtn = document.getElementById('login-btn');

loginBtn.onclick(function(e){
    e.preventDefault();
    let Name = document.getElementById('login-n').value
    let Email = document.getElementById('login-e').value
    let Password = document.getElementById('login-p').value
    let p = document.getElementById('p')
    let user = localStorage.getItem('username')
    let data = JSON.parse(user)

    if(user == null){
        p.innerHTML = 'sehvdir'
    }
    else if(Name == data.name && Email == data.email && Password == data.password){
        p.innerHTML = 'good'
    }
    else{
        p.innerHTML ='wrong password'
    }
})