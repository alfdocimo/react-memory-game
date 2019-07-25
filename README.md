[![Build Status](https://travis-ci.org/alfdocimo/letgo-fullstack-test.svg?branch=master)](https://travis-ci.org/alfdocimo/letgo-fullstack-test)

# Sequence Final Fantasy Memory Game

Hey there! Glad you're reading this😊

The following contains a test for a position at _letgo_, and I gotta say I had a lot of fun doing this!

Originally I was going to go with the pokeapi, but wanted to try something else instead, so Final Fantasy it is!

Okay, let's start with what I have used for this:

## React, of course!

Because functional programming is awesome and because I really like using it. (Also because it's part of the stack that is being used at letgo)

## styled-components

Never heard of this before but it GOT ME HOOKED! really, I will use this for side-projects from now on👌

## Jest & Enzyme

I wanted to try `react-testing-library` because I've heard awesome things about it, and because it has a very friendly API. However, I've been using Jest & Enzyme for a while and gotta say, I can't complain.

## API

moogleapi, because Final Fantasy is one of my favorite games ever🔥

## Redux

Been a very huge fan of Redux for a while... But then - Hooks happened! You will find that I've mixed both Hooks and Redux store for this App, because they really can coexist without much trouble. Also! No class-based components here. Not saying that's good or bad! I just like it better.

## TravisCI

Because CI/CD it's a great thing to know! And I've always been fond of having a deep connection with my DevOps folks.

# How does it work?

Okay! Glad you got here. Hope I haven't bored you yet!

So this a _variation_ from the original _Simon_ game. I wanted to go with a 9x9 grid filled with FF characters.

To get the game started just run:

`yarn start`

and hop over to `http://localhost:8080/`

(So one of the things, among others that I would improve is that I'm missing a <Start game> button, because the game starts right away).

So it's simple:

The game will show you 3 cards, then it will show all 9 cards on the deck and you get to chose which of the 3 cards were the ones that were shown at the beginning.

If you get the 3 cards right, you move to the next round. So it will be a sequence of 4 cards out of the 9 cards instead of 3. And then the next round 5... and so on!

If you think you got the sequence wrong, you can hit the reset button to reset the count at any time! Just remember that cards are only *shown once* 😎

And that's pretty much it!

### Things I wish I had time to improve:

## More testing

Because really, there is no such things as _too much testing_

## Current bugs

* Given that I'm currently fetching an endpoint of the API that returns a random character, this character could be repeated!

* No start button, the game starts immediately. (Sorry about this one, I was too excited and forgot)

## Visual enhancements

* Animations! because they make everything better to be honest.

And that's pretty much it. Hope you like it!