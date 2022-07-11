
var userdata = JSON.parse(localStorage.getItem('users'));




function login() {


    

    var data1 = {


      email: document.querySelector('#Email').value,
      password: document.querySelector('#Password').value,
    };

    console.log(data1);
    if (userdata == null) {
        
        alert("please Create an account");
    } else if (userdata.email == data1.email && userdata.password == data1.password) {
        
        alert('Login successful!');



        window.location.href("index.html");
    } else {
        
        alert("User Doesn't Exit");

        
    }

}

