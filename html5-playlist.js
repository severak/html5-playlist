(function (document, window) {
    // html5-playlist.js
    // (c) Severák 2021
    // MIT-licensed
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    document.querySelectorAll('audio').forEach(function (audio) {
        if (audio.getAttribute('data-playlist-id') && document.getElementById(audio.getAttribute('data-playlist-id'))) {
            var playlist = document.getElementById(audio.getAttribute('data-playlist-id')).querySelectorAll('li a');
            var playlistTag = document.getElementById(audio.getAttribute('data-playlist-id'));
            if (playlist.length) {
                playlist[0].classList.add('current-track');
                var playingSongNo = 0;

                audio.addEventListener('ended', function () {
                    // track ended, skip to next:
                    playlist.forEach(function (elem) {
                        elem.classList.remove('current-track');
                    });
                    playingSongNo++;
                    if (playlist[playingSongNo]) {
                        audio.src = playlist[playingSongNo].href;
                        playlist[playingSongNo].classList.add('current-track');
                        audio.play();
                    }
                });

                playlistTag.addEventListener('click', function (event) {
                    // track name clicked, play it:
                    event.preventDefault();
                    var ord = 0;
                    playlist.forEach(function (elem) {
                        elem.classList.remove('current-track');
                        if (elem == event.target) {
                            playingSongNo = ord;
                            audio.src = playlist[playingSongNo].href;
                            playlist[playingSongNo].classList.add('current-track');
                            audio.play();
                        }
                        ord++;
                    });
                })
            }
        }
    });
})(document, window);
