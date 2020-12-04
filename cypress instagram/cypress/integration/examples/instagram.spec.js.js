import username from '../../../cypress.json'
import password from '../../../cypress.json'

    describe('Instagram robot', () => {

      const randomWaitTime = Math.floor((Math.random() * 10) + 1000);
      const password = Cypress.env('password');
      const username = Cypress.env('username');
  
      it('Visits instagram.com', () => {
        cy.wait(randomWaitTime);
        cy.clearCookies();
        cy.wait(randomWaitTime);
        cy.visit('https://www.instagram.com/accounts/login/?hl=en');
      });
  
     it('logs in', () => {
      cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type(username);
        cy.wait(randomWaitTime);
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type(password);
        cy.wait(randomWaitTime);
        cy.get('.kEKum > :nth-child(3)').click()
        cy.get('.cmbtv > .sqdOP').click()
        cy.get('.HoLwm').click()
      })
    });

  //   describe('', () => {

  //     it('', () => {
  //       var random = Math.floor(Math.random() * (+max - +min)) + +min;
  //       var min = 10000; // min 10 seconds
  //       var max = 20000; // max 20 seconds
  //       var firstLike= cy.get('section.ltpMr.Slqrh > span.fr66n > button > div > span > svg[aria-label="Like"]').first();
  //       // var firstLike= cy.get('section.ltpMr.Slqrh > span.fr66n > button > div > span > svg[aria-label="Like"]').second();
  //       // var firstLike= cy.get('section.ltpMr.Slqrh > span.fr66n > button > div > span > svg[aria-label="Like"]').last();
  //     if(firstLike){
  //       firstLike.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  //       var closestElement = firstLike.closest('button');
  //         console.log('clicked...\n');
  //         closestElement.click();
  //     }
  //     console.log('waiting for '+random+' miliseconds\n');
      
  //   })
  // })

