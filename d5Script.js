//open contact form
document.getElementById("formPop").addEventListener("click", function(){
    document.getElementById("emailContainer").style.display = "block";
})
//close contact form
document.getElementById("closeForm").addEventListener("click", function(){
    document.getElementById("emailContainer").style.display = "none";
})
//copy text from p
function copyText(clickedElement){
    var textToCopy = clickedElement.innerText;
    if(textToCopy.charAt(1) !== "+"){
        var text = textToCopy;
    }
    else{
        var text = textToCopy.slice(0, 15);
    }
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Text copied to clipboard: " + text);
}
//open commercial projects
function newCommercial(){
    var newProjTable = document.createElement('table');
    newProjTable.setAttribute("id", "projTable");
    newProjTable.innerHTML =`
        <tr>
            <td><img src="img/commercial/arrietaTulipDrive1.png" id="c1" class="projPic" onclick="showC1()"></td>
            <td><img src="img/commercial/gabucanCTree1.jpg" id="c2" class="projPic" onclick="showC2()"></td>
            <td><img src="img/commercial/gabucanFairCrowns1.jpg" id="c3" class="projPic" onclick="showC3()"></td>
        </tr
        <tr>
            <td><img src="img/commercial/serranoCafeChalet1.jpg" id="c4" class="projPic" onclick="showC4()"></td>
            <td><img src="img/commercial/villegasArakanChapel1.png" id="c5" class="projPic" onclick="showC5()"></td>
            <td><img src="img/commercial/villegasMissionHouse1.png" id="c6" class="projPic" onclick="showC6()"></td>
        </tr>
    `;
    var oldTable = document.getElementById("projTable");
    oldTable.parentNode.replaceChild(newProjTable, oldTable);
    document.getElementById("projMain").style.setProperty("--projColor", "#fbdc6a");
    document.getElementById("projContent").style.setProperty("--projColor", "#fbdc6a");
}
//open residential projects
function newResidential(){
    var newProjTable = document.createElement('table');
    newProjTable.setAttribute("id", "projTable");
    newProjTable.innerHTML =`
        <tr>
            <td><img src="img/residential/arrietaLazTerrazas1.jpg" id="r1" class="projPic" onclick="showR1()"></td>
            <td><img src="img/residential/bajoDoñaLuisa1.png" id="r2" class="projPic" onclick="showR2()"></td>
            <td><img src="img/residential/gabucanRoyalPines1.jpg" id="r3" class="projPic" onclick="showR3()"></td>
        </tr>
        <tr>
            <td><img src="img/residential/serranoVincentHeights1.jpg" id="r4" class="projPic" onclick="showR4()"></td>
        </tr>
    `;
    var oldTable = document.getElementById("projTable");
    oldTable.parentNode.replaceChild(newProjTable, oldTable);
    document.getElementById("projMain").style.setProperty("--projColor", "#f8dcbf");
    document.getElementById("projContent").style.setProperty("--projColor", "#f8dcbf");
}
//show specific project
function showProj(){
    document.getElementById("projContainer").style.display = "block";
    currentSlide(1);
}
function closeProj(){
    document.getElementById("projContainer").style.display = "none";
}
//slideshow
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("projSlide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
