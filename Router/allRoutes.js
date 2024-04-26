import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/galerie", "La galerie", "/pages/galerie.html",[]),
    new Route("/allbookings", "Mes réservations", "/pages/bookings/allbookings.html", ["client"]),
    new Route("/booking", "Ma réservation", "/pages/bookings/booking.html", ["client"]),   
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html",["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html",["client", "admin"]),
    new Route("/editPassword", "Changement de mon mot de passe", "/pages/auth/editPassword.html",["client", "admin"]),
];
    
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";


