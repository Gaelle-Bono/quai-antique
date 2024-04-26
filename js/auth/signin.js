const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");

const btnSignin = document.getElementById("btnSignin");


btnSignin.addEventListener("click", checkCredentials);


function checkCredentials(){

    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    if (mailInput.value == "test@mail.fr" && passwordInput.value == "123") {
        mailInput.classList.add("is-valid");
        passwordInput.classList.add("is-valid");

        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        //placer ce token en cookie
        setToken(token);
        
        //role admin
        setCookie(roleCookieName, "admin", 7);

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

