let currentUser = null;

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const found = users.find(u => u.username === user && u.password === pass);
  if (found) {
    currentUser = found;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("nav").style.display = "block";
    if (found.role === "gestor") {
      navigate("gestor");
      showGestor();
    } else {
      navigate("dashboard");
      showCursos();
    }
  } else {
    alert("Usuário ou senha inválidos.");
  }
}

function logout() {
  location.reload();
}

function navigate(section) {
  document.querySelectorAll('main > section').forEach(s => s.style.display = "none");
  document.getElementById(section).style.display = "block";
}

function showCursos() {
  const lista = document.getElementById("curso-lista");
  lista.innerHTML = "";
  currentUser.cursos.forEach(curso => {
    const li = document.createElement("li");
    li.textContent = curso;
    lista.appendChild(li);
  });
}

function showGestor() {
  const div = document.getElementById("alunos");
  div.innerHTML = "<h3>Progresso dos Alunos</h3>";
  users.filter(u => u.role === "aluno").forEach(u => {
    const p = document.createElement("p");
    p.textContent = `${u.username}: ${u.cursos.length} cursos`;
    div.appendChild(p);
  });
}