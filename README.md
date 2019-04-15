# Game of Clicks

## **Overview**
Game of clicks is a Game of Thrones based memory game. The user clicks on an image of a character and if they haven't alreay clicked on that person this round, they get a point. If they have already clicked on them, however, their score is reset and the game starts over. Out of a possible 18 (as there are 18 characters pictured in my game), I've only been able to get to 16.

**Link to the Game**

Click here to play: [Game of Clicks](https://trevorcollins.github.io/clicky-game/ "Game of Clicks")

## **Technical Details**
**Technologies Used**

React, Create-React-App, Randomize-Array, Bootstrap

**Logic**

At the start of a new game, the user clicks on an image to begin. Since the game just started, this will be the first time they've clicked this image this round.

On First Click of Any Image:
- Each image has a unique id that is pushed to an array of already clicked image ids
- The randomize-array npm is called to randomize the position of each image
- Score is increased by 1

On Second Click of Any Image:
- The id of the clicked image is checked against the alreadyClicked array and found to be already clicked
- The 'shake' class is added to each image to make it obvious they've lost
- The current score is checked against the topScore and if it's higher, topScore is updated
- Score is set back to zero and the alreadyClicked array is emptied

## **Screenshots**

#### **Game of Clicks**

![Home](https://live.staticflickr.com/7899/33734020318_319e17f723_k.jpg)

This is the app. It consists of two main components: Header and Body.



#### **Header**

![Header](https://live.staticflickr.com/7883/33734019798_52f3344727_k.jpg)

The header includes the "Nav" bar and Header card. The click status, score, and top score are all update by state.



#### **State**

![State](https://live.staticflickr.com/7922/33734019838_d1affb69f8.jpg)

- imageClass is where I add 'shake' on incorrect guesses and revert back to just 'click-item' on correct guesses.
- images is where I import an array of every image (pictured below)
- alreadyClicked is the array used to store the ids of images that have already been clicked
- correct is changed to false on incorrect guesses to update the click status in the header
- score and topScore are pretty self explanatory

#### **Images**

![Images](https://live.staticflickr.com/7899/32668915027_04808735c1.jpg)

Here you can see how I imported each image and exported a single array of objects.


## **Screen Capture**

![Screen Capture](https://media.giphy.com/media/YVP9Bd4PZHucIIjZoB/giphy.gif)

**Thank you for visiting my Clicky Game project!**

## **Author**

**Trevor Collins** - [Portfolio](https://trevorcollins.github.io/Portfolio/)
