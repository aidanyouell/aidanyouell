tellFortune(5, "Henry", "London", "Doctor");
tellFortune(3, "Aidan", "Denver", "Psychiatrist");
tellFortune(2, "Maribel", "Boulder", "Software Engineer");

function tellFortune(children, partnerName, location, title){
    console.log("You will be a " + title + " in " + location + ", and married to " + partnerName + " with " + children + " kids");
}

calculateDogAge(5);
calculateDogAge(7);
calculateDogAge(1);

function calculateDogAge(age){
    console.log("Your doggie is " + age*7 + " years old in dog years!");
}

reverseNumber("1234");
reverseNumber("4321");

function reverseNumber(number){
    let reverse = "";
    let length = number.length;
    for(i=length-1; i>=0; i--)
    {
        reverse += number.charAt(i);
    }
    console.log(reverse);
    const resultElement = document.createElement("p");
    resultElement.textContent = `Reversed Number: ${reverse}`;
    document.getElementById("output").appendChild(resultElement);
}

alphabeticalOrder("zaby");
alphabeticalOrder("musical");

function alphabeticalOrder(word){
    const myArr = [];
    for(i = 0; i < word.length; i++)
    {
        myArr[i] = word.charAt(i);
    }
    myArr.sort();
    let result = "";
    for(i = 0; i < word.length; i++)
    {
        result += myArr[i];
    }
    
    let paragraph = document.createElement("p");
    paragraph.textContent = result;
    document.getElementById("output").appendChild(paragraph);
}

upperCase("the quick brown fox");
upperCase("hello my name is aidan");

function upperCase(sentence) {
    let words = sentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    let newSentence = words.join(" ");

    let paragraph = document.createElement("p");
    paragraph.textContent = newSentence;
    document.getElementById("output").appendChild(paragraph);
}