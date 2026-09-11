/*-- TOOLTIPS --*/
    var tooltip = document.querySelectorAll('.tooltip');

    document.addEventListener('mousemove', ttp, false);

    function ttp(e) {
        for (var i = tooltip.length; i--;) {
            tooltip[i].style.left = e.pageX + 10 + 'px';
            tooltip[i].style.top = e.pageY + 60 + 'px';
        }
    }

    /*-- MUSIC PLAYER --*/
    var myAudio = document.getElementById("audio");
    var isPlaying = false;

    function togglePlay() {
        isPlaying ? myAudio.pause() : myAudio.play(), myAudio.volume = 0.5;
    };

    myAudio.onplaying = function () {
        isPlaying = true;
    };

    myAudio.onpause = function () {
        isPlaying = false;
    };
