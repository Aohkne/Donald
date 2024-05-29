// open-close menu
// const icon = document.getElementsByClassName('fa-bars');
let nav = document.querySelector('.menu-icon');

let menu = document.querySelector('.menu');
let menuContainer = document.querySelector('.menu-container');
let videoContainer = document.querySelector('.video_container');

nav.onclick = function () {
    // menuContainer.classList.toggle('l-3', 'l-1');
    if (menu.style.display == 'none') {

        //menu
        menu.style.display = 'block';
        menuContainer.classList.add('l-3');
        menuContainer.classList.remove('l-0');

        //video
        videoContainer.classList.add('l-9');
        videoContainer.classList.remove('l-12');

    } else {
        //menu
        menu.style.display = 'none';
        menuContainer.classList.add('l-0');
        menuContainer.classList.remove('l-3');

        //video
        videoContainer.classList.add('l-12');
        videoContainer.classList.remove('l-9');
    }

};

// //open - close content
// let title = document.querySelectorAll('.menu-title');

// menu.forEach(function (element) {
//     let child = element.childNodes;
//     child.forEach(function (e) {
//         console.log(e.nodeName);
//         if (e.nodeName == "H1") {
//             e.onclick = function () {
//                 child.forEach(function (item) {
//                     if (item.nodeName == "A") {
//                         if (item.style.display == 'none') {
//                             item.style.display = 'block';
//                         } else {
//                             item.style.display = 'none';

//                         }
//                     }
//                 });
//             };
//         }
//     });
//     // child.onclick()

// });

