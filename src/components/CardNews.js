class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anônimo");

        const linkTitulo = document.createElement("a");
        linkTitulo.textContent = this.getAttribute("titulo");
        linkTitulo.href = this.getAttribute("link-url");

        const conteudoNoticia = document.createElement("p");
        conteudoNoticia.textContent = this.getAttribute("conteudo");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitulo);
        cardLeft.appendChild(conteudoNoticia);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("photo");
        cardRight.appendChild(imagem);
        

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    styles() {
        const style = document.createElement("style"); 
        style.textContent = 
        `
        img {
            width: 250px;
            height: 150px;
        }

        .card {
            width: 800px;
            box-shadow: 7px 6px 6px 2px rgba(0,0,0,0.49);
            -webkit-box-shadow: 7px 6px 6px 2px rgba(0,0,0,0.49);
            -moz-box-shadow: 7px 6px 6px 2px rgba(0,0,0,0.49);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
        }
        
        .card_left > p {
            color: rgb(105, 105, 105);
        }
        `
        return style;
    }
}

customElements.define('card-news', CardNews);