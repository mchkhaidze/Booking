var images = [], x = -1;
images[0] = "../web-project/images/image2.jpg";
images[1] = "../web-project/images/image3.jpg";
images[2] = "../web-project/images/image4.jpg";
images[3] = "../web-project/images/image5.jpg";
images[4] = "../web-project/images/image6.jpg";
images[5] = "../web-project/images/image7.jpg";
images[6] = "../web-project/images/image8.jpg";
images[7] = "../web-project/images/image9.jpg";
images[8] = "../web-project/images/image10.jpg";
images[9] = "../web-project/images/image11.jpg";
images[10] = "../web-project/images/image12.jpg";
images[11] = "../web-project/images/image13.jpg";
images[12] = "../web-project/images/image14.jpg";
images[13] = "../web-project/images/image15.jpg";
images[14] = "../web-project/images/image16.jpg";
images[15] = "../web-project/images/image17.jpg";
images[16] = "../web-project/images/image18.jpg";
images[17] = "../web-project/images/image19.jpg";
images[18] = "../web-project/images/image20.jpg";
images[19] = "../web-project/images/image21.jpg";
images[20] = "../web-project/images/image22.jpg";
images[21] = "../web-project/images/image23.jpg";
images[22] = "../web-project/images/image24.jpg";
images[23] = "../web-project/images/image25.jpg";
images[24] = "../web-project/images/image1.jpg";

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