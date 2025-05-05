
describe('Set Up and Confirm the Activation of the Everest Forms Plugin in WordPress', () => {

     // Case I: Navigate to the WordPress login page and input the required credentials.
        it('Verify user can logs, add, install, and activate the Everest Forms plugin', () => {
        cy.visit('http://localhost/wordpress/wp-login.php')
        

         // Assert URL is correct
        cy.url().should('include', '/wp-login.php')
        .should('eq', 'http://localhost/wordpress/wp-login.php')
        .should('contain', 'wordpress')

        /*cy.get('.wp-login-logo').should('be.visible') //Logo visible 
        .and('exist')*/ //logo exist



  
    /*it('Verify WordPress-Negative Test (URL)', () => {
        cy.visit('http://localhost/wordpress/wp-login.php');
      
        cy.url().should('not.include', '/wp-admin')
          .and('not.contain', 'invalid')
          .and('not.eq', 'http://localhost/wordpress/incorrect-url')*/

           // Enter username
        cy.get('#user_login').type('root') // Replace with actual username

        // Enter password
        cy.get('#user_pass').type('root123') // Replace with actual password

        // Click the login button
        cy.get('#wp-submit').click()

        
        // Assert dashboard header is visible
        cy.get("div.wrap h1").should('contain.text', 'Dashboard')
        

    // Case II: Go to Plugins
        cy.get('#menu-plugins').click()

    // Asser Plugins Text
        cy.get('.wp-heading-inline') // plugins text
            .should('be.visible')
            .and('contain.text', 'Plugins')

    // Case III: Proceed to Add New plugin.
        cy.get('.page-title-action')
            .should('contain.text', 'Add Plugin') // Correct expected text
            .click()

         // Assert page heading
        cy.get('h1.wp-heading-inline').should('contain.text', 'Add Plugins')

         
    // Case IV: Search for "Everest Forms"
        cy.get('#search-plugins').type('Everest Forms{enter}')

        /*cy.get("div.plugin-card.plugin-card-everest-forms")
        .should('contain.text', 'Everest Forms')*/


    // Assert logo Everest forms 
        cy.get("div.plugin-card.plugin-card-everest-forms img.plugin-icon")
            .should('be.visible') //logo visible

    // Case V: Install Everest Forms.
        cy.get("a[aria-label*='Install Everest Forms']")
            .should('be.visible')
            .and('contain.text', 'Install Now')

        cy.get("a[aria-label*='Install Everest Forms']")
            .should('be.visible')
            .click()

    // Case VI: Activate the Everest Forms plugin.
        cy.contains('Activate', { timeout: 20000 }).click()
        cy.get('#message', { timeout: 10000 })
            .should('be.visible')
            .and('contain.text', 'Plugin activated')

    // Case VII: Verify the presence of the &quot;Welcome to "Everest Forms" message.
        cy.get("a.toplevel_page_everest-forms div.wp-menu-name")
            .should('be.visible')
            .click()

    // Assert that "Welcome to Everest Forms!" visible message
        cy.contains('Welcome to Everest Forms!', { timeout: 10000 })
            .should('be.visible')
          

      })
    })
      
    




  