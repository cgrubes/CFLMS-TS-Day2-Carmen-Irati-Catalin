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
 	

 	$("#wrapper1").append(
 	`<div id = "one_${index}" class = "cardSmall"> 
 		<div id = "imageBox_${index}" class = "imageBoxBig">
 			<img id = "image_${index}" src = ${person.myimage()}>
 		</div>
 		<div id = "quoteBox_${index}" class = "quoteBox">
			<h3> 
				${person.myquote()}
			</h3>
			<h5 class = "black" id = "heart_${index}">
				&hearts;
			</h5>
 		</div>
 	</div>`
 	)

 	$("#wrapper2").append(
 	`<div id = "two_${index}" class="cardBig hidden" > 
 		<div id = "imageBoxFav_${index}" class = "imageBoxBig">
 			<img id = "imageFav_${index}" src = ${person.myimage()}>
 		</div>
 		<div id = "infoBox_${index}" class = "infoBox">
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
			<h5 class = "black" id = "heart_fav_${index}">
				&hearts;
			</h5>
 		</div>
 	</div>`
 	)
 }

 $(".black").click(function(){
 	let card_id = $(this).parents().eq(1).attr("id")
 	console.log($(`#heart_${card_id[4]}`))
 	$(`#heart_${card_id[4]}`).toggleClass("red")
 	$(`#heart_fav_${card_id[4]}`).toggleClass("red")

 	$(`#two_${card_id[4]}`).toggleClass("show")
 	

 })

 	

