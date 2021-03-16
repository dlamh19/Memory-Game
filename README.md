# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **David Lam**

Time spent: **6** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
* Added music when the game is lost
* Added responsiveness to website using FlexBox

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![x](http://g.recordit.co/EhfH0n17rK.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* https://www.w3schools.com/
* https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
* https://stackoverflow.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? 
* The biggest challenge I encountered in creating this submission was when I was figuring out how to add buttons dynamically. I had no idea where to approach this so my first instinct was to do research surrounding the idea of dynamic creation of elements where I searched up as: “How can I dynamically add elements in an HTML document?” “How do I add attributes to these dynamic elements that are created?” “How do I go about doing CSS styling with these newly made attributes?”. By using this research, I was able to experiment with how to do dynamic element creation and experimented on a combination of elements with string concatenation to see if it would work with the CSS styling. However, this was just the basis of creating buttons and the difficult part was actually connecting/appending the element Buttons that I had created to the buttonDiv. This somewhat reminded me of inheritance where we would append an element to a parent, and it would just be a part of the parent. After doing this, I was able to realize that the delete button is basically the addButton but just in reverse. Ultimately, I was able to overcome this challenge by using my eagerness to learn and to search for the right knowledge to help me succeed coupled with my background knowledge in CS to help me understand the material faster. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
* This game was just a brief introduction to web development but I would love to be able to learn the capabilities of web development and the more intricate products that a web developer can create using all these unique technologies.  I always wonder how far web development plays a role in society and what web developers do impact society. Also, question I always had was how much say do web developers have in terms of creativity in their products. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (
* If I were given the time to more a few more hours on this project, I would definitely add more features such as more games including a typing race, picture memory game, math games, co-op game that takes two people or more, etc. Also, I would add more features to help navigate/help the website like a navigation bar, tips and tricks for each game, maybe even a GIF to show how the game works, and possibly a footer. After adding these feature, I would go back through the code to simplify functions if possible and see if I can make them more efficient and also adding functionality to the mobile users. 



## License

    Copyright [David Lam]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.