const $goButton = document.querySelector("input");
const $body = document.querySelector("body");

$goButton.addEventListener("click", function () {

    const newRequest = new XMLHttpRequest();
    newRequest.open('GET', 'https://dog.ceo/api/breeds/image/random');


    newRequest.onload = function (event) {
        if (newRequest.status >= 200) {
            const response = JSON.parse(newRequest.responseText);
            console.log(response);


            const $image = document.createElement("img");
            $image.setAttribute("src", response.message);
            $body.appendChild($image);
        }
    }

    newRequest.send();
});

