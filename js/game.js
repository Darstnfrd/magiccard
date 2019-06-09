let j = 0;
let counter = 1;

let startBtn = document.getElementById("start-button");


function initialise(){
		let obj = new Hand();
	}
	

	function Hand(){
				
		const deck = ['ace_hearts',
					  'ace_clubs',
					  'ace_diamonds',
					  'ace_spades',
					  '2_hearts',
					  '2_clubs',
					  '2_diamonds',
					  '2_spades',
					  '3_hearts',
					  '3_clubs',
					  '3_diamonds',
					  '3_spades',
					  '4_hearts',
					  '4_clubs',
					  '4_diamonds',
					  '4_spades',
					  '5_hearts',
					  '5_clubs',
					  '5_diamonds',
					  '5_spades',
					  '6_hearts',
					  '6_clubs',
					  '6_diamonds',
					  '6_spades',
					  '7_hearts',
					  '7_clubs',
					  '7_diamonds',
					  '7_spades',
					  '8_hearts',
					  '8_clubs',
					  '8_diamonds',
					  '8_spades',
					  '9_hearts',
					  '9_clubs',
					  '9_diamonds',
					  '9_spades',
					  '10_hearts',
					  '10_clubs',
					  '10_diamonds',
					  '10_spades',
					  'jack_hearts',
					  'jack_clubs',
					  'jack_diamonds',
					  'jack_spades',
					  'queen_hearts',
					  'queen_clubs',
					  'queen_diamonds',
					  'queen_spades',
					  'king_hearts',
					  'king_clubs',
					  'king_diamonds',
					  'king_spades'
		];	

		let hand = [];
		let row1A = [];
		let row2A = [];
		let row3A = [];

		var startBtn = document.getElementById("start-button");
		startBtn.style.display = "none";

		var previousHand = document.getElementById("currentHand");

		if(previousHand){
			previousHand.remove();
		}

		var previousFinalCard = document.getElementById("cardFinal");

				if(previousFinalCard){
					previousFinalCard.remove();
				}

		var currentHand = document.createElement("div");
		currentHand.id = "currentHand";
		currentHand.className = "row";
		document.getElementById("board2").appendChild(currentHand);

		renderRows();

		let drawCards = deck.slice(0, 21).map(function(){
  
		let random = Math.floor(Math.random() * 52);
		
		//console.log('Card:' + random);

		

		for (var i = 0; i < hand.length; i++) {

			if(random === hand[i]){

				console.log('Duplicate card detected!');
				
				while(hand.indexOf(random) !== -1){
					random = Math.floor(Math.random() * 52); 
					//console.log('Duplicate replaced with new card:' + random);
				}

			}
			
		}

		hand.push(random);

		var card = document.createElement("img");
		
		renderCard(card,random,true); //card element, card value, facedown boolean

			if(j === 0){
				document.getElementById("row1").appendChild(card);
				row1A.push(random);
				j++;
				 
			}
			else if(j === 1){
				document.getElementById("row2").appendChild(card);
				row2A.push(random);
				j++;
				
			}else{
				document.getElementById("row3").appendChild(card);
				row3A.push(random);
				j = 0;
				
			}

		});

		/*console.log(hand);
		console.log("row1:" + row1A);
		console.log("row2:" + row2A);
		console.log("row3:" + row3A);*/

		var message = document.getElementById("magicianmessage");
		message.innerHTML = "<strong>Choose 1 of the cards</strong> amongst the 21 randomly drawn cards below. Reveal your card by clicking the back of the card.<br/><br/><strong>Once you've revealed your card, select the blue Deal Cards button below.</strong> I will then start dealing the cards, so you must <strong>watch carefully for your card!</strong>";

		var button0 = document.createElement("button");
		button0.id = "button0";
		button0.className = "btn btn-primary btn-block";
		button0.innerHTML = "Deal Cards";
		button0.disabled = true;
		button0.onclick = function() {

			
			button0.remove();


			message.innerHTML = "<strong>Watch carefully for your card!</strong> You will then tell me which pile is hiding your card (by selecting either Left, Middle or Right) while I re-deal the deck each time.<br/><br/> Now tell me which pile is hiding your card?";

			hand.length = 0;

			for (var i = 0; i < row2A.length; i++) {
				hand.push(row2A[i]);
			}

			for (var i = 0; i < row1A.length; i++) {
				hand.push(row1A[i]);
			}

			for (var i = 0; i < row3A.length; i++) {
				hand.push(row3A[i]);
			}

			row1A.length = 0;
			row2A.length = 0;
			row3A.length = 0;

			renderRows();

			for (var i = 0; i < hand.length; i++) {

				var cardX = document.createElement("img");
				renderCard(cardX,hand[i]);

				if(j === 0){
				document.getElementById("row1").appendChild(cardX);
				row1A.push(hand[i]);
				j++;
				
				}
				else if(j === 1){
					document.getElementById("row2").appendChild(cardX);
					row2A.push(hand[i]);
					j++;
					
				}else{
					document.getElementById("row3").appendChild(cardX);
					row3A.push(hand[i]);
					j = 0;
					
				}

			}

			var button1 = document.createElement("button");
			button1.id = "button1";
			button1.className = "btn btn-primary";
			button1.innerHTML = "Left";
			button1.onclick = function() {

				counter++;
				

				hand.length = 0;

				for (var i = 0; i < row2A.length; i++) {
					hand.push(row2A[i]);
				}

				for (var i = 0; i < row1A.length; i++) {
					hand.push(row1A[i]);
				}

				for (var i = 0; i < row3A.length; i++) {
					hand.push(row3A[i]);
				}

				if(counter === 4){
					
					displayFinalCard(hand[10]);
					
				}

				row1A.length = 0;
				row2A.length = 0;
				row3A.length = 0;

				renderRows();

				for (var i = 0; i < hand.length; i++) {

					var cardX = document.createElement("img");
					renderCard(cardX,hand[i]);

					if(j === 0){
					document.getElementById("row1").appendChild(cardX);
					row1A.push(hand[i]);
					j++;
					
					}
					else if(j === 1){
						document.getElementById("row2").appendChild(cardX);
						row2A.push(hand[i]);
						j++;
						
					}else{
						document.getElementById("row3").appendChild(cardX);
						row3A.push(hand[i]);
						j = 0;
						
					}

				}
				
			};
			document.getElementById("ui").appendChild(button1);

			var button2 = document.createElement("button");
			button2.id = "button2";
			button2.className = "btn btn-primary";
			button2.innerHTML = "Middle";
			button2.onclick = function() { 

				counter++;
				
				//Empty array for hand to get ready to take in new cards
				hand.length = 0;

				for (var i = 0; i < row1A.length; i++) {
					hand.push(row1A[i]);
				}

				for (var i = 0; i < row2A.length; i++) {
					hand.push(row2A[i]);
				}

				for (var i = 0; i < row3A.length; i++) {
					hand.push(row3A[i]);
				}

				if(counter === 4){
					
					displayFinalCard(hand[10]);

				}

				//Empty array for each pile to get ready to divide cards into each pile
				row1A.length = 0;
				row2A.length = 0;
				row3A.length = 0;

				renderRows();

				for (var i = 0; i < hand.length; i++) {

					var cardY = document.createElement("img");
					renderCard(cardY,hand[i]);

					if(j === 0){
					document.getElementById("row1").appendChild(cardY);
					row1A.push(hand[i]);
					j++;
					 
					}
					else if(j === 1){
						document.getElementById("row2").appendChild(cardY);
						row2A.push(hand[i]);
						j++;
						
					}else{
						document.getElementById("row3").appendChild(cardY);
						row3A.push(hand[i]);
						j = 0;
						
					}

				}

			};
			document.getElementById("ui").appendChild(button2);

			var button3 = document.createElement("button");
			button3.id = "button3";
			button3.className = "btn btn-primary";
			button3.innerHTML = "Right";
			button3.onclick = function() {

				counter++;
				

				hand.length = 0;

				for (var i = 0; i < row1A.length; i++) {
					hand.push(row1A[i]);
				}

				for (var i = 0; i < row3A.length; i++) {
					hand.push(row3A[i]);
				}

				for (var i = 0; i < row2A.length; i++) {
					hand.push(row2A[i]);
				}

				if(counter === 4){
					
					displayFinalCard(hand[10]);

				}

				row1A.length = 0;
				row2A.length = 0;
				row3A.length = 0;
				
				renderRows();

				for (var i = 0; i < hand.length; i++) {

					var cardZ = document.createElement("img");
					renderCard(cardZ,hand[i]);

					if(j === 0){
					document.getElementById("row1").appendChild(cardZ);
					row1A.push(hand[i]);
					j++;
					 
					}
					else if(j === 1){
						document.getElementById("row2").appendChild(cardZ);
						row2A.push(hand[i]);
						j++;
						
					}else{
						document.getElementById("row3").appendChild(cardZ);
						row3A.push(hand[i]);
						j = 0;
						
					}

				}
				
			
			};
			document.getElementById("ui").appendChild(button3);
		}
		document.getElementById("ui").appendChild(button0);

		function renderCard(x,y,facedown){

			console.log(x);

			if(facedown === true){ 
				x.id = y;
				x.src = 'img/back.png';
				x.className = "playcard facedown col-10 col-sm-10 col-md-10";
				x.onclick = function() { 
					x.src = 'img/'+ y + '.png';
					button0.disabled = false;
				}
			}
			else{
				x.id = y;
				x.src = 'img/'+ y + '.png';
				x.className = "playcard faceup col-10 col-sm-10 col-md-10";
			}
		}


		
		

	}



	function renderRows(){
		
		var previousPile1 = document.getElementById("row1");

		if(previousPile1){
			previousPile1.remove();
		}

		var previousPile2 = document.getElementById("row2");

		if(previousPile2){
			previousPile2.remove();
		}

		var previousPile3 = document.getElementById("row3");

		if(previousPile3){
			previousPile3.remove();
		}

		var row1 = document.createElement("div");
		var row2 = document.createElement("div");
		var row3 = document.createElement("div");

		row1.id = "row1";
		row1.className = "col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 rowgrid";
		document.getElementById("currentHand").appendChild(row1);

		row2.id = "row2";
		row2.className = "col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 rowgrid";
		document.getElementById("currentHand").appendChild(row2);

		row3.id = "row3";
		row3.className = "col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 rowgrid";
		document.getElementById("currentHand").appendChild(row3);
	}

	function displayFinalCard(x){

		startBtn.style.display = "block";
		startBtn.innerHTML = "Play again";

		let cardFinal = document.createElement("img");
		cardFinal.id = "cardFinal";
		cardFinal.src = 'img/'+ x + '.png';
		cardFinal.className = "playcard col-4 col-sm-4 col-md-4";

		var finalMessage = document.getElementById("magicianmessage");
		finalMessage.innerHTML = "Is this is your card?";

		document.getElementById("ui").insertBefore(cardFinal,startBtn);

		var previousButton1 = document.getElementById("button1");
		var previousButton2 = document.getElementById("button2");
		var previousButton3 = document.getElementById("button3");

		if(previousButton1){
			previousButton1.remove();
			previousButton2.remove();
			previousButton3.remove();
			currentHand.remove();
		}

		counter = 1;
	}

