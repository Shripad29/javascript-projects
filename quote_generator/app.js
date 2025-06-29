const quote1 = document.getElementById("quote");
const author1 = document.getElementById("author");
const apiKey = "AZY0bRJuUTKMP8ytcwaVMw==Eoe4w3nXoau5JQMI";
const api_url = "https://api.api-ninjas.com/v1/quotes";

async function getQuote(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    quote1.innerHTML = `"${data[0].quote}"`; // Access the first quote in the response array
    author1.innerHTML = `- ${data[0].author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote1.innerHTML+"---- by " + author1.innerHTML, "Tweet Window", "width=600, height=300");
}
