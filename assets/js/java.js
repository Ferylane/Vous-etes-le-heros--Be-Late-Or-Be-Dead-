const chapters = {
    reveil: {
        titre: 'Réveil',
        description:'Vous vous réveillez un beau matin, mais vous réalisez que vous avez bien dormi, ce qui n\'est pas normal un jour d\'école. Ensuite, vous regardez l\'heure et remarquez que vous êtes en retard.',
        image: './assets/images/reveil.jpg',
        boutons : [ 
            {titre: 'Continuer', destination: 'dejeuner'} 
        ]
    },
    dejeuner: {
        titre: 'Déjeuner',
        description: 'Vous descendez les escaliers et à votre surprise, votre mère ne vous a pas préparé de déjeuner. Elle a reçu un appel de la NASA pour partir vers le soleil. Allez-vous vous préparer un déjeuner ?',
        image: './assets/images/dejeuner.jpg',
        boutons : [ 
            {titre: 'Oui', destination: 'voiture'}, 
          
            {titre: 'Non', destination: 'transport'} 
        ]
    },
    transport: {
        titre: 'Moyen de transport',
        description: 'Vous préparez vos effets scolaires et vous vous demandez quel moyen de transport choisir pour aller à l\'école.',
        image: './assets/images/autobus_ou_marcher.jpg',
        boutons : [ 
            {titre: 'Marcher', destination: 'vitesse'}, 
          
            {titre: 'Autobus', destination: 'continuer'} 
        ]
    },
    continuer: {
        titre: 'Continuer?',
        description: 'L\'autobus arrive dans 15 minutes, mais vous pourriez arriver plus vite en marchant. Cependant, c\'est un gros risque à prendre.',
        image: './assets/images/continuer.jpeg',
        boutons : [ 
            {titre: 'Marcher a la place', destination: 'vitesse'}, 
          
            {titre: 'Oui', destination: 'appel'} 
        ]
    },
    appel: {
        titre: 'Vous recevez un appel',
        description: 'Vous êtes arrivé à l\'école quelques secondes avant que les portes se ferment. Soudainement, vous ressentez une vibration dans votre poche. Votre ami vous appelle. Que faites-vous ?',
        image: './assets/images/appel.jpeg',
        boutons : [ 
            {titre: 'Répondre', destination: 'enfant'}, 
          
            {titre: 'Pas répondre', destination: 'einstein'} 
        ]
    },
    einstein: {
        titre: 'Bravo',
        description: 'Vous n\'avez pas répondu, ce qui vous a permis de franchir les portes de l\'école. Grâce à cette action, dans le futur, vous devenez le prochain Albert Einstein de notre génération',
        image: './assets/images/einstein.jpg',
        boutons : [ 
            {titre: 'Recommencer', destination: 'reveil'} 
        ]
    },
    enfant: {
        titre: 'Toute mes félicitations',
        description: 'Vous avez répondu à l\'appel et votre ami vous a déclaré sa flamme. Ensuite, vous avez eu des enfants et avez vécu heureux jusqu\'à la fin de vos jours.',
        image: './assets/images/enfants.jpg',
        boutons : [ 
            {titre: 'Recommencer', destination: 'reveil'} 
        ]
    },
    voiture: {
        titre: 'Rencontre innatendue',
        description: 'Vous avez bien mangé, vous êtes en pleine forme. Vous sortez de la maison et voyez un vieux monsieur qui cherche ses clés de voiture mais ne les trouve pas. Allez-vous l\'aider ?',
        image: './assets/images/voiture.jpg',
        boutons : [ 
            {titre: 'Oui', destination: 'cave'}, 
          
            {titre: 'Non', destination: 'velo'} 
        ]
    },
    cave: {
        titre: 'Vous êtes mort',
        description: 'Vous retrouvez ses clés et pour vous remercier, il vous dit qu\'il va vous amener à l\'école. Cependant, il vous conduit dans une cave où il mène des expériences sur des humains et vous finissez par mourir.',
        image: './assets/images/cave.jpg',
        boutons : [ 
            {titre: 'Recommencer', destination: 'reveil'} 
        ]
    },
    velo: {
        titre: 'Rencontre innatendue 2',
        description: 'Vous marchez un peu plus loin et voyez une petite fille sur un vélo. Décidez-vous de le voler pour aller plus vite à l\'école ?',
        image: './assets/images/velo.jpg',
        boutons : [ 
            {titre: 'Oui', destination: 'pistolet'}, 
          
            {titre: 'Non', destination: 'transport2'} 
        ]
    },
    pistolet: {
        titre: 'Vous êtes mort',
        description: 'La petite fille était une espionne russe. Elle sort un pistolet silencieux et vous tire une balle dans la tête, puis nettoie la scène de crime à la perfection',
        image: './assets/images/pistolet.jpg',
        boutons : [ 
            {titre: 'Recommencer', destination: 'reveil'} 
        ]
    },
    transport2: {
        titre: 'Moyen de transport',
        description: 'Après toutes ses aventures, vous vous interrogez sur le choix du moyen de transport pour aller à l\'école.',
        image: './assets/images/autobus_ou_marcher.jpg',
        boutons : [ 
            {titre: 'Autobus', destination: 'continuer2'}, 
          
            {titre: 'Marche', destination: 'lenteur'} 
        ]
    },
    continuer2: {
        titre: 'Continuer?',
        description: 'L\'autobus arrive dans 10 minutes, mais vous pourriez arriver plus vite en marchant. Cependant, c\'est un gros risque à prendre compte tenu du temps qu\'il vous reste.',
        image: './assets/images/continuer.jpeg',
        boutons : [ 
            {titre: 'Oui', destination: 'retard'}, 
          
            {titre: 'Marcher à la place', destination: 'lenteur'} 
        ]
    },
    retard: {
        titre: 'Vous arriver en retard',
        description: 'Vous arrivez en retard, les portes des classes se ferment. Les portes des classes restent ouvertes 20 minutes après le début du cours, mais vous êtes arrivé après.',
        image: './assets/images/retard.webp',
        boutons : [ 
            {titre: 'Recommencer', destination: 'reveil'} 
        ]
    },
    vitesse: {
        titre: 'À quelle vitesse',
        description: 'Vous avez décidé de marcher, mais à quelle vitesse ?',
        image: './assets/images/vitesse.jpg',
        boutons : [ 
            {titre: 'Marcher', destination: 'lenteur'}, 
          
            {titre: 'Courir', destination: 'manger'} 
        ]
    },
    lenteur:{
        titre: 'Vous êtes trop lent',
        description: 'Vous êtes trop lent, vous arrivez en retard, les portes des classes se sont fermées. Les portes des classes restent ouvertes 20 minutes après le début du cours, mais vous êtes arrivé après.',
        image: './assets/images/retard.webp',
        boutons : [ 
            {titre: 'Recommencer', destination: 'reveil'} 
        ]
    },
    manger: {
        titre: 'Avez vous manger?',
        description: 'Pour courir, il faut avoir de l\'énergie.',
        image: './assets/images/manger.png',
        boutons : [ 
            {titre: 'Non', destination: 'pasdenergie'}, 
          
            {titre: 'Oui', destination: 'therock'} 
        ]
    },
    therock: {
        titre: 'Pourquoi mentez vous?',
        description: 'Vous n\'avez pas déjeuné ! Ne faites pas semblant.',
        image: './assets/images/therock.jpg',
        boutons : [ 
            {titre: 'Continuer', destination: 'pasdenergie'} 
        ]  
    },
    pasdenergie: {
        titre: 'Vous avez pas denergie',
        description: 'Vous n\'avez pas mangé, ce qui fait que vous n\'avez aucune énergie pour courir, donc vous arrivez en retard.',
        image: './assets/images/retard.webp',
        boutons : [ 
            {titre: 'Recommencer', destination: 'reveil'} 
        ]
    },
     
};
const titreN = document.querySelector('.titre');
const textN = document.querySelector('.text');
const imgN = document.querySelector('.img');

