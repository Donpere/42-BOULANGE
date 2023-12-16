// Constructeur pour la classe Vendeur
class Vendeur {
    constructor(id, nom, login, mdp, role) {
        this.id = id;
        this.nom = nom;
        this.login = login;
        this.mdp = mdp;
        this.role = role;
    }
}

// Création d'instances de Vendeur
const bob = new Vendeur(0, "Bob", "b.login", "boss@salut", "BOSS");
const julie = new Vendeur(1, "Julie", "j.login", "vend1@salut", "sale");
const noemie = new Vendeur(2, "Noémie", "n.login", "vend2@salut", "sale");
const alex = new Vendeur(3, "Alex", "a.login", "vend3@salut", "sale");

// Démarrez le compte à rebours après l'authentification réussie
let timeoutId;

function startCountdown() {
    timeoutId = setTimeout(() => {
        // Rediriger l'utilisateur vers la page d'authentification après une période d'inactivité
        window.location.href = "auth.html";
    }, 120000); // 120000 millisecondes équivalent à 2 minutes
}

// Réinitialiser le compte à rebours lorsqu'il y a une interaction de l'utilisateur
function resetCountdown() {
    clearTimeout(timeoutId);
    startCountdown();
}

// Fonction de vérification de l'authentification et redirection en fonction du rôle
function verifyAndRedirect(vendeur) {
    // Effectuer la vérification côté client (vous devriez effectuer cette vérification côté serveur dans un environnement de production)
    const foundVendeur = [bob, julie, noemie, alex].find(user => user.login === vendeur.login && user.mdp === vendeur.mdp);

    if (foundVendeur) {
        // Rediriger en fonction du rôle après l'authentification réussie
        if (foundVendeur.role === "BOSS") {
            window.location.href = "boulangerie-boss.html";
        } else if (foundVendeur.role === "sale") {
            window.location.href = "boulangerie.html";
        } else {
            // Rediriger vers une page par défaut si le rôle n'est pas reconnu
            window.location.href = "default.html";
        }
    } else {
        // Afficher un message d'erreur
        document.getElementById("errorMessage").innerText = "Nom d'utilisateur ou mot de passe incorrect.";
    }
}

// Appeler cette fonction lorsque l'utilisateur soumet le formulaire d'authentification
function handleLoginFormSubmission() {
    const loginInput = document.getElementById("loginInput").value;
    const passwordInput = document.getElementById("passwordInput").value;

    const vendeur = new Vendeur(0, "", loginInput, passwordInput, "");

    // Effectuer la vérification de l'authentification et redirection
    verifyAndRedirect(vendeur);
}

// Appeler startCountdown au chargement de la page pour démarrer le compte à rebours
startCountdown();
