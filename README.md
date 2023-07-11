# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @francarose/lotide`

**Require it:**

`const _ = require('@francarose/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: Creates a function that returns the first element in an array.
* `tail()`: Creates a function that returns the elements in an array except the first.
* `middle()`: Gets the middle element(s) in an array.
* `eqArrays()`: Checks if two arrays are equal.
* `assertArraysEqual()`: Asserts that two arrays are equal.
* `assertEqual()`: Asserts that an actual and an expected value are equal.
* `assertObjectsEqual()`: Asserts that two objects are equal.
* `eqObjects()`: Checks that two objects are equal.
* `countLetters()`: Counts each letter in a sentence.
* `flatten()`: Flattens nested arrays into a single-level array.
* `countOnly()`: Counts specified elements in an array.
* `letterPositions()`: Return all the indices in a sentence for each character except space characters.
* `findKeyByValue()`: Scans an object and returns the first key containing the given value.
* `findKey()`: Scans an object and returns the first key for which the callback function returns a truthy value. 
* `without()`: Returns a subset of a given array, removing unwanted elements.
* `takeUntil()`: Collects items from array until a truthy value is returned by callback.
* `map()`: Returns a new array based on the results of a callback function.

