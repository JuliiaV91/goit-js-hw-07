
const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const items = category.querySelectorAll("ul li");

    console.log(`Category: ${title}`);
    console.log(`Elements: ${items.length}`);

    items.forEach(item => {
        item.classList.add("category-item");
    });
});