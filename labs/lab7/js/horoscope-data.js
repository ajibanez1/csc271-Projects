var birthMonth = "August "
var zodiac = "Leo"
var birthday = 14
var luckyNum = 7.77
var horoscopeDesc = "I am a Leo"
var believeOrNo = false
var leoMoodRating = 3.4
var libraMoodRating = 4.25
var aquariusMoodRating = 4.1
var ratingAvg = (leoMoodRating + libraMoodRating + aquariusMoodRating)/3
var message = " Today's Mood rating for Leo is " + leoMoodRating + " out of 5. Group mood rating " + ratingAvg + " Out of 5"
var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var leoSign = signs[7]
var aquariusSign = signs[1]
var libraSign = signs[9]
var descriptions = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];
var myDesc = descriptions[5];
var benjiiDesc = descriptions[2];
var nehemiahDesc = descriptions[9];
descriptions [5] = "Today is going to be a great day"

var element = document.getElementById('sign');
element.innerHTML = zodiac;

var element = document.getElementsByClassName('birthday')[0];
element.textContent +=  birthMonth + birthday ;

var element = document.getElementsByClassName('luckyNum')[0];
element.textContent +=  luckyNum ;

var paragraph = document.getElementsByTagName('p');
paragraph[0].textContent = horoscopeDesc;
paragraph[1].innerHTML += " <b>" + believeOrNo + "</b>";
paragraph[2].textContent = message;

paragraph[3].textContent = "My Zodiac Sign: " + leoSign; ;
paragraph[4].textContent = leoSign + " Horoscope: " + myDesc; ;

paragraph[5].textContent = "Benjii Zodiac Sign: " + libraSign;
paragraph[6].textContent = libraSign + " Horoscope: " + benjiiDesc;

paragraph[7].textContent = "Nehemiah Zodiac Sign: " + aquariusSign;;
paragraph[8].textContent = aquariusSign +" Horoscope: "+ nehemiahDesc;;