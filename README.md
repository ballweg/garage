# Wio Garage Door Control
Control a garage door with Wio Link

## Overview
A garage door is quite simple. ~10v switch to two pins on the opener.

## Build
1. Connect Wio Link (or Node) to a Relay
2. Conenct your relay to two pins on garage door opener.
3. Use this web app to control things
4. Trigger your door from the comfort of your own wherever.

## How to use this "app"
1. You'll have to enter your device token. Get that from Wio Garage. 
2. Open page at [ballweg.github.io/garage/](http://ballweg.github.io/garage/), set your token. It will be stored in your browser's local storage, so it should persist for later.
3. Press button to trigger.

## How it Works.
It simply closes the relay, connecting the two contacts for a short time, then opens the relay. Just like the physical button in the garage.


## Next Steps
Obviously this isn't too useful to use remotely unless you know if the door is open or closed. 

Possibly a magnetic switch is next to send "Open" true/false or better yet, some kind of distance measuring sensor to send percentage of open-close.
Also want to add a vibration sensor or accelerometer to send "door in motion" for affirmitive feedback that your remote button-press is working.
