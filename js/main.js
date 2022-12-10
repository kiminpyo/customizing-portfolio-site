function App() {
    const aboutMe = document.querySelector("#about-me");
    const introduceMe = document.getElementById("introduce-me");
    const introduceClose = document.querySelector(".head-introduce-close");
    aboutMe.addEventListener("mouseover", (e) => {
        introduceMe.style.display = "block";
    });

    introduceClose.addEventListener("click", () => {
        introduceMe.style.display = "none";
    });
}

const app = new App();
