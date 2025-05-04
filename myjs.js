document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll
    const navbarLinks = document.querySelectorAll("nav a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active nav link on scroll
    window.addEventListener("scroll", function () {
        let current = "";
        const sections = document.querySelectorAll("section");
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Alert on resume button click
    const resumeButton = document.querySelector(".profile-text button");
    if (resumeButton) {
        resumeButton.addEventListener("click", function () {
            alert("Opening resume in a new tab!");
        });
    }
});
