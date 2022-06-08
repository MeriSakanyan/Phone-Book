document.querySelector('#check').onclick = function(){
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if(email == 'sakanyan-meri@mail.ru' && password == 'Sakanyan') {
        document.location.href = '..//user_page/user_page.html';
    }
    else if (email.length > 30 || password.length < 8 || password.length > 10){
        let error = 'incorrect length of '
         if(email.length > 30){
             error = error + 'email';
        }
         if (password.length < 8 || password.length > 10){
            error = error + ' password';
        }
        document.querySelector('.error_message').append(error);
    }
   
    else {
        // alert('incorrect login or password!');
         document.querySelector('.error_message').append('Incorrect login or password!');
    }
}



alert("aaaaa")