var blockNews__blank = 0;
const CS__news = document.querySelector(".content-section__news");

createBlockNews('Estudio', 'ELABORACIÓN DE BEBIDA FERMENTADA TIPO KÉFIR CAUCASIANO A PARTIR DE LA FRUTA VACCINIUM MYRTILLUS (ARÁNDANO).', '#');
createBlockNews('Estudio', 'ELABORACIÓN DE BEBIDA FERMENTADA TIPO KÉFIR CAUCASIANO A PARTIR DE LA FRUTA VACCINIUM MYRTILLUS (ARÁNDANO).', '#');
createBlockNews('Estudio', 'ELABORACIÓN DE BEBIDA FERMENTADA TIPO KÉFIR CAUCASIANO A PARTIR DE LA FRUTA VACCINIUM MYRTILLUS (ARÁNDANO).', '#');
createBlockNews('Estudio', 'ELABORACIÓN DE BEBIDA FERMENTADA TIPO KÉFIR CAUCASIANO A PARTIR DE LA FRUTA VACCINIUM MYRTILLUS (ARÁNDANO).', '#');

function createBlockNews(type, title, link) {
    const blockNews = document.createElement("DIV");
    blockNews.classList.add("block-news");
    blockNews.innerHTML = `
        <div class="block-news__type">~·~ ${type} ~·~</div>
        <div class="block-news__title">${title}</div>
        <a href="${link}" class="block-news__link" target="_blank${blockNews__blank}">Conocer más >></a>
    `;
    CS__news.appendChild(blockNews);
    blockNews__blank++;
}