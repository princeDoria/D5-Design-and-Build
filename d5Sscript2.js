//change pop up details
function showR1(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/residential/arrietaLazTerrazas1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/residential/arrietaLazTerrazas2.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>3-Level Residential Building</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>Las Terrazas, Ma-a, Davao City</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>To Be Determined</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>To Be Constructed (2024)</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}
function showR2(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/residential/bajoDoñaLuisa1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/residential/bajoDoñaLuisa2.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/residential/bajoDoñaLuisa3.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>1-Storey Residential Building (Design & Build)</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>Taurus St. Corner Gemini St., Doña Luisa Subdivision Ph. 2, Matina, Davao City</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>Php 5,000,000.00</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>November 2023</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}
function showR3(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/residential/gabucanRoyalPines1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/residential/gabucanRoyalPines2.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/residential/gabucanRoyalPines3.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>2-Storey Residential Building (Design)</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>Royal Pines Subdivision, Matina, Davao City</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>Php 300,000</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>November 2023</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}
function showR4(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/residential/serranoVincentHeights1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/residential/serranoVincentHeights2.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/residential/serranoVincentHeights3.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/residential/serranoVincentHeights4.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                    <span class="dot" onclick="currentSlide(4)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>2-Storey Residential Building</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>Vincent Heights, Davao City</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>To Be Determined</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>To Be Constructed</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}
function showC1(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/commercial/arrietaTulipDrive1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/arrietaTulipDrive2.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>5-Storey Commercial Building with Roof Deck and Parking Basement (Design & Build)</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>Tulip Drive, Juna Subdivision, Matina, Davao City</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>Php 48,000,000.00</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>Ongoing Construction</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}
function showC2(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/commercial/gabucanCTree1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/gabucanCTree2.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>4-Storey Hotel Building (Design & Supervision)</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>Acacia Street, Juna Subdivision, Matina, Davao City</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>Php 22,752,000.00</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>October 2016</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}
function showC3(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/commercial/gabucanFairCrowns1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/gabucanFairCrowns2.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>4-Storey Hotel Building (Design & Build)</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>Champaca St., Corner Aguinaldo St., Juna Subdivision, Matina, Davao City</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>Php 32,800,000.00</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>January 2020</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}
function showC4(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/commercial/serranoCafeChalet1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/serranoCafeChalet2.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/serranoCafeChalet3.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/serranoCafeChalet4.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/serranoCafeChalet5.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/serranoCafeChalet6.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                    <span class="dot" onclick="currentSlide(4)"></span>
                    <span class="dot" onclick="currentSlide(5)"></span>
                    <span class="dot" onclick="currentSlide(6)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>2-Storey Commercial Building (Design & Build)</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>3rd St., Corner 4th St., Ecoland Subdivision, Matina, Davao City</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>Php 7,400,000.00</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>November 2021</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}
function showC5(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/commercial/villegasArakanChapel1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/villegasArakanChapel2.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>1-Storey Chapel</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>Dangpanan Renewal Center, Brgy. San Miguel, Arakan, North Cotabato</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>To Be Determined</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>To Be Constructed (2024)</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}
function showC6(){
    var newDiv = document.getElementById("projContent");
    newDiv.innerHTML = `
            <div class="projSlideShow">
                <div class="projSlide fade">
                    <img src="img/commercial/villegasMissionHouse1.png" class="slidePics">
                </div>
                <div class="projSlide fade">
                    <img src="img/commercial/villegasMissionHouse2.png" class="slidePics">
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <div id="dotContainer">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                </div>
            </div>
            <table id="projDetails">
                <tr>
                    <th>Project:</th>
                    <td>3-Level Mission House (Design & Supervision)</td>
                </tr>
                <tr>
                    <th>Location:</th>
                    <td>Dangpanan Renewal Center, Brgy. San Miguel, Arakan, North Cotabato</td>
                </tr>
                <tr>
                    <th>Contract Cost:</th>
                    <td>Donated in Good Faith</td>
                </tr>
                <tr>
                    <th>Date Completed:</th>
                    <td>Ongoing Construction</td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" class="projBtns" onclick="closeProj()">Close</button></td>
                </tr>
            </table>
    `;
    showProj();
}