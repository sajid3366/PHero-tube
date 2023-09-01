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
    const drawingContainer = document.getElementById('drawing');
    cardContainer.textContent = '';
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    console.log(data);
    const card = data.data;
    if(card.length === 0){
        const div = document.createElement('div');
        div.innerHTML =`
            <div class="w-[400px] m-auto mt-8">
                <div class="flex justify-center mb-3"><img src="image/Icon.png" /></div>
                <p class="text-3xl font-bold text-center">Oops!! Sorry, There is no content here</p>
            </div>

        `;
        drawingContainer.appendChild(div);

    }
    card.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.classList = "p-4";
        const postDateInSecText = element.others.posted_date;
        const vari = document.getElementById('verified');

        div.innerHTML = `
            <img class="rounded-lg w-[330px] h-[200px]" src="${element.thumbnail}" alt="Shoes" />
           
            <p class="bg-black text-white max-w-[200px] absolute px-2 py-1 rounded-lg ml-[130px] mt-[-50px]">${(!!postDateInSecText == true) ? Math.floor(postDateInSecText / 3600) : ''} hrs ${(!!postDateInSecText == true) ? Math.floor((postDateInSecText % 3600) / 60) : ''} min ago</p>
            <div class="flex gap-3 my-5">
                <div>
                    <img class="w-10 h-10 rounded-[50%]" src=${element.authors[0]?.profile_picture} />
                </div>
                
                <div class="">
                    <h2 class="card-title font-bold">${element.title}</h2>
                    <div class="flex gap-2 mt-2 mb-2">
                    <p>${element.authors[0]?.profile_name}</p>
                    
                    <img class="" id="verified" src="image/fi_10629607.png" alt="">
                    <p></p>


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

const blogBtn = ()=>{
    window.location.href = "http://127.0.0.1:5500/blog.html";

}


loadData();