//used lecture code

// async function getNationality(name) {
//     const response = await fetch(`https://api.nationalize.io/?name=${name}`);
//     const data = await response.json();
//     console.log(data);
//   }
  
//   getNationality('efrain');

//used to see results without console log
  async function getNationality(name) {
    const response = await fetch(`https://api.nationalize.io/?name=${name}`);
    const data = await response.json();
  
    document.write(`<h1>Predictions for the name "${data.name}":</h1>`);
  
    data.country.forEach((country) => {
      document.write(`<p>Country: ${country.country_id}, Probability: ${country.probability.toFixed(2)}</p>`);
    });
  }
  
  // Call the function
  getNationality('efrain');
  getNationality('jaro');
