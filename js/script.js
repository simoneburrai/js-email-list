
const numberOfGeneratedEmail = 10;

// API Link 
const booleanApi = "https://flynn.boolean.careers/exercises/api/random/mail";

// HTML ELEMeNTS 
const rowElement = document.querySelector(".row");
const generateEmailButtonElement = document.getElementById("generateEmailButton");
console.log(generateEmailButtonElement);


// Creating 10 Email 
for(i=0; i<numberOfGeneratedEmail; i++){
    axiosCall(booleanApi);
}

// Adding Event AudioListener, on every click, regenerate 10 emails 
generateEmailButtonElement.addEventListener("click", function(){
    rowElement.innerHTML = "";
    for(i=0; i<numberOfGeneratedEmail; i++){
    axiosCall(booleanApi);
    }
})

// console.log(generateEmail);
// for(i=0; i<numberOfGeneratedEmail; i++){
//     emailList.push(generateEmail);
// }
// console.log(emailList);

// functions 

// Call to API, and generate a card with api infos 
function axiosCall(apiLink) {
    axios.get(apiLink)
        .then(response => {
            const arr = [];
            const apiItems = response.data;
            const cardCreated = cardCreating(apiItems);
            rowElement.innerHTML += cardCreated;
        })
        .catch(error => {
        console.error(error)})
}

// creating an html card element 
function cardCreating(obj){
    const card = `
    <div id="column card" class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card text-bg-dark text-center mb-3">
                    <div class="card-body">
                    <h5 class="card-title">Email User</h5>
                    <p class="card-text newemail"><a href="https://mail.google.com/mail/u/0/#compose">${obj.response}</a></p>
                    </div>
                </div>
            </div>`
    return card;
}
