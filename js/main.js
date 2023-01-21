$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true
    });
});

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video_picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoBtn.addEventListener('click', function (){
    videoPicture.classList.add('none');
    videoWrapper.classList.remove('video-overlay');
    videoBtn.classList.add('none')
    if(video.paused){
        video.play()
    }
});

video.addEventListener('click', function (){
    video.pause();
    videoBtn.classList.remove('none');
    videoWrapper.classList.add('video-overlay');
})