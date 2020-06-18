class Person{
	name= "";
	age= "";
	location="";
	hobbies= "";
	music="";
	qoute= "";
	img="";

	constructor(name,age,location,hobbies,music,quote,img){
		this.name=name;
		this.age=age;
		this.location=location;
		this.hobbies=hobbies;
		this.music=music;
		this.qoute=quote;
		this.img=img;
	}

	myinfo(){
		return [this.name, this.age, this.location, this.hobbies, this.music, this.img];

	}

	myquote(){
		return [this.qoute, this.img];
	}

}
 var Profile = JSON.parse(json)

 var person1= new Person(Profile[0].name,Profile[0].age, Profile[0].location, Profile[0].hobbies, Profile[0].music, Profile[0].qoute, Profile[0].img);

 console.log(person1.myinfo());
 console.log(person1.myquote());