document.getElementById('logInButton').addEventListener('click', function(){
   const user = document.getElementById('userID');
   const userId = user.value;
   const password = document.getElementById('password-input');
   const passwordValue = password.value ;
   if (passwordValue.length <= 6) {
       document.getElementById('error-pass-number').style.display="block";
   } else {
       if(userId == 'ami-eliyas' && passwordValue == 'howAreYou'){
           window.location.href = 'islamiBank.html'
       }
   }
})