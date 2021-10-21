const panels = document.querySelectorAll(".container > *"); //Pour chercher les enfants directs du sélecteur .container dans le doc html.
//document : api permettant de manipuler le HTML (le DOM : Document Object Model)
//L'arbre des noeuds (càd l'objet JavaScript qui représente la structure html) est stocké dans un super objet en JavaScript : window, qui représente l'onglet du navigateur. Window.document (la propriété document de window) correspond à la structure html.
// Tous les attributs html deviennent par le DOM des propriétés JavaScript
//Rq : on peut accéder à ces propriétés dans l'outil dev de chrome en sélectionnant l'élément html puis en lui faisant référence avec $0 dans la console ($1 pour l'enfant etc.)

panels[0].addEventListener('click', function() { //permet de créer un évènement au click. Rq : la fonction n'a pas besoin de nom car elle ne sera pas rappelée, ni utilisée en récursion.
    console.log("yeah");
})
// .addEventListener n'écrase pas les autres évènements au click, contrairement à .onclick 
//pour voir les propriétés d'un objet (ex window.document) on peut faire console.dir(window.document)
