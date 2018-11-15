const $searchInput = document.querySelector("#search");
const $goButton = document.querySelector("#go");
const linkTemplate = "http://api.geoiplookup.net/?query=";
const $list = document.querySelector('ul');





$goButton.addEventListener("click", function () {

    const newRequest = new XMLHttpRequest();
    const searchValue = $searchInput.value;
    newRequest.open('GET', searchValue);


    newRequest.onload = function (event) {
        if (newRequest.status >= 200) {
            const response = newRequest.responseXML;
            console.log(response);


            const $listItem = document.createElement("li");
            $listItem.textContent = response.querySelector('city').textContent;
            $list.appendChild($listItem);
        }
    }

    newRequest.send();
});



