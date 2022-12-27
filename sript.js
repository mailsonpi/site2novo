 let button = document.querySelector(".button");

        button.addEventListener("click", () => {
            button.classList.add("active");

            setTimeout(() => {
                button.classList.remove("active");
                document.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle");
                document.querySelector(".button-text").innerText = "Concluído";
            }, 6000)

            setTimeout(() => {
                button.classList.add("remove");
                document.querySelector("i").classList.replace("bx-check-circle", "bx-cloud-download");
                document.querySelector(".button-text").innerText = "Download";
            }, 9000)

            setTimeout(() => {
                button.classList.remove("remove");
            }, 9080)
        })
       