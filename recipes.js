$(document).ready(function () {
    $('#searchButton').on('click', function () {
        $.ajax({
            url: `https://api.spoonacular.com/recipes/complexSearch?query=${$('#searchValue').val()}&apiKey=1d0e17601e9a41f9aa5f60b6c1622fd4`
        }).done(function (data) {
            const searchResults = document.querySelector('.searchResults');
            searchResults.innerHTML = "";
            
            data.results.forEach(recipe => {
                const newItem = document.createElement('div');
                newItem.classList.add('recipe');
                newItem.innerHTML = `<h3>${recipe.title}</h3><a href="ingredients.html?id=${recipe.id}"><img src=${recipe.image} /></a>`;
                searchResults.appendChild(newItem);
            });
        });
    });
});
