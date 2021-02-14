function getBookTemplate(parsed) {
	document.getElementById("nav").style.display = "block"; 
    let temp = `
    			
	    			<form action="#home">
                        <div class="form">

                            <p class="hotelName">Ritz</p>

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
                                    <label for="from">Check-in</label>
                                    <input type="date" id="from" name="from">
                                </div>

                                <div class="date">
                                    <label for="to">Check-out</label>
                                    <input type="date" id="to" name="to">
                                </div>
                            </div>

                            <div class="autocomplete">
                                <label for="from">Confirm email</label>
                                <input id="myInput" type="text" name="email" placeholder="Enter your email">
                            </div> 

                            <label class="check">Smoking
                                <input type="checkbox">
                            </label>
                            <label class="check">Breakfast
                                <input type="checkbox">
                            </label>
                            <label class="check">Sea View
                                <input type="checkbox">
                            </label>

                            <input type="submit" class="bookBtn" value="Book">

                        </div>
                    </form>

			`;

    return temp;
}


export function loadBook() {
    document.getElementById("container").innerHTML = getBookTemplate();
}