const formLogin = document.getElementById('form-login')

const emailInput = document.getElementById('email-login')
const passwordInput = document.getElementById('password-login')

formLogin.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  }

  if (emailInput.value && (passwordInput.value).length >= 6) {
    login(data)
  }
})

async function login(data) {
  try {
    const response = await api.post('/users/login', data)

    if (response.status === 200) {
      const userData = response.data

      localStorage.setItem('userId', userData.userId)
      location.href = "listar-recados.html"
    }
  } catch (error) {
    console.log('Erro ao fazer login', error)
  }
}


(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()