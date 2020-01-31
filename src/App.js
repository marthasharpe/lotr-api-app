import React, {useState, useEffect} from 'react';

function App() {

  const [quotes, setQuotes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    fetch("https://the-one-api.herokuapp.com/v1/character/5cd99d4bde30eff6ebccfea0/quote", {
      method: 'GET',  
      headers: {
        'Authorization': 'Bearer TdMVtc1gvFhNa6jM4ELm'
      }
    })
      .then(res => res.json())
      .then(json => {
        setIsLoaded(true);
        setQuotes(json.docs.filter(
          quote => quote.dialog.length > 20 && quote.dialog.length < 100
        ))
      })
      .catch(error => console.log(error));
    }, []);

  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        {quotes.map(quote => (
          <p key={quote._id}>{quote.dialog}</p>
        ))}
      </div>
    );
  }
}

export default App;
