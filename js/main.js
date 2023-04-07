// SidBar Angle 
const sidebarAngle = () => {
    const sidebar = document.querySelector(".sidebar"),
        btnAngle = document.querySelector(".sidebar button"),
        angle = document.querySelector(".sidebar button i");

        btnAngle.addEventListener("click", () => {
            if (sidebar.classList.contains("sidebar-n-fold")) {
                sidebar.classList.replace("sidebar-n-fold", "sidebar-fold");
                angle.className = "fas fa-angle-left fa-fw";
            } else {
                sidebar.classList.replace("sidebar-fold", "sidebar-n-fold");
                angle.className = "fas fa-angle-right fa-fw";
            }
        });
};
sidebarAngle();
// --------------------------------------------------------
// Done Tasks and Delete
const tasks = () => {
    const info = document.querySelectorAll(".task .info"),
        trash = document.querySelectorAll(".task .delete");
    // -------------------
    info.forEach((ev) => {
        ev.addEventListener("click", () => {
            ev.classList.toggle("done");
            ev.parentElement.classList.toggle("done");
        });
    });
    // -------------------
    trash.forEach((ev) => {
        ev.addEventListener("click", () => {
            ev.parentElement.remove();
        });
    })
};
tasks();
// --------------------------------------------------------
// --------------------------------------------------------
// const mode = () => {
//     const mode = document.getElementById("mode"),
//         change = document.getElementById("change");
    
//     mode.addEventListener(("click"), () => {
//         if (change.classList.contains("light")) {
//             change.classList.replace("light", "dark");
//         } else {
//             change.classList.replace("dark", "light");
//         }
//     });

// };
// mode();
// --------------------------------------------------------