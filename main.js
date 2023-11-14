const video = document.getElementById("video");
const canvas = document.getElementById("canv");
const button = document.getElementById("btn");
let webcam = navigator.mediaDevices.getUserMedia();

if (webcam) {
      navigator.mediaDevices.getUserMedia({
            video : true,
            audio : true
      })
      .then ((live) => {
            video.srcObject = live;
      })
      .catch((error) => console.log("Error occurd"))
}

let context = canvas.getContext("2d");
button.addEventListener("click", function () {
      context.drawImage(video,0,0,300,150)
})