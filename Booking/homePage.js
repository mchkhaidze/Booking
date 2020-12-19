var arr = ["Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Belgium", "Brazil", "Canada", "China", 
		   "Czech Republic", "Denmark", "Ecuador", "Egypt", "Finland", "France", "Georgia", "Germany", "Greece", 
		   "Hong Kong", "Hungary", "India", "Ireland", "Italy", "Jamaica", "Japan", "Kenya", "Latvia", 
		   "Liechtenstein", "Macedonia", "Madagascar", "Mexico", "Netherlands", "New Zealand", "Norway", 
		   "Philippines", "Poland", "Portugal", "Qatar", "Russia", "Spain", "Sweden", "Switzerland", "Thailand", 
		   "Turkey", "Ukraine", "UAE", "United Kingdom", "United States of America", "Vatican City", "Venezuela", 
		   "Yemen", "Zambia", "Zimbabwe"];

var searchBtnWidth;

function openNav() {
	var w = window.innerWidth;
	if (w > 600) {
		document.getElementById("mySidebar").style.width = "500px";
  		document.getElementById("topnav").style.marginRight = "500px";
  		searchBtnWidth = document.getElementById("srch").offsetWidth;
  		document.getElementById("srch").style.width = "0px";
  	}else{
  		document.getElementById("mySidebar").style.width = "100%";
  		document.getElementById("topnav").style.marginRight = "100%";
  	}
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
  	document.getElementById("topnav").style.marginRight= "0";
  	document.getElementById("srch").style.width = searchBtnWidth + "px";
}

function autocomplete() {

  inp = document.getElementById("myInput");
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) return;
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {
    if (!x) return;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

window.onload = function() {
  autocomplete();
};
