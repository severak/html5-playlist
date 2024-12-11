// Automatic playlist for HTML5 audio tags.
//
// Based on code by lijnenspel posted on lines forum (https://llllllll.co/t/izzzzi-net-username-sharing/69588/239)

pauseOthers = (e) => {
    document.querySelectorAll("audio").forEach((a) => {
        if (e.target != a) {
            a.pause()
        }
    })
}

playNext = (e) => {
    let allaudio = Array.from(document.querySelectorAll("audio"));
    let nextid = allaudio.indexOf(e.target) + 1
    if(allaudio[nextid]){
        allaudio[nextid].play()
    }
}

document.querySelectorAll("audio")
    .forEach((a) => {
        a.addEventListener("play", pauseOthers)
        a.addEventListener("ended", playNext)
    })
