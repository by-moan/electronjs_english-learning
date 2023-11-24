/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
document.addEventListener("DOMContentLoaded", function(event) {
    bt1 = document.getElementById("info_al_but");
    notif = document.getElementById("notif_background");

    notif.style.display = "none";

    bt1.addEventListener("click", (event) =>{
        alert("asd");
    });
});

bt1.addEventListener("click", (event) =>{
    alert("asd");
});