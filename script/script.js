
function loadCards() {

    fetch('../data/Cassinos.json').then(res => {
        if (!res.ok) {
            throw new Error('Erro ao carregar o arquivo JSON')
        }

        return res.json();
    }).then(data => {

        const cardContainer = document.getElementById('cardContainer')

        for (casa of data) {

            /*cards-element*/
            const cardElement = document.createElement('div')
            cardElement.classList.add('card-element')
            
                /*figure*/
                const figure = document.createElement('figure')
                figure.classList.add('card-figure')
                cardElement.appendChild(figure)
            
                    /* card-logo */
                    const imgLogo = document.createElement('img')
                    imgLogo.classList.add('card-logo')
                    imgLogo.src = `../src/Site/logos/${casa.logo}`
                    imgLogo.alt = casa.nome
                    figure.appendChild(imgLogo)

                /* rate-container */
                const rateContainer = document.createElement('div')
                rateContainer.classList.add('rate-container')
                cardElement.appendChild(rateContainer)

                    /* card-title */
                    const cardTitle = document.createElement('span')
                    cardTitle.classList.add('card-title')
                    cardTitle.textContent = 'Avaliações'
                    rateContainer.appendChild(cardTitle)

                     /* card-title */
                     const cardRate = document.createElement('p')
                     cardRate.classList.add('card-rate')
                     cardRate.textContent = casa.avaliacao
                     rateContainer.appendChild(cardRate)
                
                /* dep-min-container */                
                const depositoContainer = document.createElement('div')
                depositoContainer.classList.add('dep-min-container')
                cardElement.appendChild(depositoContainer)

                     /* card-title */
                     const cardTitle2 = document.createElement('span')
                     cardTitle2.classList.add('card-title')
                     cardTitle2.textContent = 'Deposito Mínimo'
                     depositoContainer.appendChild(cardTitle2)
 
                      /* card-title */
                      const cardText = document.createElement('p')
                      cardText.classList.add('card-text')
                      cardText.textContent = `${casa.deposito_min} BRL`
                      depositoContainer.appendChild(cardText)

                /* saq-min-container */                
                const saqueContainer = document.createElement('div')
                saqueContainer.classList.add('saq-min-container')
                cardElement.appendChild(saqueContainer)

                     /* card-title */
                     const cardTitle3 = document.createElement('span')
                     cardTitle3.classList.add('card-title')
                     cardTitle3.textContent = 'Saque Mínimo'
                     saqueContainer.appendChild(cardTitle3)
 
                      /* card-title */
                      const cardText2 = document.createElement('p')
                      cardText2.classList.add('card-text')
                      cardText2.textContent = `${casa.saque_min} BRL`
                      saqueContainer.appendChild(cardText2)

                /* play-button */    
                const buttonPlay = document.createElement('button')
                buttonPlay.classList.add('play-button')
                buttonPlay.textContent = 'QUERO JOGAR!'
                cardElement.appendChild(buttonPlay)
            
            cardContainer.appendChild(cardElement)
            console.log(casa.nome);
        }

    })
}


{/*                 <div class="card-element">
                    
                        <button class="play-button"></button>
                    </div> */}

loadCards()