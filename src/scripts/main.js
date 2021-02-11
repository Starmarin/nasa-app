const
    beep = document.querySelector("#beep"),
    beepDesc = document.querySelector("#beep_desc"),
    musicFrame = document.querySelector("#bg_music"),
    containerDesc = document.querySelector("#container_desc"),
    backToSub = document.querySelector("#back_to_sub"),
    sections = document.querySelector(".section"),
    music = document.querySelector("#sound_ico");


music.addEventListener("click", function () {
    beep.play();
    musicFrame.play();
    music.classList.toggle("do_wave");
    music.style.left = "calc(100% - 15rem)";

    if (music.classList.contains("do_wave")) {
        music.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        console.log("Sound Off");
        music.innerHTML = '<i class="fas fa-pause"></i>';
        musicFrame.pause();
    }
});






