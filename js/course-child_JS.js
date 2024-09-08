// open-close menu
// const icon = document.getElementsByClassName('fa-bars');
let navIcon = document.querySelector('.nav-icon');
let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');
let menuBefore = document.querySelector(('.menu'), ':before');

let menuContainer = document.querySelector('.menu-container');
let videoContainer = document.querySelector('.video_container');


navIcon.onclick = () => {
    menu.style.display = 'block';
};

menuIcon.onclick = () => {
    menu.style.display = 'none';
};

menuBefore.onclick = () => {
    menu.style.display = 'none';
};




// show list course (đường dẫn dựa vào file html được link vào)
// let videoContainer = document.querySelector('.video_container');
let listCourse = "";
fetch("./js/database/courseChild.json")

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
let titlePage = document.querySelector('title');

function watch(title, url, date, description) {
    // let videoContainer = document.querySelector('.video_container');

    console.log(title)
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
                ${description}<br><br>
                Chào mừng các bạn đến với kênh chính chủ của dự án Donald với những thước phim, câu chuyện giúp hỗ trợ tăng mức độ tập trung cho trẻ em.
                Hãy ủng hộ dự án chúng mình bằng cách like, nhận xét và đừng quên đăng ký nhé!
            </div>

            <a href="${url}" class="video-link">Source:${url}</a>
 
        </div> 
        `;

    titlePage.innerHTML = `${title}`;
    videoContainer.innerHTML = video + listCourse;

    //call check face
    loadFaceAPI().then(getCameraStrem);
}





// Check face
let checkface = document.getElementById('videoCheckFace');
let botNotification = document.querySelector('.botNotification');

//gọi api check khuôn mặt
const loadFaceAPI = async () => {
    await faceapi.nets.faceLandmark68Net.loadFromUri('./js/For_Check-Face/model');
    await faceapi.nets.faceRecognitionNet.loadFromUri('./js/For_Check-Face/model');
    await faceapi.nets.tinyFaceDetector.loadFromUri('./js/For_Check-Face/model');
    // các thông tin dự đoán về biểu cảm trên web cam
    await faceapi.nets.faceExpressionNet.loadFromUri('./js/For_Check-Face/model');
}

// Function lấy luồng để mở camera
function getCameraStrem() {
    //nếu trình duyệt có hỗ trợ thì gọi ra để sử dụng
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: {} })
            .then(stream => {
                checkface.srcObject = stream;
            })
    }
}


checkface.addEventListener('playing', () => {
    // const canvas = faceapi.createCanvasFromMedia(video);
    // document.body.append(canvas);

    setInterval(async () => {
        const detectFace = await faceapi.detectAllFaces(checkface, new faceapi.TinyFaceDetectorOptions());
        var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
        // console.log(detectFace);
        if (detectFace.length == 0) {
            // Show notification when dont detect face
            // console.log('Cảnh báo khuông mặt đã rời khỏi khung hình');
            botNotification.style.display = 'block';
            botNotification.innerHTML = 'Warning: face has left the screen';

            //Pause video when dont detect face
            iframe.postMessage(
                '{"event":"command","func":"' + 'pauseVideo' + '","args":""}',
                "*"
            );

        } else {
            botNotification.style.display = 'none';

            //Play video when dont detect face
            iframe.postMessage(
                '{"event":"command","func":"' + 'playVideo' + '","args":""}',
                "*"
            );
        }
    }, 3000)
})




