//btn section//

const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.categories));
};
loadData();
const displayData = (plants) => {
  // 1.Get the parent and emty it
  const catagoriesDiv = document.getElementById("catagories-container");
  catagoriesDiv.innerHTML = "";

  // 2.loop the data
  plants.forEach((plant) => {
    // 1.create an element
    const btnCatagories = document.createElement("div");

    // 2.set innerhtml

    btnCatagories.innerHTML = `<button
                  class="btn btn-soft btn-success py-2 hover:bg-[#15803D] text-black w-full hover:text-white"
                >
                  ${plant.category_name}
                  </button>
    `;

    // 3.appen the child
    catagoriesDiv.appendChild(btnCatagories);
  });
};

//all plant section//
const loadAllplants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((response) => response.json())
    .then((data) => displayAllplants(data.plants));
};

const displayAllplants = (allplants) => {
  // 1.Get the container and emty It
  const allplantcontainer = document.getElementById("plants-cards");
  allplantcontainer.innerHTML = "";
  // 2.looping the element
  allplants.forEach((plant) => {
    // 1.create an Element
    const cards = document.createElement("div");
    // 2.set inner HTML
    cards.innerHTML = `
      <div class="card bg-base-100  max-w-80 shadow-md">
              <figure>
                <img class="max-h-[200px] w-full"
                  src="${plant.image}"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">${plant.name}</h2>
                <p class="text-gray-700 text-xs">
                  ${plant.description}
                </p>

                <div class="flex justify-between items-center">
                  <button
                    class="bg-[#DCFCE7] rounded-full py-1 px-3 text-[#15803D]"
                  >
                    ${plant.category}
                  </button>

                  <h1 class="font-bold">৳<span> ${plant.price}</span></h1>
                </div>

                <div class="card-actions justify-end">
                  <button
                    class="btn btn-primary w-full rounded-full bg-[#15803D]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
    `;

    // 3.appen child
    allplantcontainer.appendChild(cards);
  });
};
loadAllplants();
