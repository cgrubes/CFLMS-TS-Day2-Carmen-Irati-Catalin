var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, jobTitle, age) {
        this.name = "";
        this.jobTitle = "";
        this.age = "";
        this.name = name;
        this.jobTitle = jobTitle;
        this.age = age;
    }
    Person.prototype.myName = function () {
        return "My name is " + this.name + " and I am " + this.age + " years old and I am a " + this.jobTitle;
    };
    return Person;
}());
var data = new Person("John Smith", "Developer", "32");
console.log(data.myName());
var jobInfo = /** @class */ (function (_super) {
    __extends(jobInfo, _super);
    function jobInfo(name, jobTitle, age, salary, jobLocation) {
        var _this = _super.call(this, name, jobTitle, age) || this;
        _this.salary = "";
        _this.jobLocation = "";
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    jobInfo.prototype.myJob = function () {
        return _super.prototype.myName.call(this) + " and I get " + this.salary + " Euros every month, and I work in " + this.jobLocation;
    };
    return jobInfo;
}(Person));
var job = new jobInfo("Sara Smith", "Engineer", "29", "3000", "Vienna");
console.log(job.myJob());
