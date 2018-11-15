const $div = $('div');
const $form = $('form');
const $searchInput = $('#search');
const linkTemplate = "https://api.github.com/search/users?q=";



$form.submit(function (event) {
    event.preventDefault();
    $('img').remove();

    const fullLink = linkTemplate + $searchInput.val();
    
    const request = $.ajax({
        url: fullLink,
        method: "GET"
    });
    
    request.done(function(response){
        
        const itemList = response.items;

        for (const item of itemList) {
            const $img = $('<img>');

            $img.attr('src', item.avatar_url);
            $div.append($img);
        }

        console.log(itemList);
    });

    request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
        });

});
