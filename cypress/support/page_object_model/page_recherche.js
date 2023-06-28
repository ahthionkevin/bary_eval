class PageRecherche{

    /**
     * @param {String} lieu 
     */
    saisir_lieu_depart(lieu){
        cy.get('#pickupAddressAutofill').type(lieu, { force: true })
        cy.wait(500)
    }

    choisir_lieu_depart(){
        cy.get('.pickupAddressAutofill').find('.pac-item').first().click({ force: true })
    }

    /**
     * @param {String} lieu 
     */
    saisir_lieu_arrive(lieu){
        cy.get('#deliveryAddressAutofill').type(lieu, { force: true })
        cy.wait(500)
    }

    choisir_lieu_arrive(){
        cy.get('.deliveryAddressAutofill').find('.pac-item').first().click({ force: true })
    }

    cliquer_sur_le_bouton_recherche(){
        cy.get('[id-cypress="search-btn"]').click({ force: true })
    }

    choisir_type_marchandise(type){
        cy.contains('label',type).click()
        cy.wait(500)
    }

    cliquer_sur_le_bouton_ajouter(){
        cy.contains('button','Ajouter').click()
    }

    saisir_dimension(L,l,h,p){
        cy.contains('label','Longueur').prev().type(L)
        cy.contains('label','Largeur').prev().type(l)
        cy.contains('label','Hauteur').prev().type(h)
        cy.contains('label','Poids').prev().type(p)
    }

    saisir_quantite(qte){
        cy.contains('label','Quantité').prev().type(qte)
    }

    verifier_existence_au_moins_estimation(nbre){
        cy.wait(500)
        cy.get('[id-cypress="offer-estimation"]').should('have.length.at.least',nbre)
    }
}

export const pageRecherche = new PageRecherche()
