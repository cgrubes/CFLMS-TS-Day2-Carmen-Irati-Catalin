class Person {
    name = "";
    jobTitle = "";
    age = "";
    constructor(name, jobTitle, age) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.age = age;
    }

    myName() {
        return `My name is ${this.name} and I am ${this.age} years old and I am a ${this.jobTitle}`;
    }
}

let data = new Person("John Smith", "Developer", "32");
console.log(data.myName());

class jobInfo extends Person {
    salary = "";
    jobLocation = "";

    constructor(name, jobTitle, age, salary, jobLocation) {
        super(name, jobTitle, age)
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    myJob() {
        return `${super.myName()} and I get ${this.salary} Euros every month, and I work in ${this.jobLocation}`
    }
}

let job = new jobInfo("Sara Smith", "Engineer", "29", "3000", "Vienna");
console.log(job.myJob());