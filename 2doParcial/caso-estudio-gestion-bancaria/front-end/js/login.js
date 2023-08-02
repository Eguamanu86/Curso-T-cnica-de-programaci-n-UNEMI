import { UsersUseCase } from '../../src/use-case/users-use-case.js'
// Creamos la instancia del caso de uso
const usersUsecase = new UsersUseCase()

const formLogin = document.getElementById('id-form-login')

formLogin.addEventListener('submit', event => {
  event.preventDefault()

  const username = document.getElementById('id-username').value
  const password = document.getElementById('id-password').value

  const user = usersUsecase.login(username, password) // null/undefined -> objeto User
  console.log(user)

  if (user) {
    usersUsecase.setCreateSession(user)
    window.location = 'index.html'
  } else {
    alert('Usuario es incorrecto.')
  }
})
