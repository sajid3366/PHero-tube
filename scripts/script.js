const loadData = async (Id = "1000") => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const categorys = data.data;
    // console.log(data);
    tabContainer(categorys);
    showCardBtn(Id)
}

const tabContainer = (categorys) => {
    const tabContainer = document.getElementById('category-container');
    // console.log(categorys);
    categorys.forEach(category => {
        const div = document.createElement('div');

        div.innerHTML = `
        <button onclick="showCardBtn('${category.category_id}')" class="btn text-xl ml-4 px-8 py-1 capitalize bg-gray-300">${category.category}</button>

        `;
        tabContainer.appendChild(div);
        console.log(category.category_id);

        // console.log(category);
    })
}

const showCardBtn = async (id) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    // console.log(data.data);
    const card = data.data;
    card.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.classList = "p-4";
        const postDateInSecText = element.others.posted_date;
        // console.log(postDateInSecText);
        if (!!postDateInSecText == true) {
            console.log(postDateInSecText);
            const hour = Math.floor(postDateInSecText/3600);
            const secIntoMin = postDateInSecText%3600;
            const min = Math.floor(secIntoMin/60);
            console.log(hour);
            console.log(min);
            const time = document.getElementById('time');
            time.innerText = `${hour} ${min}`;
        }
        else {
            console.log("hello vai");
        }
        div.innerHTML = `
            <img class="rounded-lg w-[330px] h-[200px]" src="${element.thumbnail}" alt="Shoes" />
            <p>${postDateInSecText}</p>
            <div class="flex gap-3 my-5">
                <div>
                    <img class="w-10 h-10 rounded-[50%]" src=${element.authors[0]?.profile_picture} />
                </div>
                
                <div class="">
                    <h2 class="card-title font-bold">${element.title}</h2>
                    <div class="flex gap-2 mt-2 mb-2">
                    <p>${element.authors[0]?.profile_name}</p>
                    <p>${(element.authors[0]?.verified) ? "hello" : "no hello"}</p>
                    </div>
                    <p>${element.others?.views} views</p>
                    
                    
                </div>
            </div>
    
    `;
        cardContainer.appendChild(div)
        categoryBtn(id);


    })


}

const categoryBtn = (id) => {

}


loadData();