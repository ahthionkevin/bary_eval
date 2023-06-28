const { pageRecherche } = require("../support/page_object_model/page_recherche")

describe('bary spec', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })

  it('Recherche Transporteurs', () => {

    cy.fixture('jdd.json').then( jdd => {
  

      const { lieuDepart, lieuArrive, typeMarchandise, quantite } = jdd
      const { longueur, largeur, hauteur, poids } = jdd.dimension
      /**
       *  Selon moi, la specification est trop large car Aeroport de Bordeaux ou de Paris, il y a plusieurs possibilités.
       */
      pageRecherche.saisir_lieu_depart(lieuDepart)
      pageRecherche.choisir_lieu_depart()
  
      pageRecherche.saisir_lieu_arrive(lieuArrive)
      pageRecherche.choisir_lieu_arrive()
  
      pageRecherche.cliquer_sur_le_bouton_recherche()
  
      pageRecherche.choisir_type_marchandise(typeMarchandise)
      pageRecherche.cliquer_sur_le_bouton_ajouter()

      pageRecherche.saisir_dimension(longueur,largeur,hauteur,poids)
      pageRecherche.saisir_quantite(quantite)

      pageRecherche.cliquer_sur_le_bouton_ajouter()

      pageRecherche.verifier_existence_au_moins_estimation(1)
    })

  })

  for(let i=0; i<3;i++){
    it('Recherche Transporteurs - V2 ma façon de voir les choses', () => {

      cy.fixture('jdd.json').then( jdd => {
    
  
        const { lieuDepart, lieuArrive, typeMarchandise, quantite } = jdd
        const { longueur, largeur, hauteur, poids } = jdd.dimension
        /**
         *  Selon moi, la specification est trop large car Aeroport de Bordeaux ou de Paris, il y a plusieurs possibilités.
         */
        pageRecherche.saisir_lieu_depart(lieuDepart)
        pageRecherche.choisir_lieu_depart_2()
    
        pageRecherche.saisir_lieu_arrive(lieuArrive)
        pageRecherche.choisir_lieu_arrive_2()
    
        pageRecherche.cliquer_sur_le_bouton_recherche()
    
        pageRecherche.choisir_type_marchandise(typeMarchandise)
        pageRecherche.cliquer_sur_le_bouton_ajouter()
  
        pageRecherche.saisir_dimension(longueur,largeur,hauteur,poids)
        pageRecherche.saisir_quantite(quantite)
  
        pageRecherche.cliquer_sur_le_bouton_ajouter()
  
        pageRecherche.verifier_existence_au_moins_estimation(1)
      })
  
    })
  }

})