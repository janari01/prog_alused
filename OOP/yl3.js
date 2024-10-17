class Student {
    #nimi;
    #id;

    constructor(nimi, id) {
        this.#nimi = nimi;
        this.#id = id;
        this.status = 'Active';
    }

    get getId() {
        return this.#id;
    }

    set setName(name) {
        this.#nimi = name;
    }

    get getName() {
        return this.#nimi;
    }

    set setStatus(status) {
        const arr = ['Active', 'Expelled', 'Finished', 'Inactive'];

        arr.includes(status) ? this.status = status : this.status;
    }

    get getStatus() {
        return this.status;
    }


}

const student = new Student("janari", 2)
student.setStatus = 'Expelled'
console.log(student.status)