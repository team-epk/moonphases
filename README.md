# phase 🌘
#### The moon is pretty *lit*. But just how lit is it?
### Historical intro:
This simple one page site visually represents the current phase of the moon. I built it to demo an introductory example of practical API use cases. [View it here](https://doerrfeldbill.github.io/phase/). *The sample site no longer functions due to API changes since programming this project.*

### Updated intro:
Sometime before 2025, I (team-epk) found the original project and wanted to get it working. I messed around with it while Farmsense was still somewhat functional. Then I did some other stuff. Then I came back (end of 2025) and Farmsense was in various states of broken depending on the day. (Though [Adafruit has bailed entirely](https://learn.adafruit.com/moon-phase/code) so maybe Farmsense has truly, ahem, bought the farm.) Just to see if I could make it work, I rejiggered as much as I could using the [IPGeolocation Astronomy API](https://ipgeolocation.io/astronomy-api.html). It's not a 1:1 replacement, so things had to be adjusted (for example, it doesn't have the data that had been used for "type," which of course was the part I really liked). But the general functionality is still there, with a few changes.

🌘🌓🌔🌕🌖🌗🌒

[![](LITNESS.png)](https://doerrfeldbill.github.io/phase/)

## About
**phase** calls the [IPGeolocation Astronomy API](https://ipgeolocation.io/astronomy-api.html) to display moon data. The IPGeolocation API is a free-to-use open API that returns useful moon phase and illumination data. (Original: "After much research, it was the only free service I could find that returned the data I wanted." Update: Pretty much the same, just a different person reaching the same conclusion, with slightly different data on offer.) 

## How it Works
Given a unix timstamp, IPGeolocation returns information on the current moon phase and illumination percentage. For now, the colloquial phase name is not provided until another way of finding that is discovered.

Here is an example response, using the [Devil's Hopyard State Park](https://en.wikipedia.org/wiki/Devil's_Hopyard_State_Park)'s latitude and longitude:

````
location	
latitude	"41.49000"
longitude	"-72.34000"
country_name	"United States"
state_prov	"Connecticut"
city	"East Haddam"
locality	"East Haddam"
elevation	"161"
astronomy	
date	"2025-11-28"
current_time	"14:23:01.195"
mid_night	"23:37"
night_end	"05:15"
morning	
astronomical_twilight_begin	"05:15"
astronomical_twilight_end	"05:48"
nautical_twilight_begin	"05:48"
nautical_twilight_end	"06:22"
civil_twilight_begin	"06:22"
civil_twilight_end	"06:50"
blue_hour_begin	"06:11"
blue_hour_end	"06:34"
golden_hour_begin	"06:34"
golden_hour_end	"07:36"
sunrise	"06:50"
sunset	"16:23"
evening	
golden_hour_begin	"15:38"
golden_hour_end	"16:40"
blue_hour_begin	"16:40"
blue_hour_end	"17:03"
civil_twilight_begin	"16:23"
civil_twilight_end	"16:52"
nautical_twilight_begin	"16:52"
nautical_twilight_end	"17:26"
astronomical_twilight_begin	"17:26"
astronomical_twilight_end	"17:59"
night_begin	"17:59"
sun_status	"-"
solar_noon	"11:37"
day_length	"09:32"
sun_altitude	16.317997111156515
sun_distance	147619321.6374739
sun_azimuth	219.86875072625497
moon_phase	"FIRST_QUARTER"
moonrise	"12:36"
moonset	"-:-"
moon_status	"-"
moon_altitude	18.4258465174975
moon_distance	379747.41705449636
moon_azimuth	117.32483829768228
moon_parallactic_angle	-42.076951595177896
moon_illumination_percentage	"55.46"
moon_angle	96.2712203204011
````

Depending on what the API returns, the script loads different images to reflect the current moon phase and illumination percentage. I (Bill Doerrfeld) also added a little bit of my own scientific interpretation on how lit the moon is:

````
0% : Woah. The moon is srsly not lit.
0% - 10% : The moon is like, not lit at all.
10% - 20% : The moon is like, hardly lit.
20% - 30% : Ok yeah, the moon is barely lit.
30% - 40% : Have you seen the moon lately? It's only sorta lit.
40% - 50% : The moon's like almost halfway lit.
50% - 60% : Half dark and half lit... moon you're being so bipolar.
60% - 70% : Huh, the moon is kinda lit.
70% - 80% : The moon is pretty cool but not completely lit.
80% - 90% : Dope. The moon is like pretty lit.
90% - 100 : Dang, is that moon full? No, but it srsly lit tho.
100% : The moon is totally 100% lit.
````

## Disclaimer
### Original: 
This was made for fun. Code is not elegant. It's just for sample purposes. This is a personal project and not intended for commercial use.

### Updated: 
This was tweaked and updated for fun. Code is not elegant. It's just for sample purposes. This is a personal project and not intended for commercial use. Thanks Bill for giving me something to tinker with.