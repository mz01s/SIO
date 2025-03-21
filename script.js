// Sélectionner le formulaire dans le DOM
const form = document.querySelector('form');

// Sélectionner l'élément du message de confirmation par son ID
const confirmation = document.getElementById('confirmation');

// Ajouter un écouteur d'événement pour la soumission du formulaire
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Afficher le message de confirmation
    confirmation.style.display = 'block';
});
