function getHotelTemplate(parsed) {
    let temp = `
    			<div class="gallery">
                	${parsed.name}
	            </div>

	            <div class="photos">`;

	for(let i = 0; i < parsed.roomImgs.length; i++){
		temp += `
					<div class="responsive">
	                    <div class="photogallery">
	                        <a href="images/hotelImg/${parsed.roomImgs[i].img}">
	                            <img src="images/hotelImg/${parsed.roomImgs[i].img}" width="600" height="400">
	                        </a>
	                    </div>
                	</div>`;
	}

	temp +=	`
				<div class="clearfix"></div>

	        </div>
	                
	        <div class="content">


	            <div class="column">

	                <table>
	                  <tr>
	                    <td>Location</td>
	                    <td>${parsed.location}</td>
	                  </tr>
	                  <tr>
	                    <td>Room Type</td>
	                    <td>${parsed.type}</td>
	                  </tr>
	                  <tr>
	                    <td>Price</td>
	                    <td>${parsed.price}</td>
	                  </tr>
	                  <tr>
	                    <td>Rating</td>
	                    <td>${parsed.rating}</td>
	                  </tr>
	                </table>
	            </div>
	        
                <div class="column">

                    <p class="extraInfo">Extra Information</p>
                    <ul>`;

    for(let j = 0; j < parsed.extraInfo.length; j++){
		temp += `<li>${parsed.extraInfo[j].info}</li>`;
	}

    temp += `   
    			</ul>
            </div>
        </div>`;

    return temp;
}


export function loadHotel() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/json/hotel.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var parsed = JSON.parse(this.responseText);
          document.getElementById("container").innerHTML = getHotelTemplate(parsed);
        }
    }
}