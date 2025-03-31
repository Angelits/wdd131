document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    return "N/A";
}

let temp = parseFloat(document.getElementById("temperature").textContent);
let windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);