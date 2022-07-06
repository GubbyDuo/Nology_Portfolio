const sections = document.getElementsByClassName("section");
let navLinks = document.getElementsByClassName("navbar--link");

window.onscroll = function () {
    var current = "";

    Object.keys(sections).forEach((section) => {
        if (window.pageYOffset >= sections[section].offsetTop - 800) {
            current = sections[section].getAttribute("id");
            console.log("window offset:" + window.pageYOffset);
            console.log("section offset:" + sections[section].offsetTop);
            console.log("ID: " + current);
        }
    });
    Object.keys(navLinks).forEach((navLink) => {
        if (navLinks[navLink].classList.contains("active")) {
            navLinks[navLink].classList.remove("active");
        }
        if (navLinks[navLink].classList.contains(current)) {
            navLinks[navLink] = navLinks[navLink].classList.add("active");
        }
    });
};
