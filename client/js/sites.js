import { routes } from "./app.js";
import { router } from "./app.js";

export let renderLogin = () => {
  document.querySelector(".Todo").style.display = "none";
  const LogInHTML = `<form id="loginForm" onsubmit="return false">
    <label for="username">Username:</label><br>
    <input class="loginput" type="text" id="username" name="username"><br>
    <label for="password">Password:</label><br>
    <input class="loginput" type="password" id="password" name="password"><br>
    <button id="loginButton">Log In</button>
    </form>`;
  function LogIn(username, password) {
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.login === true) {
          window.userIsLoggedIn = true;
          router.navigate("#home");
        } else if (json.login === false) {
          window.userIsLoggedIn = false;
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
          alert("Login Daten erneut eingeben...");
        }
        window.token = json.token;
      });
  }
  function checkLogInData() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username !== "" && password !== "") {
      LogIn(username, password);
    }
  }

  const LoginPage = document.getElementById("app");
  LoginPage.innerHTML = LogInHTML;
  const SubmitLogIn = document.getElementById("loginButton");
  SubmitLogIn.addEventListener("click", checkLogInData);
};

export let renderHome = () => {
  document.querySelector(".Todo").style.display = "flex";
  if (window.userIsLoggedIn === undefined) {
    router.navigate("#login");
  }
  app.innerHTML = "";
  const LogInHTML = `
  <div>
    <h1>Welcome Back User...</h1>
    <p>Sobald sie etwas vornehmen, refreshen sie die Page</p>
    <h2>Wenn sie etwas ändern, hinzufügen oder löschen müssen sie sich erneut anmelden!...</h2>
    <button onClick="window.location.reload();">Refresh Page</button>
    </div>`;
  const LoginPage = document.getElementById("app");
  LoginPage.innerHTML = LogInHTML;
  const adddoneform = document.getElementById("post-todo");
  const changeoneform = document.getElementById("change-todo");
  const delteoneform = document.getElementById("delete-todo");

  const URL = "http://localhost:3000/api/getall";
  const fetchData = {
    method: "get",
  };
  fetch(URL, fetchData)
    .then((res) => res.json())
    .then((jsonData) => {
      console.table(jsonData);
      createToDo(jsonData);
    });
  function createToDo(data) {
    let todos = "";
    if (data.length === 0) {
      document.getElementById("todo").innerHTML = "<div>No Data Found</div>";
    }
    const todo = document.createElement("div");
    const appElement = document.getElementById("app");
    appElement.appendChild(todo);
    todo.setAttribute("id", "todo");

    for (let i = 0; i < data.length; i += 1) {
      todos += `<div class="todo-item">
    <p>ID: ${data[i].id}</p>
    <p>${data[i].title}</p>
    <p>${data[i].desc}</p>
    <p>done: ${data[i].done}</p>
    <p>Priority: ${data[i].priority}</p>
    </div>`;
      todo.innerHTML = todos;
    }
  }
  // ADD ONE FUNCTION

  function addOne(ev) {
    ev.preventDefault();

    console.log("Post");
    fetch("http://localhost:3000/api/addone", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      body: JSON.stringify({
        data: {
          title: document.getElementById("name").value,
          desc: document.getElementById("desc").value,
          done: document.getElementById("done").value,
          priority: document.getElementById("priority").value,
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((erorr) => console.log(console.log(error)));
  }

  // CHANGE FUNCTION

  function changeOne(ev) {
    ev.preventDefault();

    fetch("http://localhost:3000/api/changeone", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        data: {
          id: document.getElementById("chid").value,
          title: document.getElementById("chname").value,
          desc: document.getElementById("chdesc").value,
          done: document.getElementById("chdone").value,
          priority: document.getElementById("chpriority").value,
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((erorr) => console.log(console.log(error)));
  }
  // DELET ONE

  function deleteOne(ev) {
    ev.preventDefault();

    fetch("http://localhost:3000/api/delete", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: document.getElementById("delid").value }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((erorr) => console.log(console.log(error)));
  }

  let btn = document.createElement("button");
  btn.innerHTML = "Add One";
  btn.addEventListener("click", addOne);
  adddoneform.appendChild(btn);

  let btn4 = document.createElement("button");
  btn4.innerHTML = "Change One";
  btn4.addEventListener("click", changeOne);
  changeoneform.appendChild(btn4);

  let btn5 = document.createElement("button");
  btn5.innerHTML = "Delete One";
  btn5.addEventListener("click", deleteOne);
  delteoneform.appendChild(btn5);
};

export let renderNotFound = () => {
  app.innerHTML = "";
  let title = document.createElement("h1");
  title.setAttribute("id", "errorMessage");
  title.innerHTML = "Error 404, Page Not found";
  app.appendChild(title);
};
export let renderNavigation = () => {
  let navigation = document.querySelector("nav");
  Object.keys(routes).forEach((key) => {
    if (routes[key].navlabel != undefined) {
      let link = document.createElement("a");
      link.onclick = () => {
        router.navigate(routes[key].hash);
      };
      link.innerHTML = routes[key].navlabel;
      navigation.appendChild(link);
    }
  });
};
