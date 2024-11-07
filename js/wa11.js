const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArr = ["/img/wa11/pic1.jpg", "/img/wa11/pic2.jpg", "/img//wa11/pic3.jpg", "/img/wa11/pic4.jpg", "/img/wa11/pic5.jpg"];

/* Declaring the alternative text for each image file */
const imgAlt = ["Closeup of a blue human eye", "Some stone looking landscape", "Pretty purple flowers", "Egyptian heiroglphys", "Butterfly on a leaf"];

/* Looping through images */

for(i = 0; i < imgArr.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArr[i]);
    newImage.setAttribute('alt', imgAlt[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.src);
        displayedImage.setAttribute('alt', newImage.alt);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if(btn.getAttribute("class") == "dark")
    {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
    else
    {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
});
