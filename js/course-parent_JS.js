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



// show list course (đường dẫn dựa vào file html được link vào)
// let videoContainer = document.querySelector('.video_container');
let listCourse = "";
fetch("./js/database/courseParent.json")

    .then(function (response) {
        return response.json();
    })

    .then(function (course) {
        // console.log(course)
        listCourse = `<div class="course-title">Course</div>
                        <div class="course-container row">`;

        for (let c of course) {

            listCourse += `
            <div class="course-item col l-3 m-6 c-12" onclick="watch('${c.title}','${c.url}','${c.date}','${c.description}')">
                <a href="#" class="course-item-link">
                <img src="${c.img}" alt=""class="course-item-img">
                </a>
            <h1 class="course-item-title">${c.title}</h1>
            </div>
            `;

        }
        listCourse += `</div>
                    </div > `;
        videoContainer.innerHTML = listCourse;
    })


    .catch(function (error) {
        console.error('Error:', error);
    });






//show video when click
let video = "";
function watch(title, url, date, description) {
    // let videoContainer = document.querySelector('.video_container');
    console.log(title)
    console.log(url)
    video = `
        <iframe src="${url + "?rel=0&enablejsapi=1"}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <div class="video-title">${title}</div>

        <div class="video-description">

            <div class="video-date">
                ${date}
            </div>

            <div class="video-content">
                ${description}
            </div>

            <a href="${url}" class="video-link">Source:${url}</a>
        </div> 
        `;

    videoContainer.innerHTML = video + listCourse;
}









