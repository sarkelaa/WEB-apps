function displayPosts(postList) {
    var $list = document.querySelector("ul");

    for (let i = 0; i < postList.length; i++) {
        const post = postList[i];

        var $listItem = document.createElement("li");
        $listItem.textContent = post.title;
        $list.appendChild($listItem);
    }
};

export {
    displayPosts
}