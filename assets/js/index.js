function validateAndSend() {
  // Validazione del form
  var nameInput = document.getElementById("name");
  var surnameInput = document.getElementById("surname");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var name = nameInput.value.trim();
  var surname = surnameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();

  // Controllo se tutti i campi sono stati compilati
  if (name === "" || surname === "" || email === "" || message === "") {
    alert("Please fill in all the required fields.");
    return;
  }

  // Verifica validità del nome e cognome (non devono contenere numeri)
  var nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Invalid name. Please enter a valid name without numbers.");
    return;
  }

  if (!nameRegex.test(surname)) {
    alert("Invalid surname. Please enter a valid surname without numbers.");
    return;
  }

  // Verifica validità dell'email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email. Please enter a valid email address.");
    return;
  }

  // Verifica lunghezza del messaggio
  if (message.length < 30) {
    alert("Invalid message. Please enter a message with at least 30 characters.");
    return;
  }

  // Invio dell'email
  var params = {
    name: name,
    surname: surname,
    email: email,
    message: message,
  };

  const serviceID = "service_pc37rdc";
  const templateID = "template_d4o1b95";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      nameInput.value = "";
      surnameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      console.log(res);
      alert("Your message has been sent successfully.");
    })
    .catch((err) => console.log(err));
}
