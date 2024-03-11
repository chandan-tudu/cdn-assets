// Get the button element
const scrollToTop = document.getElementById("scrollToTop");
const gdprBtn = document.getElementById("gdpr-btn");
if (scrollToTop) {
    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        // Check if the user has scrolled down by at least 300 pixels
        if (
            document.body.scrollTop > 1000 ||
            document.documentElement.scrollTop > 1000
        ) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });

    // Add a click event listener to scroll back to the top
    scrollToTop.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
}

if (gdprBtn) {
    gdprBtn.addEventListener("click", function () {
        document.cookie =
            "codingyet_gdpr=1;path=/;max-age=" + 60 * 60 * 24 * 30;
        if (document.cookie) {
            document.querySelector(".gdpr-msg").style.display = "none";
        } else {
            alert("Cookie Can't be set!");
        }
    });
}
