function getHomeTemplate(parsed) {
    let temp = `
                <div class="search">
    			
	    			<img src="images/background.png" class="b-img">

	    			<div class="form">

	    				<h2>Find best offers</h2>

		    			<div class="dropDown1">
							<label for="guest">Number of guests</label>
					  		<select id="guest" name="guest">
					  			<option value="" selected disabled hidden>Select number of guests</option> 
						    	<option value="1">1</option>
						      	<option value="2">2</option>
						      	<option value="3">3</option>
						      	<option value="4">4</option>
						      	<option value="5">5</option>
						    </select>
						</div>

						<div class="dates">
							<div class="date">
								<label for="from">Check-in</label><br>
				  				<input type="date" id="from" name="from">
				  			</div>

				  			<div class="date">
								<label for="to">Check-out</label><br>
				  				<input type="date" id="to" name="to">
			  				</div>
						</div>

						<div class="autocomplete">
							<label for="from">Destination</label><br>
							<input id="myInput" type="text" name="myCountry" placeholder="Where are you going?">
						</div> 

						<input type="submit" class="searchBtn" value="Search">

					</div>

	    		</div>
			`;

    return temp;
}


export function loadHome() {
    document.getElementById("container").innerHTML = getHomeTemplate();
}