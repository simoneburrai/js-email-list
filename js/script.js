
const numberOfGeneratedEmail = 10;
const emailList = [];

for(i=0; i<numberOfGeneratedEmail; i++){

}

const booleanApi = "https://flynn.boolean.careers/exercises/api/random/mail" 

function axiosCall(apiLink) {
    axios.get(apiLink)
        .then(response => {
            const apiItems = response.data;
        })
        .catch(error => {
        console.error(error)})
}

axiosCall(booleanApi);
