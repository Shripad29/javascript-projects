const accessKey = "Qno7pBqQo0ZXjuviKFUmuQ2L-7Box9LthIjhq-2t_l0";
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const searchForm = document.querySelector("form");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
const imagesContainer = document.querySelector(".images_container");
const searchInput = document.querySelector(".search_input");

let page = 1;

// function to fetch images using unsplash API
const fetchImages = async (query, pageNo) => {
  try {
    if (pageNo == 1) {
      imagesContainer.innerHTML = "";
    }
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (data.results.length > 0) {
      data.results.forEach((photo) => {
        // creating image div
        const imageEl = document.createElement("div");
        imageEl.classList.add("imageDiv");
        imageEl.innerHTML = `<img src="${photo.urls.regular}" />`;

        //creating overlay
        const overlayEl = document.createElement("div");
        overlayEl.classList.add("overlay");

        //creating overlay text

        const overlayText = document.createElement("h3");
        overlayText.innerText = `${photo.alt_description}`;

        overlayEl.appendChild(overlayText);

        imageEl.appendChild(overlayEl);
        imagesContainer.appendChild(imageEl);
      });

      if (data.total_pages === pageNo) {
        loadMoreBtn.style.display = "none";
      } else {
        loadMoreBtn.style.display = "block";
      }
    } else {
      imagesContainer.innerHTML = `<h2>No image found.</h2>`;
      if(loadMoreBtn.style.display === 'block'){
        loadMoreBtn.style.display === 'none';}
    }
  } catch (error) {
     imagesContainer.innerHTML = `<h2>Failed to fetch imagesContainer. Please try again later.</h2>`
  }
};
// adding Event Listener to search form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = searchInput.value.trim();
  if (inputText !== "") {
    page = 1;
    fetchImages(inputText, page);
  } else {
    imagesContainer.innerHTML = `<h2>Please enter a search query.</h2>`;
    if(loadMoreBtn.style.display === 'block'){
        loadMoreBtn.style.display === 'none';
    }
  }
});

// adding Event Listener to load more button to fetch more images form

loadMoreBtn.addEventListener("click", () => {
  fetchImages(searchInput.value.trim(), ++page);
});
