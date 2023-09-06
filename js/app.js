window.addEventListener("load", () => {
    let circles = document.body.querySelectorAll(".c1, .c2, .c3, .c4, .c5, .c6");
    let header = document.body.querySelector("header");
    // carousel
    circles.forEach(circle => {
        circle.addEventListener("click", (e) => {
            circles.forEach(x => {
                x.classList.remove("fa-solid");
                x.classList.add("fa-regular");
            });
            e.target.classList.toggle("fa-regular");
            e.target.classList.toggle("fa-solid");
            let clicked = e.target.classList[1].split("")[1];
            console.log(clicked);
            header.style.background = `url(/img/img${clicked}.jpg) no-repeat center`;

        });
    });

    //Card of news

    const GenerateContent = class {
        news = {
        1: ["memory",
            "memory-cards",
            "steam xbox one",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi."],
        2: ["space",
            "space invaders",
            "origin play station 4",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi."],
        3: ["soon",
            "your next game",
            "steam uplay",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi."],
        4: ["soon",
            "your next game",
            "steam uplay",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi."],
        5: ["soon",
            "your next game",
            "steam uplay",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi."],
        6: ["soon",
            "your next game",
            "steam uplay",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi."],
    }

    getCard = () => {
        let card = `
        <div>
            <a href="#">
                <img src="img/nnn.jpg" alt="" class="images">
                <h5>xxx</h5>
                <p class="p1"><i class="fa-solid fa-desktop"></i> zzz</p>
                <p class="p2">yyy</p>
            </a>
        </div>
        `;
        return card;
    };

    htmlToElement = (html) => {
        let card = document.createElement("template");
        html - html.trim();
        card.innerHTML = html;
        return card.content.firstElementChild;
      };

    setCard = (news) => {
        let card = "";
        let newsContainer = document.querySelector(".games");
        for (const newNumber in news) {
            card = this.getCard();
            card = card.replace(/nnn/, news[newNumber][0]);
            card = card.replace(/xxx/, news[newNumber][1]);
            card = card.replace(/zzz/, news[newNumber][2]);
            card = card.replace(/yyy/, news[newNumber][3]);
            newsContainer.appendChild(this.htmlToElement(card));
            
        };
    };
    
};
let content = new GenerateContent();
content.setCard(content.news);
});