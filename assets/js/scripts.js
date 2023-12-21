document.addEventListener("DOMContentLoaded", () => {
    function loadProgress() {
        let elem = document.querySelectorAll(".progress-bar");
        let width = 1;
        
        elem.forEach(e => {
            let id = setInterval(frame, 15);
            function frame() {
                let pct = parseInt(e.dataset.pct);
                if (width >= pct) {
                    clearInterval(id);
                } else {
                    width++;
                    e.style.width = width + "%";
                }
            }
        });
    }

    let skillsBtn = document.querySelector("button#pills-skills-tab")
    skillsBtn.addEventListener("click", function(e) {
        loadProgress();
    })

});