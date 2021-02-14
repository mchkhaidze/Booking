function getHistoryTemplate(parsed) {
    let temp = `
                <div class="gallery">
                    My Reservations
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
                            <a href="#hotel/${parsed.hotels[i].id}" class="hotelName">${parsed.hotels[i].name}</a>
                            <p class="location">${parsed.hotels[i].location}</p>
                        </div>

                        <p class="rating">${parsed.hotels[i].rating}</p>

                    </dic>

                    <a href="#hotel/${parsed.hotels[i].id}"> 
                        <img src="images/hotelImg/${parsed.hotels[i].roomImg}">
                    </a>

                    <p class="extraInfo">Extra Information</p>
                    <ul>
                        <li>${parsed.hotels[i].guests} guests</li>
                        <li>From: ${parsed.hotels[i].dates.startdate}</li>
                        <li>To: ${parsed.hotels[i].dates.enddate} </li>
                        <li>${parsed.hotels[i].type} </li>
                    </ul>
                    <a href="#history" class="del">Delete</a>
                    <a href="#book" class="edit">Edit</a>
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
                            <a href="#hotel/${parsed.hotels[i].id}" class="hotelName">${parsed.hotels[i].name}</a>
                            <p class="location">${parsed.hotels[i].location}</p>
                        </div>

                        <p class="rating">${parsed.hotels[i].rating}</p>

                    </dic>

                    <a href="#hotel/${parsed.hotels[i].id}"> 
                        <img src="images/hotelImg/${parsed.hotels[i].roomImg}">
                    </a>

                    <p class="extraInfo">Extra Information</p>
                    <ul>
                        <li>${parsed.hotels[i].guests} guests</li>
                        <li>From: ${parsed.hotels[i].dates.startdate}</li>
                        <li>To: ${parsed.hotels[i].dates.enddate} </li>
                        <li>${parsed.hotels[i].type} </li>
                    </ul>
                    <a href="#history" class="del">Delete</a>
                    <a href="#book" class="edit">Edit</a>
                </div>
            `;
    } 

    temp += `</div>
        </div>`;

    return temp;
}


export function loadHistory() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./json/history.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var parsed = JSON.parse(this.responseText);
          document.getElementById("container").innerHTML = getHistoryTemplate(parsed);
        }
    }
}