let btn = document.querySelector("#show");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector("#confirmt");
let cancelBtn = document.querySelector("#cancel");
let right = document.querySelector(".right");

btn.addEventListener("click", function () {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
cancelBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("confirm").onclick = function () {
  let loginId = document.getElementById("login").value;
  let passwordId = document.getElementById("password").value;
  let data = { name: "a", pass: "b" };
  function login(name) {
    return new Promise((resolve, reject) => {
      if (name !== loginId) {
        reject();
      }
      if (name === loginId) {
        resolve();
      }
    });
  }
  function password(pass) {
    return new Promise((resolve, reject) => {
      if (pass !== passwordId) {
        reject();
      }
      if (pass === passwordId) {
        resolve();
      }
    });
  }
  login(data.name)
    .then(() => {
      console.log("confirm loogin");
      return password(data.pass);
    })
    .then(() => {
      console.log("confirm password");
    })
    .then(() => {
      right.style.display = "flex";
      modal.style.display = "none";
    })

    .catch(() => {
      console.log("incorrect login or password");
    });
};
