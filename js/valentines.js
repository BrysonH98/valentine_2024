
		(function() {
			"use strict";

			window.addEventListener("load", () => {
				
				//Define variables
				const goose = document.getElementById("goose");
				const btnYes = document.getElementById("btnYes");
				const btnNo = document.getElementById("btnNo");
				const btnClickMe = document.getElementById("btnClickMe");
				const text = document.getElementById("text");
				const card = document.getElementById("card");
				const gooseMadMessages = [];
				gooseMadMessages.push("Wrong move Bucko!", "Nah Uh try again!", "You gotta click yes!", "Try again!", "It's that button to the left!", "You're making the goose sad!", "I'm crying myself to sleep tonight!", "PLEEAASSEE!", "No choice but to love me now!");
				
				let count = 0;
				
				
				//Make the goose MAD
				btnNo.addEventListener("click", makeGooseMad);
				btnYes.addEventListener("click", makeGooseHappy);
				
				btnClickMe.addEventListener("click", openCard);
				card.addEventListener('mousemove', tiltCard);
				card.addEventListener('mouseleave', unTiltCard);
				
				function makeGooseMad(){
					goose.classList.remove("goose-with-heart");
					goose.classList.add("goose-with-knife");
					
					if (count >= 8){
						btnNo.disabled = true;
						btnNo.classList.remove("button-on");
						btnNo.classList.add("button-off");
					}
					
					text.textContent = gooseMadMessages[count];
					count++;
				}
				
				function makeGooseHappy(){
					goose.classList.remove("goose-with-knife");
					goose.classList.add("goose-with-heart");
					text.textContent = "Thanks, Pookie <3!";
				}
				function tiltCard(e){
					card.style.transition= ""
					let rect = card.getBoundingClientRect();
					let x = e.clientX - rect.left;
					let y = e.clientY - rect.top;

					let dx = (x - rect.width / 2) / (rect.width / 2);
					let dy = (y - rect.height / 2) / (rect.height / 2);

					card.style.transform = `perspective(600px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
				}
				
				function unTiltCard () {
					card.style.transition= "transform 500ms ease-in-out"
					card.style.transform = "";
				};
				
				function openCard (){
					card.style.display="block";
					btnClickMe.style.display="none";
				}
					
			}, false, );
		})();