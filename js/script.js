var one = document.querySelectorAll("button")[0];
var two = document.querySelectorAll("button")[1];
var reset = document.querySelectorAll("button")[2];
var player1= document.querySelectorAll("span")[0];
var player2= document.querySelectorAll("span")[1];
var limitval = document.querySelector("input");
var playlimit = document.querySelectorAll("span")[2];
var p1score= 0;
var p2score = 0;
var gameOver =false;
var limit = 5;


one.addEventListener("click", function(){
	if(!gameOver){
	p1score++;
	if(p1score === limit){
		player1.classList.add("wincolor");
		gameOver =true;	
	}
	player1.textContent = p1score;
	}
	
});

two.addEventListener("click", function(){
	if(!gameOver){
	p2score++;

	if(p2score === limit){
		player2.classList.add("wincolor");
      gameOver=true;
}
player2.textContent = p2score;
}
    
});



reset.addEventListener("click", function(){

resetall();

});

function resetall(){

	p1score = 0;
p2score = 0;
player1.textContent = p1score;
player2.textContent = p2score;
player1.classList.remove("wincolor");
player2.classList.remove("wincolor");
gameOver = false;
};


limitval.addEventListener("change" , function(){

limit = Number(this.value);
playlimit.textContent = this.value;
resetall();
})