const header = document.querySelector('header');

const stickHeader = () => {
    const scroll = window.scrollY;
    if(scroll > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

window.addEventListener('scroll', stickHeader);


const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () =>{
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    const key = e.target.dataset.key;

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      110;

    menu.classList.remove('active');
    burgerBtn.classList.remove('active');

    window.scrollTo({ top: section, behavior: 'smooth' });
  })
);





function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var firstNamePattern = /^[a-zA-Z]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
    var isValid = true;
    
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    
    if (!firstName.match(firstNamePattern)) {
      document.getElementById("firstNameError").textContent = "Imię może zawierać tylko litery.";
      isValid = false;
    }
    
    if (!lastName.match(firstNamePattern)) {
      document.getElementById("lastNameError").textContent = "Nazwisko może zawierać tylko litery.";
      isValid = false;
    }
    
    if (!email.match(emailPattern)) {
      document.getElementById("emailError").textContent = "Podaj poprawny adres email.";
      isValid = false;
    }
    
    if (!password.match(passwordPattern)) {
      document.getElementById("passwordError").textContent = "Hasło ma zawierać 6-20 znaków, conajmniej 1 wielką literę, 1 małą literę i 1 cyfrę.";
      isValid = false;
    }
    
    return isValid;
  }






  function updateCountdown() {
    const endDate = new Date('June 15, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('time-remaining').innerHTML = `
        ${days} dni ${hours} godzin ${minutes} minut ${seconds} sekund
    `;

    if (distance < 0) {
        document.getElementById('time-remaining').innerHTML = "Konkurs zakończony";
        clearInterval(countdownInterval);
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();