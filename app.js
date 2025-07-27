
function showLogin() {
  document.getElementById('content').innerHTML = `
    <h2>Login do Aluno</h2>
    <input type="email" placeholder="Email" /><br>
    <input type="password" placeholder="Senha" /><br>
    <button onclick="login()">Entrar</button>
  `;
}

function showRegister() {
  document.getElementById('content').innerHTML = `
    <h2>Cadastro de Aluno</h2>
    <input type="text" placeholder="Nome" /><br>
    <input type="email" placeholder="Email" /><br>
    <input type="password" placeholder="Senha" /><br>
    <button onclick="register()">Cadastrar</button>
  `;
}

function login() {
  alert("Login simulado!");
}

function register() {
  alert("Cadastro simulado!");
}
