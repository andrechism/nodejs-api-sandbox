const password = document.querySelector('#password');
const user = document.querySelector('#user');
const login = document.querySelector('#login');

const loginFunction = async () => {
  const response = await fetch('http://localhost:3000/api/v1/auth', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: user.value, password: password.value})
  });

  user.value = '';
  password.value = '';
};

login.addEventListener('click', loginFunction);
password.addEventListener('keyup', e => {
  console.log(e.key);
});