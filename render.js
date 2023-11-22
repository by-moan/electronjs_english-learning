/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

function init(){
    this.bt1 = document.getElementById("bt1");
}
var title_val;

bt1.addEventListener('click', function(event){
    title_val = document.getElementById("inp_txt1").value;
    window.el_API.setTitle(title_val);
    window.run_app.run();
});
window.thing.func();