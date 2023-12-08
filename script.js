let pervious = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let slider = document.querySelector("#duration_slider");
let track_image = document.querySelector("#track_image");


let timer;
let autoplay = 1;

let index_no = 0;
let plaing_song = false;

let track = document.createElement('audio');

let All_song = [
    {
        name: "Oru Manam",
        path: "music/Oru Manam.mp3",
        img: "images/img1.webp",
        artist: "Harris JayaRaj"
    },
    {
        name: "Bae",
        path: "music/Bae.mp3",
        img: "images/img2.jpeg",
        artist: "Vishnu Edavan"
    },
    {
        name: "Railin Oligal",
        path: "music/Railin Oligal.mp3",
        img: "images/img3.jpg",
        artist: "Uma Devi"
    },
    {
        name: "Touching-Touching",
        path: "music/Touching-Touching.mp3",
        img: "images/img4.avif",
        artist: "Karthi"
    },
];

function load_track(index_no) {
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].artist;


    timer = setInterval(range_slider, 1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;

}
load_track(index_no);

function justplay() {
    if (plaing_song == false) {
        playsong();
    }
    else {
        pausesong();
    }
}

function reset_slider() {
    slider.value = 0;
}

function playsong() {
    track.play();
    plaing_song = true;
    play.innerHTML = '<i class="fa fa-pause></i>'
}

function next_song() {
    if (index_no < All_song.length - 1) {

        index_no += 1;
        load_track(index_no);
        playsong();
    }
    else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

function pervious_song() {
    if (index_no > 0) {

        index_no -= 1;
        load_track(index_no);
        playsong();
    }
    else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}