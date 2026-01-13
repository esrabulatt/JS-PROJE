let changeTitleBtn = 0;

const count = document.getElementById("changeTitleBtn");
const buton = document.getElementById("buton");


buton.addEventListener("click", function ()  {
    changeTitleBtn++;
    count.innerText = changeTitleBtn;
    if (changeTitleBtn % 5 === 0) {
      alert("Oops! Time to rest.");
    }
  });


  const birdAuidoPlay = document.getElementById("birdAuidoPlay");
  const birdIcon = document.getElementById("birdIcon");

  birdIcon.addEventListener("click", function () {
    if (birdAuidoPlay.paused){
        birdAuidoPlay.play()
        birdIcon.className = "fa-solid fa-music"
    }
    else{
        birdAuidoPlay.pause()
        birdIcon.className = "fa-solid fa-dove"   
    } 
    })


    const rainAuidoPlay = document.getElementById("rainAuidoPlay");
    const rainIcon = document.getElementById("rainIcon");

    rainIcon.addEventListener("click", function(){
        if(rainAuidoPlay.paused){
            rainAuidoPlay.play()
            rainIcon.className = "fa-solid fa-music"
        } else {
            rainAuidoPlay.pause()
            rainIcon.className = "fa-solid fa-cloud-rain"
        }
    })

    const fireAuidoPlay = document.getElementById("fireAuidoPlay");
  const fireIcon = document.getElementById("fireIcon");

  fireIcon.addEventListener("click", function () {
    if (fireAuidoPlay.paused){
        fireAuidoPlay.play()
        fireIcon.className = "fa-solid fa-music"
    }
    else {
        fireAuidoPlay.pause()
        fireIcon.className = "fa-solid fa-fire"   
    } 
    })

    const volumeInput = document.getElementById("volume-input");
    volumeInput.addEventListener("input", function () {
       birdAuidoPlay.volume = volumeInput.value / 100;
       rainAuidoPlay.volume = volumeInput.value / 100;
       fireAuidoPlay.volume = volumeInput.value / 100;

    });






  