const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categorys = data.data;
    // console.log(data);
    tabContainer(categorys);
}

const tabContainer = (categorys) => {
    const tabContainer = document.getElementById('category-container');
    console.log(categorys);
    categorys.forEach(category => {
        const div = document.createElement('div');

        div.innerHTML = `
        <button class="btn ml-4 px-8 py-1 capitalize bg-gray-300">${category.category}</button>

        `;
        tabContainer.appendChild(div);

        console.log(category);
    })
}


loadData();