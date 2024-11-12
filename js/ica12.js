let myData = {};

function getJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
        .then(res => {
            if(res.ok)
            {
                return res.json();
            }
            else
            {
                console.log(res);
            }
        })
        .then(res =>{
            myData = res;
            console.log(myData);
            displayRes();
        })
        .catch(error => {
            console.log(error);
            alert("Error");
        })
}

function displayRes() {
    document.getElementById("joke").innerHTML = myData.joke;
}

function clickWork() {
    document.getElementById("generate").addEventListener("click", () => {
        console.log("clicked!");
        getJoke();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    clickWork();
    getJoke();
});

let apiEndPoint = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";