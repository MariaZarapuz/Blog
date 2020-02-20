export class Post {
    id: number;
    title: string;
    text: string;
    author: string;
    image: any;
    category: string;
    date: Date;


    constructor(pTitle, pText, pAuthor, pImage, pCategory) {
        this.id = 0;
        this.title = pTitle;
        this.text = pText;
        this.author = pAuthor;
        this.image = pImage;
        this.category = pCategory;
        this.date = new Date();

    }
}