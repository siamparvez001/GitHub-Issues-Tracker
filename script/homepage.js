const cardContainer = document.getElementById("card-container");
const cardDetailsModal = document.getElementById("card-details-modal");
const modalHead = document.getElementById("modal-head");
const modalStatus = document.getElementById("modal-status");
const userName = document.getElementById("user-name");
const timeline = document.getElementById("timeline");
const firstImage = document.getElementById("first-image");
const modalFirstLabels = document.getElementById("modal-first-labels");
const secondImage = document.getElementById("second-image");
const modalSecondLabels = document.getElementById("modal-second-labels");
const modalDescription = document.getElementById("modal-description");
const assigneeName = document.getElementById("assignee-name");
const priorityName = document.getElementById("priority-name");
let totalCard = document.getElementById("total-card");
const allFilterBtn = document.getElementById("all-filter-btn");
const openFilterBtn = document.getElementById("open-filter-btn");
const closedFilterBtn = document.getElementById("closed-filter-btn");
let allCards = [];
let openCard = [];
let closedCard = [];
const searchInput = document.getElementById("search-input");
const loadingSpinner = document.getElementById("loading-spinner");
// console.log(totalCard);


async function searchIssues(searchText){
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`);
    const data = await res.json();
    displayCard(data.data);

};

searchInput.addEventListener("input", function(){
    const searchText = searchInput.value;
    if(searchText === ""){
        displayCard(allCards); 
        return;
    }
    searchIssues(searchText);

});




function totalCalculate(){
   totalCard.innerText = cardContainer.children.length;

    // console.log(totalNumber);
};

function allBtnClick(){
    displayCard(allCards);
};

function openBtnClick(){
    const openCard = allCards.filter(card => card.status == 'open');
    displayCard(openCard);
};

function closedBtnClick(){
    const closedCards = allCards.filter(card => card.status === "closed");
    displayCard(closedCards);
}

async function loadCard() {
    loadingSpinner.classList.remove("hidden");
    loadingSpinner.classList.add("flex");
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const date = await res.json();
    allCards = date.data
    // console.log(data);
    displayCard(date.data);
};

function displayCard(cards) {
    cardContainer.innerHTML = "";
    // console.log(cards);
    cards.forEach(card => {
        // console.log(card);
        const mainCard = document.createElement("div")
        mainCard.className = (`w-[350px] space-x-5 rounded-[20px] mx-auto shadow-md space-y-4 p-[20px] border-t-[5px]  ${card.status == 'open' ? 'border-t-green-500' : 'border-t-red-500'} `)
        mainCard.innerHTML = `
            <div class="flex justify-between">
                <img class="w-[35px]" src="${card.status == 'open' ? './images/Open-Status.png' : './images/Closed-Status.png'}" alt="">
                <p class="${card.priority == 'high'
                ? 'bg-red-100'
                : card.
                    priority == 'medium'
                    ? 'bg-orange-100'
                    : 'bg-gray-100'} py-[6px] px-[15px] rounded-[20px]">${card.priority}</p>
            </div>
            <h3 class="cursor-pointer" onclick="openCardModal(${card.id})">${card.title}</h3>
            <p class="line-clamp-2">${card.description}</p>
            <div class="flex items-center space-x-2">
                <p class=" px-[10px] py-[6px] rounded-[20px] ${card.labels[0] == 'bug' ? 'bg-red-100' : 'bg-green-100'}">${card.labels[0]}</p>
                <div class="flex gap-[5px] bg-yellow-100 px-[10px] py-[6px] rounded-[20px]">
                    <img src="./images/github-issue.png" alt="">
                    <p>${card.labels[1]}</p>
                </div>
            </div>
            <hr class="opacity-50">
            <p class="opacity-60">#1 by ${card.author}</p>
            <p class="opacity-60">${card.createdAt}</p>
        `
        cardContainer.appendChild(mainCard);
    });
    totalCalculate();
};

async function openCardModal(cardId){
    console.log(cardId);
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${cardId}`)
    const data = await res.json();
    const cardDetails = data.data;
    console.log(cardDetails, "data");
    console.log(data, "data");
    cardDetailsModal.showModal();
    modalHead.textContent = cardDetails.title;
    modalStatus.textContent = cardDetails.status;
    userName.textContent = cardDetails.author;
    timeline.textContent = cardDetails.createdAt;
    firstImage.textContent = cardDetails.title;
    modalFirstLabels.textContent = cardDetails.labels[0];
    secondImage.textContent = cardDetails.title;
    modalSecondLabels.textContent = cardDetails.labels[1];
    assigneeName.textContent = cardDetails.author;
    priorityName.textContent = cardDetails.priority;
    modalDescription.textContent = cardDetails.description;

};


loadCard();