const prvBtn = document.getElementById("prvBtn");
const nextBtn = document.getElementById("nextBtn");
const imageContainer = document.getElementById("arvand");

; //define array

var curImg = 0;
function showImg(x)
{
    images.forEach((img, imgIndex) =>
    {
        img.style.display = imgIndex == x ? 'block' : 'none';
    });
    curImg = x;
}

prvBtn.addEventListener('click', () =>
{
    const x = curImg === 0 ? images.length - 1 : curImg - 1;
    showImg(x);
});


nextBtn.addEventListener('click', () =>
{
    const x = (curImg + 1) % images.length;
    showImg(x);
});
