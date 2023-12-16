// Démarrez le compte à rebours après l'authentification réussie
let timeoutId;

function startCountdown() {
  timeoutId = setTimeout(() => {
    // Rediriger l'utilisateur vers la page d'authentification
    window.location.href = "auth.html";
  }, 120000); // 120000 millisecondes équivalent à 2 minutes
}

// Réinitialiser le compte à rebours lorsqu'il y a une interaction de l'utilisateur
function resetCountdown() {
  clearTimeout(timeoutId);
  startCountdown();
}

