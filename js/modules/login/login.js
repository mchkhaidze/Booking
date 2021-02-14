function getLoginTemplate(parsed) {
	document.getElementById("nav").style.display = "none"; 
    let temp = `
                <img src="images/sky.png" class="b-img skyImg">

                <form action="#home" method="get">
                    <div class="form login">
                        <div class="tabs">
                          <a href="#login" id="log">LogIn</a>
                          <a href="#signup" id="sign">SignUp</a>
                        </div>
                        <div class="fields">

                            <div class="user">
                                <label>Username</label>
                                <input id="user" type="text" name="user" placeholder="Username">
                            </div> 

                            <div class="pass">
                                <label>Password</label>
                                <input type="password" id="pass" name="pass" placeholder="Password">
                                <input id="ckbox" type="checkbox"><span class="passText">Show Password</span>
                            </div> 
                        </div>

                        <input type="submit" class="loginBtn" value="Login">

                    </div>
                </form>
			`;

    return temp;
}


export function loadLogin() {
    document.getElementById("container").innerHTML = getLoginTemplate();
}