let signInBtnLink = document.querySelector(".signInBtn-link");
let signUpBtnLink = document.querySelector(".signUpBtn-link");
let wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
signInBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
