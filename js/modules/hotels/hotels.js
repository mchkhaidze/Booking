function getHotelsTemplate(parsed) {
    let temp = `
                <div class="galery">
                    Gallery
                </div>
                    
                <div class="content">


                    <div class="column">
                `;

    let i = 0;
    for (; i < parsed.hotels.length/2; i++) {
      temp += `
                <div class="hotel">

                    <dic class="info">

                        <div class="title">
                            <a href="#hotel/${i}" class="hotelName">${parsed.hotels[i].name}</a>
                            <p class="location">${parsed.hotels[i].location}</p>
                        </div>

                        <p class="rating">${parsed.hotels[i].rating}</p>

                    </dic>

                    <a href="#hotel/${i}"> 
                        <img src="images/hotelImg/${parsed.hotels[i].roomImg}">
                    </a>
                </div>
            `;
    } 

    temp += `
            </div>
            
                <div class="column">
            `;

    for (; i < parsed.hotels.length; i++) {
        temp += `
                <div class="hotel">

                    <dic class="info">

                        <div class="title">
                            <a href="#hotel/${i}" class="hotelName">${parsed.hotels[i].name}</a>
                            <p class="location">${parsed.hotels[i].location}</p>
                        </div>

                        <p class="rating">${parsed.hotels[i].rating}</p>

                    </dic>

                    <a href="#hotel/${i}"> 
                        <img src="images/hotelImg/${parsed.hotels[i].roomImg}">
                    </a>
                </div>
            `;
    } 

    temp += `</div>
        </div>`;

    return temp;
}


export function loadHotels() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./json/hotels.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var parsed = JSON.parse(this.responseText);
          document.getElementById("container").innerHTML = getHotelsTemplate(parsed);
        }
    }
}