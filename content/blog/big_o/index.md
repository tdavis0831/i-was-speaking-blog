---
title: OH- NO(tation)
date: "2021-12-21T22:12:03.284Z"
description: "Overview of 4 common Big O Notation Types"
---

First off, what is Big O Notation? It is a term used to describe the performance of an algorithm. Most commonly, we are referring to execuation time for the algorithm to run, and or the storage that the algorithm uses. 
Here are 4 of the most common notations and a simple explanation to hopefully help shed some light on this topic.


##O(1)

O(1) is used when an algorithm will always use the same space or time no matter the size of the data that is based through it. Another word used to describe this is constant time. 
An example of this would be if we were comparing 2 variables, a and b, and returning a Boolean depending on which is larger. 
Another example would be if we were returning the first value of a data set. Regardless of the length of the set, it will always be the same since we are always taking the first value and nothing more.


##O(n)

This notation is also known as linear time complexity. Simply put, this mean that the time and storage increase as the size of the data input increases. 

An example of this is searching for to check if a specific item is in a list. As the list gets larger, the time to run the algorithm and the storage it uses also gets larger. If the input is 6 values, it needs to run through all of them. If the input is 1000 values, it still needs to run through every single number which will eventually slow down the output time and speed of the application as a whole.
It might be easy for you to remember this from linear equations in math. I didn’t, but if you do, that could help you remember this one! 


##O(N²)

This is where it got a little hard for me to understand at first, so I hope this helps. This means that the speed and space used by the algorithm is determined by the square set of the data.
A simple way for me to understand this was to think about a nested for loop.

def quad_example(list):
	for item in list:
		item_2 in list:
		return(item, item_2)
list=[“a”,”b”,”c”]

This very simply function loops through items in a list, then loops through them again and returns the value. In this case, the function would return each item in the list repeated twice. So, n in this case is the number of items in the list, 3 (3*3).


##O(2^N)	
This notation refers to a concept called exponential time complexity. This means that each time data is added to the data, the algorithm storage size and speed doubles. The most familiar example of this is the calculation of the Fibonacci numbers. This is referred to as a recursive function (a function that calls itself under certain conditions).

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)


There are a few other Big O Notations that you can always take the time to learn, but as a entry level engineer,
these are the cases that I have run into most frequently and suggest taking the time to understand. And as always, feel free to reach out and connect with me with any of the links below! 