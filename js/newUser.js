const formNewUser = document.getElementById('form-new-user')

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')

const passwordConfirmation = document.getElementById('password2')

formNewUser.addEventListener('submit', (e) => {
  e.preventDefault() // impedir comportamento padrão do submit

  const newUser = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  }
  if (passwordInput.toUpperCase() != passwordConfirmation.toUpperCase()) {
    passwordConfirmation.setCustomValidity("Passwords Don't Match");

   }
   else {
    passwordConfirmation.setCustomValidity('');   
    addNewUser(newUser)
  }
})

async function addNewUser(newUser) {
  try {
    const response = await api.post('/users/signup', newUser)

    if (response.status === 201) {
      location.href = "index.html"
    }
  } catch (error) {
    console.log('Erro ao cadastrar usuário', error)
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