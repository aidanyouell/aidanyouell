let myData = {};

function fetchData(){
    fetch('http://catfact.ninja/fact')
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
            document.getElementById("fact").innerHTML = myData.fact;
        })
        .catch(error => 
        {
            console.log(error);
        })
}

document.addEventListener("DOMContentLoaded", () => {
    clickWork();
});

document.getElementById("generate").addEventListener("click", e => {fetchData();})
console.log(myData);

let name = "Aidan";
let myString = `Hello ${name}!`;