console.log("data");
const apiUrl =
  "https://main--sample-project--karvannanpa.hlx.page/project.json";
const dataContainer = document.querySelector(".magazine.block");

const fetchDataAndAppend = () => {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createMagazine(data);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

const createMagazine = (response) => {
  let data = response.data;
  data.forEach((item) => {
    console.log(item);
    let itemElement = `<div>
    <div>
    <img  src="${item.image}">
    </div>
    <div>
      <h2 id="wknd-adventures">${item.title}</h2>
      <p>${item.text}.</p>
      <p class="button-container"><a  class="button primary">View Trips</a></p>
    </div>
  </div>`;

    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(itemElement, "text/html");
    dataContainer.appendChild(parsedHTML.body.firstChild);
  });
};

fetchDataAndAppend();