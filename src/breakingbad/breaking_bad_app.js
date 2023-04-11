/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {
    try {
      const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/5');
      const data = await res.json();
      return data[0]; // retorna la cita
    } catch (error) {
      console.error(error);
      return null; // retorna null en caso de error
    }
  }
  
  /**
   * 
   * @param {HTMLDivElement} element 
   */
  export const BreakingBad = async(element) => {
  
      document.querySelector('#app-title').innerHTML = 'BreakingBad App!!!'
    //   element.innerHTML = 'Tenemos data';
  
      const quoteLabel = document.createElement('blockquote');
      const authorLabel = document.createElement('h3');
      const nextQuoteButton = document.createElement('button');
      nextQuoteButton.innerHTML = 'Next Quote';
      
      const renderQuote = (data) => {
          quoteLabel.innerHTML = data.quote;
          authorLabel.innerHTML = data.author;
          element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
      }

      // Añadir listener imp!!!
      nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...'
        const quote = await fetchQuote();
        renderQuote(quote);
      })
      
      const quoteData = await fetchQuote();
      renderQuote(quoteData);
  
  }
  
