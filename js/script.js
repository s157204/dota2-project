fetch("../assets/json/dota2.json")
    .then(response => response.json())
    .then(dota => {
        dota.forEach(dota => console.log(dota.image_url));
const container = document.getElementById('imageContainer');

dota.forEach(dotaItem => {
    const imgElement = document.createElement('img');
    imgElement.src = dotaItem.image_url;
    imgElement.alt = "dota image";
    imgElement.style.width = "250px";


    container.appendChild(imgElement);
})

    })
    .catch(error => console.error("Fout bij laden JSON:", error));
