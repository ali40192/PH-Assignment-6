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

    btnCatagories.innerHTML = `<button onclick="plantCatagories(${plant.id})"
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
                <h2 onclick="loadModaldat(${plant.id})"  class="card-title">${plant.name}</h2>
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

//plant by catagories//

const plantCatagories = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBycatagories(data.plants));
};

const displayBycatagories = (trees) => {
  // 1.get the parent and emty
  const cardsDiv = document.getElementById("plants-cards");
  cardsDiv.innerHTML = "";
  // 2.loop for single catagoriesDiv
  trees.forEach((tree) => {
    //    3.create an Element
    const treesDiv = document.createElement("div");
    // 4.set inner HTMLAllCollection
    treesDiv.innerHTML = `
  <div class="card bg-base-100  max-w-80 shadow-md">
              <figure>
                <img class="max-h-[200px] w-full"
                  src="${tree.image}"
                />
              </figure>
              <div class="card-body">
                <h2 onclick="loadModaldat(${tree.id})"  class="card-title">${tree.name}</h2>
                <p class="text-gray-700 text-xs">
                  ${tree.description}
                </p>

                <div class="flex justify-between items-center">
                  <button
                    class="bg-[#DCFCE7] rounded-full py-1 px-3 text-[#15803D]"
                  >
                    ${tree.category}
                  </button>

                  <h1 class="font-bold">৳<span> ${tree.price}</span></h1>
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
    // 5.appen child
    cardsDiv.appendChild(treesDiv);
  });
};

// modal for cards
const loadModaldat = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((details) => displayModal(details.plants));
};

const displayModal = (plantInfo) => {
  // 1.Get the container
  const modalDiv = document.getElementById("modal-container");
  // 2.set innerHTML
  modalDiv.innerHTML = `
  <div class="space-y-2 flex flex-col items-start">
      <h1 class="font-bold text-lg">${plantInfo.name}</h1>
      <img class="w-full max-h-[250px] rounded-lg" src="${plantInfo.image}" alt="" />
      <h4 class="font-bold text-lg">
        Category: <span class="text-gray-600 font-normal text-sm">${plantInfo.category}</span>
      </h4>
      <h4 class="font-bold text-lg">
        Price: ৳<span class="text-gray-600 font-normal text-sm">${plantInfo.price}</span>
      </h4>
      <p class="font-bold text-lg">
        Description:
        <span class="text-gray-600 font-normal text-xs"
          >${plantInfo.description}</span
        >
      </p>
    </div>
  `;
  document.getElementById("plant_modal").showModal();
};
