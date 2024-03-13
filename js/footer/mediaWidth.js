window.addEventListener("resize", function () {
    if (window.innerWidth < 962) {
        this.document.getElementById("phone").placeholder = "+38 (___) ___-__-__*";
    } else {
        this.document.getElementById("phone").placeholder = "Ваш номер телефона";
    }
});