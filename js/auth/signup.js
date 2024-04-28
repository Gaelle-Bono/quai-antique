//Implémenter le JS de ma page
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");

const btnInscription = document.getElementById("btn-inscription");
const registrationForm = document.getElementById("registration-form");


inputNom.addEventListener("keyup", validateForm); 
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

btnInscription.addEventListener("click",userRegistration);


//Function permettant de valider tout le formulaire
function validateForm(){
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPreNom);
  const mailOk = validateMail(inputMail);
  const passwordOk = validatePassword(inputPassword);
  const passwordsOK = validateConfirmationPassword(inputPassword,inputValidationPassword)
  
  if (nomOk && prenomOk && mailOk && passwordOk && passwordsOK) {
    btnInscription.disabled = false;
  } else {
    btnInscription.disabled = true;
  }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateMail(input){
  //Définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if(mailUser.match(emailRegex)){
      input.classList.add("is-valid");
      input.classList.remove("is-invalid"); 
      return true;
  }
  else{
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
  }
}

function validatePassword(input){
  //Définir mon regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser = input.value;
  if(passwordUser.match(passwordRegex)){
      input.classList.add("is-valid");
      input.classList.remove("is-invalid"); 
      return true;
  }
  else{
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
  }
}


function validateConfirmationPassword(inputPwd, inputConfirmPwd){
  if(inputPwd.value == inputConfirmPwd.value){
      inputConfirmPwd.classList.add("is-valid");
      inputConfirmPwd.classList.remove("is-invalid");
      return true;
  }
  else{
      inputConfirmPwd.classList.add("is-invalid");
      inputConfirmPwd.classList.remove("is-valid");
      return false;
  }
}


function userRegistration(){

  // Crée un nouvel objet FormData à partir du formulaire contenu dans la variable "formInscription"
  const dataForm = new FormData(registrationForm);

  // Crée un nouvel objet Headers pour définir les en-têtes de la requête HTTP
  const myHeaders = new Headers();

  // Ajoute l'en-tête "Content-Type" avec la valeur "application/json"
  myHeaders.append("Content-Type", "application/json");

  // Convertit les données du formulaire en une chaîne JSON
  const raw = JSON.stringify({
      "firstName":  dataForm.get("nom"),
      "lastName": dataForm.get("prenom"),
      "email": dataForm.get("email"),
      "password": dataForm.get("mdp")
  });

  // Configure les options de la requête HTTP
  const requestOptions = {
      // Méthode de la requête : "POST" pour envoyer des données au serveur
      method: "POST",
      // Définit les en-têtes de la requête en utilisant l'objet Headers créé précédemment
      headers: myHeaders,
      // Corps de la requête : les données JSON converties en chaîne
      body: raw,
      // Redirection à suivre en cas de besoin ("follow" suit automatiquement les redirections)
      redirect: "follow"
  };


  fetch(apiUrl + "registration", requestOptions)
    .then(response => {
      if(response.ok){
        return response.json();
      }
      else{
          alert("Erreur lors de l'inscription");
      }
    })
    .then(result => {
        alert("Bravo "+ dataForm.get("prenom") + ", vous êtes maintenant inscrit, vous pouvez vous connecter.");
        document.location.href="/signin";
    })
    .catch((error) => console.error(error));
}

