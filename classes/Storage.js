export class Storage {
    constructor(typVal, htmlString) {
        this.oldData = [];
        this.setItem(typVal, htmlString);
    }
    static checkLocalStorage() {
        if (localStorage.getItem("invoice") === null) {
            localStorage.setItem("invoice", "[]");
        }
        if (localStorage.getItem("estimate") === null) {
            localStorage.setItem("estimate", "[]");
        }
    }
    setItem(typVal, htmlString) {
        let array;
        array = localStorage.getItem(typVal);
        if (array !== null) {
            this.oldData = JSON.parse(array);
            this.oldData.push(htmlString);
            localStorage.setItem(typVal, JSON.stringify(this.oldData));
        }
        else {
            document.location.reload();
        }
    }
}
