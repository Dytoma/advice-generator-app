
const adviceId = document.querySelector(".advice-id");
const quote = document.querySelector(".message");
const dice = document.querySelector("button");


const adviceGenerator = async() => {

    try {

        // Make a request to the advice generator via their api using fetch

        const request = await fetch("https://api.adviceslip.com/advice", {cache: 'no-cache'});

        // if the request is ok we proceed 

        if(request.ok) {

            // we await for the request to be converted to json 

            const response = await request.json();

            // And then display the data to our page
            adviceId.innerText = `ADVICE #${response['slip'].id}`;
            quote.innerHTML = `&#8220${response['slip'].advice}&#8220`;
        }
    } catch(error) {
        console.log("Error detected", error);
    }

}

dice.addEventListener("click", adviceGenerator);