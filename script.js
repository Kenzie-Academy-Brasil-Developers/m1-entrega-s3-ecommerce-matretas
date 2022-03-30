const cardsBox = document.querySelector(".cardsBox");

const cartInner = document.querySelector(".cartInner");       

const cart = [];

function addCards(a) {
    
    for(let i = 0; i < a.length; i++) {

        const div = document.createElement("div");

        div.classList.add("cards");

        div.setAttribute("id", a[i].id);

        cardsBox.appendChild(div);

        const figure = document.createElement("figure");

        figure.classList.add("cardHeader");

        div.appendChild(figure);

        const img = document.createElement("img");

        img.src = a[i].imgSrc;

        img.alt = a[i].imgAlt;

        figure.appendChild(img); 

        const figCaption = document.createElement("figcaption");

        figCaption.innerText = a[i].figCaption

        figure.appendChild(figCaption);

        const article = document.createElement("article");

        article.classList.add("cardBody");

        div.appendChild(article);

        const button = document.createElement("button");

        button.innerText = a[i].button;

        button.addEventListener("click", (e) => {

            console.log(e.path[0].outerText);

            const navFilter = document.querySelector(`.${e.path[0].outerText}`);

            const li = document.querySelectorAll("li");

            for(let i = 0; i < li.length; i++) {

                const filter = document.querySelector(`.${li[i].outerText}`);

                if(e.path[0].outerText === li[i].outerText) {

                    filter.style.fontWeight = "bold"

                    filter.style.color = "#333333";

                } else {

                    filter.style.fontWeight = "normal";

                    filter.style.color = "#828282";
                };
            };

            const items = [];

            for(let i = 0; i < cardsInfos.length; i++) {

                if (cardsInfos[i].button === e.path[0].outerText) {

                    items.push(cardsInfos[i]);
                };
            };

            cardsBox.innerHTML = "";
            
            addCards(items);
        })

        article.appendChild(button);

        const h3 = document.createElement("h3");

        h3.innerText = a[i].nome;

        article.appendChild(h3);

        const p = document.createElement("p");

        p.innerText = a[i].descricao;

        article.appendChild(p);

        const preco  = document.createElement("span");

        preco.innerText = `R$ ${a[i].preco}.00`;

        article.appendChild(preco);

        const addCart = document.createElement("button");

        addCart.classList.add("addToCart");
        
        addCart.innerText = "Adicionar ao Carrinho";

        article.appendChild(addCart);

        addCart.addEventListener("click", (e) => {

            let inCart = undefined;

            for(let i = 0; i < cart.length; i++) {

                if (cart[i].id === Number(e.path[2].id)) {

                    inCart = cart[i];
                };
            };

            if (inCart) {

                inCart["quantity"]++;

            } else {

                let item = undefined;

                for(let i = 0; i < cardsInfos.length; i++) {

                    if (cardsInfos[i].id === Number(e.path[2].id)) {

                        item = cardsInfos[i];
                    };
                };

                item["quantity"] = 1;

                cart.push(item);
            };

            const qnt = document.querySelector(".qnt");

            let count = 0;

            for(let i = 0; i < cart.length; i++) {

               count += cart[i].quantity;
            };

            qnt.innerText = count;

            const prize = document.querySelector(".prize");

            let totalPrize = 0;

            for(let i = 0; i < cart.length; i++) {

               totalPrize += cart[i].quantity * cart[i].preco;
            };

            prize.innerText = "R$ " + totalPrize + ".00";

            if (count === 1) {

                const hide = document.querySelector("table");

                hide.classList.remove("hide");
            };

            showInCart(cart);
        });
    };
};

addCards(cardsInfos);

