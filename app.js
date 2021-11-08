const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const loader = document.querySelector(".main-loader");
const labels = document.querySelector(".labels");

lookupBtn.addEventListener("click", ()=> {
    labels.style.display = "none";
    loader.style.display = "flex";
    axios.get("https://ipapi.co/json/").then(response=>{
        loader.style.display = "none";
        labels.style.display = "flex";
        ipDisplay.textContent = `Ip: ${response.data.ip}`;

        locationDisplay.textContent = `Location: ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;

        geoDisplay.textContent = `Geo-Location: ${response.data.latitude}, ${response.data.longitude}`;
    });
    
});


