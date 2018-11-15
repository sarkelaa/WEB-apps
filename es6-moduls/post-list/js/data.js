function fetchData(onSuccess, onError) {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            // Success!

            var data = JSON.parse(request.responseText);
            onSuccess(data);
        } else {
            // We reached our target server, but it returned an error
            onError();
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort

    };

    request.send();
}
export {
    fetchData
};