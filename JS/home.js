document.addEventListener("DOMContentLoaded", () => {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");
    const HomeBody = document.getElementById("HomeBody");
    antimage = document.getElementById("antimage");
    quotediv = document.getElementById("quotediv");
    quotepara=document.getElementById("quotepara");
    homepage = document.body;
    homesmallquote=document.getElementById("homesmallquote");


    if (image1) {
        image1.addEventListener('mouseover', function() {
            HomeBody.classList.add("getimage1");
            console.log('Hovered over image 1');
           antimage.style.animation="antmove 1s ease-in-out forwards";
            quotediv.style.animation="quotemove 1s ease-in-out forwards";
            quotepara.style.color = "#fff7ca";
            homesmallquote.style.color="#f9e67a";
            quotediv.classList.add('quotestylechange');
        });
        image1.addEventListener('mouseout', function() {
            HomeBody.classList.remove("getimage1");
            console.log('Mouse left image 1');
            quotepara.style.color = "#b5592a";
            homesmallquote.style.color="#a55540";
            antimage.style.animation="antmovereverse 1s ease-in-out forwards";
            quotediv.style.animation="quotemovereverse 1s ease-in-out forwards";
        });
    }

    if (image2) {
        image2.addEventListener('mouseover', function() {
            HomeBody.classList.add("getimage2");
            console.log('Hovered over image 1');
            antimage.style.animation="antmove 1s ease-in-out forwards";
            quotediv.style.animation="quotemove 1s ease-in-out forwards";
            quotepara.style.color = "#fff7ca";
            homesmallquote.style.color="#f9e67a";
            quotediv.classList.add('quotestylechange');
        });
        image2.addEventListener('mouseout', function() {
            HomeBody.classList.remove("getimage2");
            console.log('Mouse left image 1');
            quotepara.style.color = "#b5592a";
            homesmallquote.style.color="#a55540";
            antimage.style.animation="antmovereverse 1s ease-in-out forwards";
            quotediv.style.animation="quotemovereverse 1s ease-in-out forwards";
        });
    }

    if (image3) {
        image3.addEventListener('mouseover', function() {
            HomeBody.classList.add("getimage3");
            console.log('Hovered over image 1');
            antimage.style.animation="antmove 1s ease-in-out forwards";
            quotediv.style.animation="quotemove 1s ease-in-out forwards";
            quotepara.style.color = "#fff7ca";
            homesmallquote.style.color="#f9e67a";
            quotediv.classList.add('quotestylechange');
        });
        image3.addEventListener('mouseout', function() {
            HomeBody.classList.remove("getimage3");
            console.log('Mouse left image 1');
            quotepara.style.color = "#b5592a";
            homesmallquote.style.color="#a55540";
            antimage.style.animation="antmovereverse 1s ease-in-out forwards";
            quotediv.style.animation="quotemovereverse 1s ease-in-out forwards";
        });
    }
});
