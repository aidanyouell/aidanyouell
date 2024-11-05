const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 25 fahrenheit outside and snow was piled up everywhere outisde, so :insertx: went for a walk in the snow. While on this walk, they decided to make a snow angel. When they got to :inserty:, just jumped with joy, and :insertz:. Bob saw the whole thing, and wanted to join — :insertx: weighs 300 pounds, and it was a cold day.";
const insertx = ["Silly Goose", "Big Zaddy", "Mr.T"];
const inserty = ["Santa's workshop", "Breckenridge", "the summit of Mt Everest"];
const insertz = ["cried", "did a backflip", "made friends with a raccoon"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    newStory = newStory.replace("300 pounds", weight + " stones");
    const temperature =  Math.round((25-32)*(5/9));
    newStory = newStory.replace("25 fahrenheit", temperature + " centigrade");

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}