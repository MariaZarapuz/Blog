export class Post {
    title: string;
    text: string;
    author: string;
    imagen: any;
    date: string;
    category: string;
    constructor(pTitle, pText, pAuthor, pImagen, pDate, pCategory) {
        this.title = pTitle;
        this.text = pText;
        this.author = pAuthor;
        this.imagen = pImagen;
        this.date = pDate;
        this.category = pCategory;
    }
}