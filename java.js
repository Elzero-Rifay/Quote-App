function getQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data[0].quoteText);

      for (let quoteData of data.data) {
        const addList = document.createElement("li");
        addList.innerHTML = quoteData.quoteText;
        document.querySelector("li").appendChild(addList);
      }
    });
}

document.getElementById("btn").addEventListener("click", getQuote);
