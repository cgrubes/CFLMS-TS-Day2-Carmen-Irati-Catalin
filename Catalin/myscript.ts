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
		return [this.name, this.age, this.location, this.hobbies, this.music];

	}

	myquote(){
		return this.qoute;
	}

	myimage(){
		return this.img
	}

}
 var Profile = JSON.parse(json);

 //var person1= new Person(Profile[0].name,Profile[0].age, Profile[0].location, Profile[0].hobbies, Profile[0].music, Profile[0].qoute, Profile[0].img);

 //console.log(person1.myinfo());
 //console.log(person1.myquote());


//${person.myimage()}>
 for (let index in Profile){

 	let person = new Person(Profile[index].name,Profile[index].age, Profile[index].location, Profile[index].hobbies, Profile[index].music, Profile[index].qoute, Profile[index].img)
 	

 	document.getElementById("wrapper1").innerHTML +=
 	`<div id = "card_${index}" class = "cardSmall"> 
 		<div id = "imageBox_${index}" class = "imageBoxBig">
 			<img id = "image_${index}" src = "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
 		</div>
 		<div id = "quoteBox_${index}">
			<h3> 
				${person.myquote()}
			</h3>
 		</div>
 	</div>`

 	document.getElementById("wrapper2").innerHTML +=
 	`<div id = "cardFav_${index} class = "cardBig"> 
 		<div id = "imageBoxFav_${index}" class = "imageBoxBig">
 			<img id = "imageFav_${index}" src = "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
 		</div>
 		<div id = "infoBox_${index}">
			<h4> 
				Name: ${person.myinfo()[0]}
			</h4>
			<p>
				Age: ${person.myinfo()[1]}
			</p>
			<p>
				Location: ${person.myinfo()[2]}
			</p>
			<p>
				Hobbies: ${person.myinfo()[3]}
			</p>
			<p>
				Favourite Music: ${person.myinfo()[4]}
			</p>
 		</div>
 	</div>`


 }
