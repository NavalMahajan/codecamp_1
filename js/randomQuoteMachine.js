// Thanks to Useful Programmer Youtube channel
window.onload = go;
function go() {
  // Triggers genRandQuote when New Quote button is clicked
  $("#new-quote").click(function() {
    genRandQuote();
  });
  
  $("#tweet-quote").click(function() {
    
  });

  // Generate a random quote when window is loaded initially
  genRandQuote();
}

// Generates a random quote from the quote variable and renders it to DOM
function genRandQuote() {
  var quotes = [{
    "id": 1,
    "text": "Simplicity is the ultimate sophistication.",
    "source": "Leonardo da Vinci"
}
,
	{
		"id": 2,
		"text": "The only way to do great work is to love what you do.",
		"source": "Steve Jobs"
	}
	,
	{
		"id": 3,
		"text": "In the middle of every difficulty lies opportunity.",
		"source": "Albert Einstein"
	},
	{
		"id": 4,
		"text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
		"source": "Nelson Mandela"
	}
	,
	{
		"id": 5,
		"text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
		"source": "Ralph Waldo Emerson"
	}
	,
	{
		"id": 6,
		"text": "Simplicity is the ultimate sophistication.",
		"source": "Leonardo da Vinci"
	}
	,
	{
		id: 7,
		text: "Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all.",
		source: "Pulsifer, Take Action; Don't Procrastinate"
	},
	{
		id: 8,
		text: "Never leave that till tomorrow which you can do today.",
		source: "Benjamin Franklin"
	},
	{
		id: 9,
		text: "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
		source: "Christopher Parker"
	},
	{
		id: 10,
		text: "Someday is not a day of the week.",
		source: "Author Unknown"
	}

];
  var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
  $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + randQuote.text + '" - ' + randQuote.source));
}


// This function makes strings into click to tweet URLS
function stringToClickToTweetURL(str) {
  
  // Convert to Click to Tweet URL
  var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");

  // Put 'Click to Tweet' URL suffix at the begining
  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

  // Return properly formatted "Click to Tweet URL"
  return resultString;
}