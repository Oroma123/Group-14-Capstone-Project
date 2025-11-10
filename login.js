    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    togglePassword.addEventListener('click',()=>{
      const type=password.getAttribute('type')==='password'?'text':'password';
      password.setAttribute('type',type);
      togglePassword.textContent=type==='password'?'👁':'🙈';
    });

    document.getElementById('loginForm').addEventListener('submit',e=>{
      e.preventDefault();
      handleLogin();
    });

async function handleLogin(){
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if(email === ''||password === ''){
    alert('Please fill in all fields');
    return;
  } else{
    try{
      const response = await fetch('https://gbese-6f0j.onrender.com/api/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:email, password:password
        })
      });
      const data = await response.json();
      if(response.ok){
        accessToken = data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        //loginMsg.textContent='Login successful!';
        window.location.href="Dashboard.html";
      } else{
        //loginMsg.textContent=data.message ||'Login failed. Please try again.';
        console.log('Login failed:',data);
      }
    } catch(error){
      console.error('Error during login:',error);
      //loginMsg.textContent = 'An error occurred. Please try again later.';
    }
  }
}