// open-close menu
// const icon = document.getElementsByClassName('fa-bars');
let nav = document.querySelector('.menu-icon');
let menu = document.querySelectorAll('.menu-item');

nav.onclick = function () {
    menu.forEach(function (item) {
        if (item.style.display == 'none') {
            // document.querySelector('.fa-bars').classList.add('fa-x');
            item.style.display = 'block';
        } else {
            // document.querySelector('.fa-bars').classList.remove('fa-x');
            item.style.display = 'none';

        }
    });
};

//open - close content
let title = document.querySelectorAll('.menu-title');

menu.forEach(function (element) {
    let child = element.childNodes;
    child.forEach(function (e) {
        console.log(e.nodeName);
        if (e.nodeName == "H1") {
            e.onclick = function () {
                child.forEach(function (item) {
                    if (item.nodeName == "A") {
                        if (item.style.display == 'none') {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';

                        }
                    }
                });
            };
        }
    });
    // child.onclick()

});
