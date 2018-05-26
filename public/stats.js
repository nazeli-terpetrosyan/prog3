
function main() {
    var socket = io();
    function statistics(statistics) {
        document.getElementById("Grass").style.width = statistics.Grass * 7 + "px";
        document.getElementById("Xotaker").style.width = statistics.Xotaker * 7 + "px";
        document.getElementById("Gishatich").style.width = statistics.Gishatich * 7 + "px";
        document.getElementById("Human").style.width = statistics.Mard * 7 + "px";
    }
    socket.on('statistics', statistics);
}
window.onload = main;