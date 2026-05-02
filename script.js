document.addEventListener("DOMContentLoaded", function () {

             const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

document.querySelector('a[href="#booking"]').addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#booking").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

    
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function () {

            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

        });
    });


        const bookBtn = document.querySelector(".form .btn");

    if (bookBtn) {
        bookBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const inputs = document.querySelectorAll(".form input, .form select, .form textarea");

            let allFilled = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    allFilled = false;
                }
            });

            if (!allFilled) {
                bookBtn.textContent = "Please fill all fields";
                bookBtn.style.background = "#a12b2b";

                setTimeout(() => {
                    bookBtn.textContent = "Book Now";
                    bookBtn.style.background = "linear-gradient(90deg, #923B1B, #ff7a2f)";
                }, 2000);

                return;
            }

            bookBtn.textContent = "Booked Successfully!";
            bookBtn.style.background = "#2e7d32";

            setTimeout(() => {
                bookBtn.textContent = "Book Now";
                bookBtn.style.background = "linear-gradient(90deg, #923B1B, #ff7a2f)";
            }, 3000);
        });
    }

});
