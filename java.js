let chapters = {
    reveil: {
        titre: 'reveil',
        description: 'Vous vous réveillez un beau matin, mais vous réalisez que vous avez bien dormi, ce qui n\'est pas normal un jour d\'école. Ensuite, vous regardez l\'heure et remarquez que vous êtes en retard.',
        image: '',
        boutons : [ 
            {titre: 'continuer', 'destination': 'dejeuner'} 
        ]
    },
    dejeuner: {
        titre: 'dejeuner',
        description: 'Vous descendez les escaliers et à votre surprise, votre mère ne vous a pas préparé de déjeuner. Elle a reçu un appel de la NASA pour partir vers le soleil. Allez-vous vous préparer un déjeuner ?',
        image: '',
        boutons : [ 
            {titre: 'Oui', 'destination': 'voiture'}, 
          
            {titre: 'Non', 'destination': 'transport'} 
        ]
    },
    transport: {
        titre: 'moyen de transport',
        description: 'Vous préparez vos effets scolaires et vous vous demandez quel moyen de transport choisir pour aller à l\'école.',
        image: '',
        boutons : [ 
            {titre: 'marcher', 'destination': 'vitesse'}, 
          
            {titre: 'autobus', 'destination': 'continuer'} 
        ]
    },
    continuer: {
        titre: 'continuer?',
        description: 'L\'autobus arrive dans 15 minutes, mais vous pourriez arriver plus vite en marchant. Cependant, c\'est un gros risque à prendre.',
        image: '',
        boutons : [ 
            {titre: 'marcher a la place', 'destination': 'vitesse'}, 
          
            {titre: 'oui', 'destination': 'appel'} 
        ]
    },
    appel: {
        titre: 'vous recevez un appelle',
        description: 'Vous êtes arrivé à l\'école quelques secondes avant que les portes se ferment. Soudainement, vous ressentez une vibration dans votre poche. Votre ami vous appelle. Que faites-vous ?',
        image: '',
        boutons : [ 
            {titre: 'reondre', 'destination': 'enfants'}, 
          
            {titre: 'pas repondre', 'destination': 'einstein'} 
        ]
    },
    einstein: {
        titre: 'bravo',
        description: 'Vous n\'avez pas répondu, ce qui vous a permis de franchir les portes de l\'école. Grâce à cette action, dans le futur, vous devenez le prochain Albert Einstein de notre génération',
        image: '',
        boutons : [ 
            {titre: 'recommencer', 'destination': 'reveil'} 
        ]
    },
    enfants: {
        titre: 'Tout mes felicitations',
        description: 'Vous avez répondu à l\'appel et votre ami vous a déclaré sa flamme. Ensuite, vous avez eu des enfants et avez vécu heureux jusqu\'à la fin de vos jours.',
        image: '',
        boutons : [ 
            {titre: 'recommencer', 'destination': 'reveil'} 
        ]
    },
    voiture: {
        titre: 'rencontre innatendue',
        description: 'Vous avez bien mangé, vous êtes en pleine forme. Vous sortez de la maison et voyez un vieux monsieur qui cherche ses clés de voiture mais ne les trouve pas. Allez-vous l\'aider ?',
        image: '',
        boutons : [ 
            {titre: 'Oui', 'destination': 'cave'}, 
          
            {titre: 'Non', 'destination': 'velo'} 
        ]
    },
    cave: {
        titre: 'Vous etes mort',
        description: 'Vous retrouvez ses clés et pour vous remercier, il vous dit qu\'il va vous amener à l\'école. Cependant, il vous conduit dans une cave où il mène des expériences sur des humains et vous finissez par mourir.',
        image: '',
        boutons : [ 
            {titre: 'recommencer', 'destination': 'reveil'} 
        ]
    },
    velo: {
        titre: 'deuxieme rencontre innatendue',
        description: 'Vous marchez un peu plus loin et voyez une petite fille sur un vélo. Décidez-vous de le voler pour aller plus vite à l\'école ?',
        image: '',
        boutons : [ 
            {titre: 'Oui', 'destination': 'pistolet'}, 
          
            {titre: 'Non', 'destination': 'transport2'} 
        ]
    },
    pistolet: {
        titre: 'Vous etes mort',
        description: 'La petite fille était une espionne russe. Elle sort un pistolet silencieux et vous tire une balle dans la tête, puis nettoie la scène de crime à la perfection',
        image: '',
        boutons : [ 
            {titre: 'recommencer', 'destination': 'reveil'} 
        ]
    },
    transport2: {
        titre: 'moyen de transport',
        description: 'Après toutes ses aventures, vous vous interrogez sur le choix du moyen de transport pour aller à l\'école.',
        image: '',
        boutons : [ 
            {titre: 'autobus', 'destination': 'continuer2'}, 
          
            {titre: 'marche', 'destination': 'lenteur'} 
        ]
    },
    continuer2: {
        titre: 'continuer?',
        description: 'L\'autobus arrive dans 10 minutes, mais vous pourriez arriver plus vite en marchant. Cependant, c\'est un gros risque à prendre compte tenu du temps qu\'il vous reste.',
        image: '',
        boutons : [ 
            {titre: 'oui', 'destination': 'retard'}, 
          
            {titre: 'marcher à la place', 'destination': 'lenteur'} 
        ]
    },
    retard: {
        titre: 'Vous arriver en retard',
        description: 'Vous arrivez en retard, les portes des classes se ferment. Les portes des classes restent ouvertes 20 minutes après le début du cours, mais vous êtes arrivé après.',
        image: '',
        boutons : [ 
            {titre: 'recommencer', 'destination': 'reveil'} 
        ]
    },
    vitesse: {
        titre: 'a quelle vitesse',
        description: 'Vous avez décidé de marcher, mais à quelle vitesse ?',
        image: '',
        boutons : [ 
            {titre: 'marcher', 'destination': 'lenteur'}, 
          
            {titre: 'courir', 'destination': 'manger'} 
        ]
    },
    lenteur:{
        titre: 'vous etes trop lent',
        description: 'Vous êtes trop lent, vous arrivez en retard, les portes des classes se sont fermées. Les portes des classes restent ouvertes 20 minutes après le début du cours, mais vous êtes arrivé après.',
        image: '',
        boutons : [ 
            {titre: 'recommencer', 'destination': 'reveil'} 
        ]
    },
    manger: {
        titre: 'avez vous manger?',
        description: 'Pour courir, il faut avoir de l\'énergie.',
        image: '',
        boutons : [ 
            {titre: 'non', 'destination': 'pasdenergie'}, 
          
            {titre: 'oui', 'destination': 'therock'} 
        ]
    },
    therock: {
        titre: 'pourquoi mentez vous?',
        description: 'Vous n\'avez pas déjeuné ! Ne faites pas semblant.',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Fmemes%2Fthe-rocks-eyebrow-raise&psig=AOvVaw2LTASFVz6CHVom-1cyPBiU&ust=1695871473788000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiOstfryYEDFQAAAAAdAAAAABAE',
        boutons : [ 
            {titre: 'continuer', 'destination': 'pasdenergie'} 
        ]  
    },
    pasdenergie: {
        titre: 'vous avez pas denergie',
        description: 'Vous n\'avez pas mangé, ce qui fait que vous n\'avez aucune énergie pour courir, donc vous arrivez en retard.',
        image: '',
        boutons : [ 
            {titre: 'recommencer', 'destination': 'reveil'} 
        ]
    },
     
};

function goToChapter(chapter) {
    if (chapters[chapter] !== undefined){
        console.log(`$(chapters[chapter].titre) \n $(chapters[chapter].description)`);
        for (let i in chapters[chapter].boutons) {
            console.log($(chapters[chapter].boutons[i].titre) + 'Clé :' +  $(chapters[chapter].boutons[i].destination));
        };
    }
    else {
        console.log('Mauvaise clé.');
    } ;
};

goToChapter('reveil');