function showInCart(a) {
    
    cartInner.innerHTML = "";

    for(let i = 0; i < a.length; i++) {

        const product = a[i];

        const card = document.createElement("div");

        card.classList.add("productList");

        card.setAttribute("id", product.id)

        const figure = document.createElement("figure");

        card.appendChild(figure);

        const img = document.createElement("img");

        img.src = product.imgSrc;

        figure.appendChild(img);

        const h3 = document.createElement("h3");

        h3.innerText = product.nome;

        card.appendChild(h3);

        const div = document.createElement("div");

        div.classList.add("preco");

        card.appendChild(div);

        const p = document.createElement("p");
        
        p.innerText = "R$ " + product.preco + ".00";
        
        div.appendChild(p);

        const quantity = document.createElement("div");

        quantity.classList.add("quantity");

        div.appendChild(quantity);
        
        const removeButton = document.createElement("button");

        removeButton.classList.add("remove");

        removeButton.innerText = "-";

        removeButton.addEventListener("click", (e) => {

            for(let i = 0; i < cart.length; i++) {

                if (Number(e.path[3].id) === cart[i].id) {
        
                    if(cart[i].quantity > 1) {
        
                        cart[i].quantity--;
        
                    } else {
        
                        cart.splice(i, 1);
                    };
                };
            };

            const qnt = document.querySelector(".qnt");

            let count = 0;

            for(let i = 0; i < cart.length; i++) {

               count += cart[i].quantity;
            };

            qnt.innerText = count;

            const prize = document.querySelector(".prize");

            let totalPrize = 0;

            for(let i = 0; i < cart.length; i++) {

               totalPrize += cart[i].quantity * cart[i].preco;
            };

            prize.innerText = "R$ " + totalPrize + ".00";

            if(cart.length === 0) {
        
                cartInner.innerHTML = `<h3 class="emptyH3">Carrinho Vazio<h3><span class="emptySpan">Adicione produtos</span>`;

                const hide = document.querySelector("table");

                hide.classList.add("hide");

            } else {
        
                showInCart(cart);
            };            
        })

        quantity.appendChild(removeButton)

        const span = document.createElement("span");
        
        span.innerText = product.quantity;
        
        quantity.appendChild(span);

        const addButton = document.createElement("button");

        addButton.classList.add("add");

        addButton.innerText = "+";

        addButton.addEventListener("click", (e) => {

            console.log(e);

            console.log(e.path[3]);

            for(let i = 0; i < cart.length; i++) {
                
                if (cart[i].id === Number(e.path[3].id)) {

                    cart[i].quantity++;
                };
            };

            const qnt = document.querySelector(".qnt");

            let count = 0;

            for(let i = 0; i < cart.length; i++) {

               count += cart[i].quantity;
            };

            qnt.innerText = count;

            const prize = document.querySelector(".prize");

            let totalPrize = 0;

            for(let i = 0; i < cart.length; i++) {

               totalPrize += cart[i].quantity * cart[i].preco;
            };

            prize.innerText = "R$ " + totalPrize + ".00";

            showInCart(cart);
        });

        quantity.appendChild(addButton);

        cartInner.appendChild(card);
    };
};

const filters = ["Todos", "Acessórios", "Calçados", "Camisetas"];

for (let i = 0; i < filters.length; i++) {

    const ul = document.querySelector("ul");

    const li = document.createElement("li");

    ul.appendChild(li);

    const button = document.createElement("button");

    button.innerText = filters[i];

    button.classList.add(filters[i]);

    li.appendChild(button);

    button.addEventListener("click", (e) => {

        if (e.path[0].className === "Calçados") {

            alert("Desculpe, calçados fora de estoque.\nVeja nossas outras ofertas :)");

        } else {

            const filter = [];

            for(let i = 0; i < cardsInfos.length; i++) {
    
                if (cardsInfos[i].button === e.path[0].className) {
    
                    filter.push(cardsInfos[i]);
    
                };
            };
    
            if (filter.length === 0) {

                const li = document.querySelectorAll("li");

                for(let i = 0; i < li.length; i++) {

                    if(li[i].outerText !== e.path[0].className) {

                        const actualFilter = document.querySelector(`.${li[i].outerText}`);

                        actualFilter.style.fontWeight = "normal";

                        actualFilter.style.color = "#828282";
                    };
                }; 

                const todos = document.querySelector(".Todos");

                todos.style.fontWeight = "bold";

                todos.style.color = "#333333";
                    
                cardsBox.innerHTML = "";
                
                addCards(cardsInfos);
            
            } else {

                const li = document.querySelectorAll("li");
                
                for(let i = 0; i < li.length; i++) {

                    if(li[i].outerText !== e.path[0].className) {

                        const actualFilter = document.querySelector(`.${li[i].outerText}`);

                        actualFilter.style.fontWeight = "normal";

                        actualFilter.style.color = "#828282";
                    };
                };                

                const currentFilter = document.querySelector(`.${e.path[0].className}`);

                currentFilter.style.fontWeight = "bold";

                currentFilter.style.color = "#333333";

    
                cardsBox.innerHTML = "";
                
                addCards(filter);
            };
        };
    });
};

const input = document.querySelector("input");

const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", (e) => {

    e.preventDefault();

    const li = document.querySelectorAll("li");
                
    for(let i = 0; i < li.length; i++) {

        const actualFilter = document.querySelector(`.${li[i].outerText}`);

        actualFilter.style.fontWeight = "normal";

        actualFilter.style.color = "#828282";
    };

    let toSearch = input.value;

    const toShow = [];

    for(let i = 0; i < cardsInfos.length; i++) {

        const found = cardsInfos[i].nome.toLowerCase().split(toSearch.toLowerCase());

        if(found.length > 1) {

            toShow.push(cardsInfos[i]);
        };
    };

    if (toShow.length === 0) {

        cardsBox.innerHTML = ""; 

        cardsBox.innerHTML = "Nenhum produto com esse nome encontrado...\nTente novamente."
    
    } else {

        cardsBox.innerHTML = "";

        addCards(toShow);
        input.value = "";
    };
});