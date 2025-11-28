// Retrieve a unix timestamp for date
var timestamp = Math.round(new Date().getTime() / 1000); //Returns a unix timestamp ie. 1572958651


// Make request to ipgeolocation API to retrieve moon phase,
// as Farmsense has been "sent to a farm upstate," apparently. (https://learn.adafruit.com/moon-phase/code)
// RIP, farmsense
// this example currently uses the Devil's Hopyard State Park coordinates, so substitute your own unless you live there.
// If you live there, you may be the devil. And hopping. At least you're not doing it in the house.
// Even if you are the devil, you'll need your own API key. You are only so powerful.
let moon = new XMLHttpRequest();
moon.open('GET', 'https://api.ipgeolocation.io/v2/astronomy?apiKey={YOUR API KEY GOES HERE and remove the brackets}&lat=41.49&long=-72.34, true);

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

// in which we yoink the data we want from the API call and do some futzing with it
// but not a ton of futzing

moon.onload = function moonphase() {
  // Convert JSON data to an object to parse
  var moonresult = JSON.parse(this.response);
  var str = JSON.stringify(moonresult);

  //set variable for "phase" - now we futz
  // ipgeolocation returns the phase in all caps, with an underscore intead of a space
  // we'll fix that in the phase jazz, just watch!
  var phase = moonresult.astronomy.moon_phase.replace(/[_]/g,' ').toLowerCase();// change underscore to space, and make it stop yelling
 
  // since ipgeolocation doesn't have the data farmsense did for "type," 
  // I tweaked some text for the final result
  // not enough tweaking to rise to the level of futzing, don't panic
  document.getElementById("phase").innerHTML = ("That's the "+ phase +" for you.");
 
  //-----------------------------------------------
  // **** ---- set variable for moon type ---- ****
  //-----------------------------------------------
  // ipgeolocation doesn't provide this data, and I couldn't find anywhere that did
  // that didn't require a paid subscription, which seems like overkill for this right now
  // and I think I only found like one anyway
  // so the moon type becomes the moon phase
  var moon = (moonresult.astronomy.moon_phase);

  // set variable for moon illumination, which is provided without need to convert or even consider math
  // so basically we only need to set the final illumination for the litness calculations
  // and the percentage for the "the moon is X% lit" line
  // and this may be an unnecessary step, or there may be a better way, but I was winging it
  // just because I wanted to see it work

  percentage = (moonresult.astronomy.moon_illumination_percentage)+"%";
  finalIllumination = (moonresult.astronomy.moon_illumination_percentage/100);

  // I think I only changed one line after this point.
  // see if you can figure out which one it is
  // or don't, it's not a big deal
  //set picture and text output based off moon illumination
  if (finalIllumination >  0.00 && finalIllumination < 0.10) {
    document.getElementById("moon").src="moon-phases/0.0.svg";
    document.getElementById("litness").innerHTML = "The moon is like, not lit at all.";
    document.getElementById("percentage").innerHTML = "The moon is only "+percentage+" lit.";
  }
  if (finalIllumination >=  0.1 && finalIllumination < 0.2) {
    document.getElementById("moon").src="moon-phases/0.1.svg";
    document.getElementById("litness").innerHTML = "The moon is like, hardly lit.";
    document.getElementById("percentage").innerHTML = "The moon is only "+percentage+" lit.";
  }
  if (finalIllumination >=  0.2 && finalIllumination < 0.3) {
    document.getElementById("moon").src="moon-phases/0.2.svg";
    document.getElementById("litness").innerHTML = "Ok yeah, the moon is barely lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.3 && finalIllumination < 0.4) {
    document.getElementById("moon").src="moon-phases/0.3.svg";
    document.getElementById("litness").innerHTML = "Have you seen the moon lately? It's only sorta lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.4 && finalIllumination < 0.5) {
    document.getElementById("moon").src="moon-phases/0.4.svg";
    document.getElementById("litness").innerHTML = "The moon's like almost halfway lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.5 && finalIllumination < 0.6) {
    document.getElementById("moon").src="moon-phases/0.5.svg";
    document.getElementById("litness").innerHTML = "Half dark and half lit...just pick one, The Moon.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.6 && finalIllumination < 0.7) {
    document.getElementById("moon").src="moon-phases/0.6.svg";
    document.getElementById("litness").innerHTML = "Huh, the moon is kinda lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.7 && finalIllumination < 0.8) {
    document.getElementById("moon").src="moon-phases/0.7.svg";
    document.getElementById("litness").innerHTML = "The moon is pretty cool but not totally lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.8 && finalIllumination < 0.9) {
    document.getElementById("moon").src="moon-phases/0.8.svg";
    document.getElementById("litness").innerHTML = "Dope. The moon is like pretty lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.9 && finalIllumination < 1.0) {
    document.getElementById("moon").src="moon-phases/0.9.svg";
    document.getElementById("litness").innerHTML = "Dang, is that moon full? No, but it srsly lit tho.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination == 1) {
    document.getElementById("moon").src="moon-phases/1.0.svg";
    document.getElementById("litness").innerHTML = "Damn, this moon is like legit lit. Like, fully lit."
    document.getElementById("percentage").innerHTML = "The moon is 100% lit.";
 }
  if (finalIllumination == 0) {
    document.getElementById("moon").src="moon-phases/0.0.svg";
    document.getElementById("litness").innerHTML = "Woah. The moon is srsly not lit.";
    document.getElementById("percentage").innerHTML = "The moon is 0% lit.";
  }
}
moon.send();
