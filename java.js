let chapters = {
    reveil: {
        titre: 'reveil',
        boutons : [ 
            {titre: '', 'destination': ''} 
        ]
    },
    dejeuner: {
        titre: 'moyen de transport',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    transport: {
        titre: 'moyen de transport',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    continuer: {
        titre: 'continuer?',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    appel: {
        titre: 'vous recevez un appelle',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    einstein: {
        titre: 'bravo',
        boutons : [ 
            {titre: '', 'destination': ''} 
        ]
    },
    enfant: {
        titre: 'tout mes felicitations',
        boutons : [ 
            {titre: '', 'destination': ''} 
        ]
    },
    voiture: {
        titre: 'rencontre innatendue',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    cave: {
        titre: 'Vous etes mort',
        boutons : [ 
            {titre: '', 'destination': ''} 
        ]
    },
    velo: {
        titre; 'deuxieme rencontre innatendue',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    pistolet: {
        titre: 'Vous etes mort',
        boutons : [ 
            {titre: '', 'destination': ''} 
        ]
    },
    transport2: {
        titre: 'moyen de transport',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    continuer2: {
        titre: 'continuer?',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    retard: {
        titre: 'Vous arriver en retard',
        boutons : [ 
            {titre: '', 'destination': ''} 
        ]
    },
    vitesse: {
        titre: 'a quelle vitesse',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    lenteur:{
        titre: 'vous etes trop lent',
        boutons : [ 
            {titre: '', 'destination': ''} 
        ]
    },
    manger: {
        titre: 'avez vous manger?',
        boutons : [ 
            {titre: '', 'destination': ''}, 
          
            {titre: '', 'destination': ''} 
        ]
    },
    therock: {
        titre: 'pourquoi mentez vous?',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Fmemes%2Fthe-rocks-eyebrow-raise&psig=AOvVaw2LTASFVz6CHVom-1cyPBiU&ust=1695871473788000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiOstfryYEDFQAAAAAdAAAAABAE',
        boutons : [ 
            {titre: '', 'destination': ''} 
        ]  
    },
    pasdenergie: {
        titre: 'vous avez pas denergie',
        boutons : [ 
            {titre: '', 'destination': ''} 
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

goToChapter('intro');