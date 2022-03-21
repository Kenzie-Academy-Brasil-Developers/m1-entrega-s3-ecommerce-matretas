const cardsInfo = [
    {
        id: 1,
        imgSrc: "./Men-Jacket-Front-Black__15466 1.png",
        imgAlt: "Jaqueta Preta Masculina Vista Frontal",
        figCaption: "Jaqueta Preta Masculina Vista Frontal",
        button: "Camisetas",
        nome: "Lightweight Jacket",
        descricao: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        preco: "R$ 100.00"
    }, 
    {        
        id: 2,
        imgSrc: "./image 1.png",
        imgAlt: "Gorro Preto",
        figCaption: "Gorro Preto",
        button: "Acessórios",
        nome: "Black Hat",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco: "R$ 100.00"
    }, 
    {                
        id: 3,
        imgSrc: "./Surgical-Mask-Black__89554 1.png",
        imgAlt: "Máscara Cirúrgica",
        figCaption: "Máscara Cirúrgica",
        button: "Acessórios",
        nome: "Mask",
        descricao: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        preco: "R$ 40.00"
    }, 
    {
        id: 4,
        imgSrc: "./Men-TShirt-Black-Front__70046 1.png",
        imgAlt: "Camiseta Masculina Preta",
        figCaption: "Camiseta Masculina Preta",
        button: "Camisetas",
        nome: "T-Shirt",
        descricao: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        preco: "R$ 100.00"
    }, 
    {
        id: 5,
        imgSrc: "./mockup-a0dc2330__62146 1.png",
        imgAlt: "Camiseta Masculina Branca",
        figCaption: "Camiseta Masculina Branca",
        button: "Camisetas",
        nome: "Short-Sleeve T-Shirt",
        descricao: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        preco: "R$ 100.00"
    }, 
    {
        id: 6,
        imgSrc: "./mockup-9b9894f1__67347 1.png",
        imgAlt: "Jaqueta Embalável Preta",
        figCaption: "Jaqueta Embalável Preta",
        button: "Camisetas",
        nome: "Champion Packable Jacket",
        descricao: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        preco: "R$ 100.00"
    }
];

const cardsBox = document.querySelector(".cardsBox");

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

        article.appendChild(button);

        const h3 = document.createElement("h3");

        h3.innerText = a[i].nome;

        article.appendChild(h3);

        const p = document.createElement("p");

        p.innerText = a[i].descricao;

        article.appendChild(p);

        const preco  = document.createElement("span");

        preco.innerText = a[i].preco;

        article.appendChild(preco);

        const addCart = document.createElement("span");

        article.appendChild(addCart);

        const link = document.createElement("a");

        link.href = "#";

        link.innerText = "Adcionar ao Carrihno";

        addCart.appendChild(link)

    };
};

addCards(cardsInfo);