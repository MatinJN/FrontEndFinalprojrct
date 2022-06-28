let btn = document.getElementById('register-btn')
btn.onclick(function(e){
    e.preventDefault();
    let Name = document.getElementById('register-n').value;
    let Email = document.getElementById('register-e').value;
    let Password = document.getElementById('register-p').value;
    

    let user = {
        name: Name,
        email: Email,
        password: Password
    };

    localStorage.setItem('username',JSON.stringify(user));
    JSON.parse(localStorage.getItem('username'));    

})