function goToChapter(chapter) {
    if (chapters[chapter] !== undefined){ 
        titreN.textContent = (chapters[chapter].titre);
        textN.textContent = (chapters[chapter].description);
        imgN.src = (chapters[chapter].image);
        console.log(`${chapters[chapter].titre} \n ${chapters[chapter].description}`);
        // Sélectionne le div .boutons 

const boutons = document.querySelector('.boutons'); 
// Supprime tous les boutons enfants du div .boutons 
while (boutons.firstChild) { 
  boutons.removeChild(boutons.firstChild); 
} 
// Pour chaque boutons ... 
for (let i = 0; i < chapters[chapter].boutons.length; i++) { 
  // on crée un nouveau bouton 
  const nouveauBtn = document.createElement('button'); 
  // on applique un libellé au bouton 
  nouveauBtn.textContent = chapters[chapter].boutons[i].titre; 
  // on appele goToChapter lorsqu'on clique le bouton 
  nouveauBtn.addEventListener('click', () => { 
    // la destination, c'est la destination du bouton! 
    goToChapter(chapters[chapter].boutons[i].destination) 
  }); 
  // enfin, on ajoute le bouton dans la page Web (dans le DOM) 
  boutons.appendChild(nouveauBtn); 
}; 
    }
    else {
        console.log('Mauvaise clé.');
    };
};

goToChapter('reveil');