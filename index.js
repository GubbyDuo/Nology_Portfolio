const sections = document.getElementsByClassName("section");
let navLinks = document.getElementsByClassName("navbar--link");
let clickedIcon = "";

window.onscroll = function () {
    var current = "";

    Object.keys(sections).forEach((section) => {
        if (window.pageYOffset >= sections[section].offsetTop - 500) {
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

function iconClick(iconId) {
    let iconClickText = "";
    switch (iconId) {
        case "reactIcon":
            iconClickText =
                "I started learning React.Js in 2019 during my Diploma of Software Development. Since then, I have developped a lot more skills in Javascript and have come to revise and perfect my knowledge of React during my time at _Nology";
            if (clickedIcon) {
                console.log(clickedIcon);
                document.getElementById(clickedIcon).style.backgroundColor =
                    "initial";
            }
            document.getElementById(iconId).style.backgroundColor = "gray";
            break;
        case "cSharpIcon":
            iconClickText =
                "I have used C# in both ASP.Net MVC for web design and in Unity for video game development both of which were useful for Tafe courses I have completed.";
            if (clickedIcon) {
                console.log(clickedIcon);
                document.getElementById(clickedIcon).style.backgroundColor =
                    "initial";
            }
            document.getElementById(iconId).style.backgroundColor = "gray";
            break;
        case "jsIcon":
            iconClickText =
                "Javascript has been very useful in both my courses and my own personal projects. Javascript was the first language I tried to use when I was a kid, and is now the language I have used the most.";
            if (clickedIcon) {
                console.log(clickedIcon);
                document.getElementById(clickedIcon).style.backgroundColor =
                    "initial";
            }
            document.getElementById(iconId).style.backgroundColor = "gray";
            break;
        case "sqlIcon":
            iconClickText =
                "I have used SQL in both my Tafe courses and my personal projects. I really enjoy implementing data into other languages to see my projects automate themselves.";
            if (clickedIcon) {
                console.log(clickedIcon);
                document.getElementById(clickedIcon).style.backgroundColor =
                    "initial";
            }
            document.getElementById(iconId).style.backgroundColor = "gray";
            break;
        case "gitIcon":
            iconClickText =
                "I started using Git during one of my Tafe courses, and at the time it was very confusing and often frustrating. Since then however, I have learnt how to properly make use of it, and now use it for all projects I work on.";
            if (clickedIcon) {
                console.log(clickedIcon);
                document.getElementById(clickedIcon).style.backgroundColor =
                    "initial";
            }
            document.getElementById(iconId).style.backgroundColor = "gray";
            break;
        case "javaIcon":
            iconClickText =
                "I have used java in both object oriented and functional programming. My first experience with java was using a game engine called Jmonkey, since then I have developed a much deeper understanding of object oriented programming.";
            if (clickedIcon) {
                console.log(clickedIcon);
                document.getElementById(clickedIcon).style.backgroundColor =
                    "initial";
            }
            document.getElementById(iconId).style.backgroundColor = "gray";
            break;
        case "springIcon":
            iconClickText =
                "I have used the Spring boot, a Java framework, to create example microservices which integrate with Rest APIs and SQL databases. Spring boot is one of the latest technologies I have learnt, and am still currently developing my skills with.";
            if (clickedIcon) {
                console.log(clickedIcon);
                document.getElementById(clickedIcon).style.backgroundColor =
                    "initial";
            }
            document.getElementById(iconId).style.backgroundColor = "gray";
            break;
        default:
            break;
    }
    if (clickedIcon == iconId) {
        iconClickText = "";
        clickedIcon = "";
        document.getElementById(iconId).style.backgroundColor = "initial";
    } else {
        clickedIcon = iconId;
    }
    document.getElementById("skillsText").innerHTML = iconClickText;
}
