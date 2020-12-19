var images = [], x = -1;
images[0] = "../Booking/images/image2.jpg";
images[1] = "../Booking/images/image3.jpg";
images[2] = "../Booking/images/image4.jpg";
images[3] = "../Booking/images/image5.jpg";
images[4] = "../Booking/images/image6.jpg";
images[5] = "../Booking/images/image7.jpg";
images[6] = "../Booking/images/image8.jpg";
images[7] = "../Booking/images/image9.jpg";
images[8] = "../Booking/images/image10.jpg";
images[9] = "../Booking/images/image11.jpg";
images[10] = "../Booking/images/image12.jpg";
images[11] = "../Booking/images/image13.jpg";
images[12] = "../Booking/images/image14.jpg";
images[13] = "../Booking/images/image1.jpg";

function displayNextImage() {

     x = (x === images.length - 1) ? 0 : x + 1;

     var a = document.getElementsByClassName("inimg")[0];
     a.classList.remove("inimg");
     a.classList.add("outimg");

     var b = document.createElement("IMG");
     b.setAttribute("src", images[x]);
     b.classList.add("inimg");
     document.getElementById("imgDIV").appendChild(b);
     b.addEventListener("animationend", myEndFunction);
 }

function startTimer() {
     setInterval(displayNextImage, 2500);
}

function setListener() {
     var a = document.getElementsByClassName("inimg")[0];
     var b = document.getElementsByClassName("outimg")[0];
     if (a || b) {
          a.addEventListener("animationend", myEndFunction);
     }
}

function myEndFunction() {

     var a = document.getElementsByClassName("outimg")[0];
     a.remove();
}

function start() {
     setListener();
     startTimer();
}