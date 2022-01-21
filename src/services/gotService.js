class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }
    getAllHouses() {
        return this.getResource('/houses?page=2&pageSize=10');
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }
    getAllBooks() {
        return this.getResource('/books?page=2&pageSize=10');
    }
    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

}
const got = new GotService();

got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });

got.getCharacter(130)
    .then(res => console.log(res));

got.getAllHouses()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });

got.getHouse(3)
    .then(res => console.log(res));

got.getAllBooks()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });

got.getBook(7)
    .then(res => console.log(res));
