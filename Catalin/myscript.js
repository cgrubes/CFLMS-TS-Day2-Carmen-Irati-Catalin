var Person = /** @class */ (function () {
    function Person(name, age, location, hobbies, music, quote, img) {
        this.name = "";
        this.age = "";
        this.location = "";
        this.hobbies = "";
        this.music = "";
        this.qoute = "";
        this.img = "";
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.music = music;
        this.qoute = quote;
        this.img = img;
    }
    Person.prototype.myinfo = function () {
        return [this.name, this.age, this.location, this.hobbies, this.music];
    };
    Person.prototype.myquote = function () {
        return this.qoute;
    };
    Person.prototype.myimage = function () {
        return this.img;
    };
    return Person;
}());
var Profile = JSON.parse(json);
//var person1= new Person(Profile[0].name,Profile[0].age, Profile[0].location, Profile[0].hobbies, Profile[0].music, Profile[0].qoute, Profile[0].img);
//console.log(person1.myinfo());
//console.log(person1.myquote());
//${person.myimage()}>
for (var index in Profile) {
    var person = new Person(Profile[index].name, Profile[index].age, Profile[index].location, Profile[index].hobbies, Profile[index].music, Profile[index].qoute, Profile[index].img);
    document.getElementById("wrapper1").innerHTML +=
        "<div id = \"card_" + index + "\" class = \"cardSmall\"> \n \t\t<div id = \"imageBox_" + index + "\" class = \"imageBoxBig\">\n \t\t\t<img id = \"image_" + index + "\" src = " + person.myimage() + ">\n \t\t</div>\n \t\t<div id = \"quoteBox_" + index + "\" class = \"quoteBox\">\n\t\t\t<h3> \n\t\t\t\t" + person.myquote() + "\n\t\t\t</h3>\n \t\t</div>\n \t</div>";
    document.getElementById("wrapper2").innerHTML +=
        "<div id = \"cardFav_" + index + "\" class=\"cardBig\"> \n \t\t<div id = \"imageBoxFav_" + index + "\" class = \"imageBoxBig\">\n \t\t\t<img id = \"imageFav_" + index + "\" src = " + person.myimage() + ">\n \t\t</div>\n \t\t<div id = \"infoBox_" + index + "\" class = \"infoBox\">\n\t\t\t<h4> \n\t\t\t\tName: " + person.myinfo()[0] + "\n\t\t\t</h4>\n\t\t\t<p>\n\t\t\t\tAge: " + person.myinfo()[1] + "\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tLocation: " + person.myinfo()[2] + "\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tHobbies: " + person.myinfo()[3] + "\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tFavourite Music: " + person.myinfo()[4] + "\n\t\t\t</p>\n \t\t</div>\n \t</div>";
}
