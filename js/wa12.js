let myData = {};

function getComic(){
    let URI = randomComic();
    fetch(URI)
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

function randomComic(){
    let newURI = "https://corsproxy.io/?https://xkcd.com/";
    let half = "/info.0.json";
    let number = Math.floor(Math.random() * 3000);
    newURI += number + half;
    return newURI;
}

function displayRes(){
    let date = getDate();
    document.getElementById("comic").src = myData.img;
    document.getElementById("comic").alt = myData.alt;
    document.getElementById("comicTitle").innerHTML = myData.title;
    document.getElementById("comicDate").innerHTML = date;
}

function clickWork(){
    document.getElementById("generate").addEventListener("click", () => {
        console.log("clicked!");
        getComic();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    clickWork();
    getComic();
});

function getDate(){
    let month = myData.month;
    let day = myData.day;
    let year = myData.year;
    let newDate = `${month}/${day}/${year}`;
    return newDate;
}

console.log(getDate());