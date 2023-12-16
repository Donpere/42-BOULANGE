// Variable pour stocker l'ID retourné par setTimeout
let timeoutId;

// setTimout : déclenche une fonction ou évalue une expression
// après un délai en millisecondes
// syntaxe : setTimeout(function, delay);

function startCountdown() {
    timeoutId = setTimeout(() => {
        // Rediriger l'utilisateur vers la page d'authentification après une période d'inactivité
        window.location.href = "../auth.html";
    }, 10000); // 10000 millisecondes équivalent à 10 secondes
}

// Réinitialiser le compte à rebours lorsqu'il y a une interaction de l'utilisateur
function resetCountdown() {
    // fonction clearTimeout permet d'arrêter le setTimeout
    // grâce à l'ID que l'on a stocké
    clearTimeout(timeoutId);
    startCountdown();
}

// Appeler startCountdown au chargement de la page pour démarrer le compte à rebours
document.addEventListener("DOMContentLoaded", function() {
    startCountdown();
});

// Ajoutez un gestionnaire d'événements pour n'importe quel clic sur la page
// syntaxe addEventListener : 
// "element".adEventListener("type de l'evenement", fonction appelée)
// il existe une méthode removeEventListener pour arrêter le listener que l'on peut par exemple
// intégrer dans une boucle pour limiter le nombre de click (ou autre évenement) à surveiller
document.addEventListener("click", handleInteraction);

// Ajoutez un gestionnaire d'événements pour le mouvement de la souris
document.addEventListener("mousemove", handleInteraction);

// Fonction gérant les interactions (clics et mouvements de souris)
function handleInteraction() {
    // Réinitialiser le compte à rebours lors de n'importe quelle interaction
    resetCountdown();
}
