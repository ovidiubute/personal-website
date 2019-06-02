---
title: An approach to learning programming languages
date: "2017-04-12"
featuredImage: './ide.png'
---

Learning to write code in a new programming language is similar to learning a foreign language.

You may have been driven to study it by a tangible need such as moving to a different country, or creating new business connections. Or you may simply have decided it's a challenge worth taking on. Regardless, it felt intimidating at first. Maybe you could already understand some words because they were similar to your maiden language. Maybe you could even read a newspaper and get the gist of it. But writing and speaking felt very difficult when you first started out.

The advantage programming languages have over foreign ones is that they have comparatively smaller grammars. An experienced developer can pick up all of the syntax rules within days. It's a great feeling to be able to read and write code within a week of starting, and it may even seem productive, at first.

Don't be fooled, though, because it's not really as simple as I'm making it out to be. Because knowing syntax and being able to get a program to run is not really at the same level as being able to read and write in a foreign language. Imagine not knowing any Spanish but still being able to read a restaurant menu and ordering something. Maybe you don't recognize the subtleties needed to have a conversation with a native speaker, yet you can perform trivial tasks with little effort. In the same vein, you're sure to be able to read and understand source code, up to a point, in an unknown language, especially if it's similar to something you're already familiar with. As an example, if a developer has experience in C++, he/she will feel right at home with any of the languages that have a similar syntax such as Java, Rust, C#, or PHP.

What's most important in a programming language is not syntax, though. It's actually finding its utility, knowing the type of problems that can be solved with it, and following the design patterns that it enforces. Learning to write idiomatic code should be your ultimate goal, and this is what this article is about: understanding the need to track your journey towards mastery.

---

As a developer, you absolutely should invest time in learning new programming languages. It doesn't matter if you‘re at a junior, mid, or senior level, or if you're currently writing code full time in a particular tech and will never switch to anything else (even though this is highly unlikely). The experience alone will make you a better coder, because you will find different ways to tackle problems and you will be able to import patterns from other languages into the one you're already using (most of the time, and I'm thinking functional vs imperative).

To be able to reach a certain level of proficiency, you should define for yourself a set of metrics. Tangible goals towards which you can track your progress. If you don't, you may end up in a situation where you're unable to ascertain if you're ready to start a project using a particular technology stack.

I've written code at least once in over a dozen languages. By no means does this entail that I am comfortable with all of them. I've already set my own metrics by which I can judge my ability. Allow me to list them and explain my motivations for each of them.

## Excellent command of syntax

You should not be surprised why your program does not compile if the error is purely syntactic, nor should you spend any significant time trying to solve it. A good metric for this is whether you're able to write code without an IDE and it will pass the compilation or interpretation stage without syntax errors. I'm generally an advocate for using an IDE because we, as developers, usually have more work to do than we can get through in a usual day, so any productivity boost should be welcomed, not excluded for any subjective reasons. However if you always use an IDE you may miss out on learning how to correctly write code by yourself. An IDE also may have shortcuts for repetitive and boring code (commonly named *"boilerplate"*) and you may be tempted to use them simply because they're available.

I need to make a note here; languages evolve over time. If you check out the latest standard of JavaScript, [ECMAScript 6](http://www.ecma-international.org/ecma-262/6.0/), and the [first edition ever published](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf), you will notice there are many, many changes. This begs the question of should you feel that because you've mastered the syntax of a language at some point in time, but you haven't worked with it at all for months or years, does that mean you're no longer knowledgeable? I'm going to answer no, and here's why.

Everything changes in software development. The landscape is shifting constantly, new languages are added every year, and the sector is probably one of the most dynamic and competitive in the world. If you have invested time to learn a programming language, and consider yourself productive, no amount of time can cancel that out. Imagine you've spent working 5 or 6 years in C++. You can't even remember the standard that was in place at that time. It doesn't really matter. You have a huge advantage over everyone starting out with [C++ 17](https://meetingcpp.com/index.php/br/items/final-features-of-c17.html) (the latest revision of the standard at the time I'm writing this), because you've taken the time to master it at one point, and you will be able to approach the design changes with a lot more confidence than a novice. Myself, I wrote a lot of PHP years ago, starting out with version 4 (for the nostalgic among you, remember writing *almost* OOP code?), then moved on to 5. Version 6 does not exist, for reasons [that would take too much time to explain](https://ma.ttias.be/php6-missing-version-number/). Now, PHP is at version 7. Because I haven't kept up with it, I obviously have no idea what has changed in the language, from a syntactic point of view (I did hear that lambdas were added, which is awesome). One thing is certain, though, I'm confident in my ability to pick up PHP 7 if I had to, because I invested a lot of time to work with it in the past.

## Understanding its strengths and weaknesses

This requirement is very important because it enables you to use the right tool for the job. You will have to know and accept the limitations of the language and not try and coerce it into doing something that's not idiomatic. Think of trying to write a triple A game engine in Pascal, or a CRUD backend in Bash. Think that's too contrived? How about writing a library that enables static type annotations in Python, a language that is designed to be dynamically typed, and is one of its strongest features. I actually wrote this while working at a startup, and it took me some time to understand why it was a terrible idea.

It helps to know that some languages are so called "general purpose", which means they can be depended on to solve problems across all of the domains within computing. The prime examples are C and C++. Other languages are more niched, and they wouldn't make good candidates for solving certain problems, such as Swift or R. There is however a lot of power in specialization.

## Good knowledge of the standard library

I cannot stress this enough. You will never truly master a language unless you learn how to use its standard APIs.

Be mindful of the fact that you will not be able to fully understand and work with all of them, though. Some languages such as Objective-C come with a frankly huge set of APIs associated with the iOS operating system (even though you can write Objective-C code anywhere, it is most often associated with iOS and macOS development).

Try not to focus too much on memorizing functions and packages though, this does not scale well at all as you progress through your career. I remember obsessively reading the Java API spec years ago trying to learn as many APIs as I could by heart in case I'll ever use them. Guess what? I only used a handful on a regular basis.

There are also some languages, such as JavaScript, that come with a fairly limited standard library. Historically this has been the reason why so many third-party libraries stepped in to fill the gaps, leading to an incredibly fragmented and fragile ecosystem. Consider the fact that most JavaScript developers started out by learning jQuery, a library that, at one point, had become so pervasive, you could be forgiven for thinking that it was a programming language in and of itself. This doesn't mean you get a pass, though. Regardless of how badly written or unintuitive these APIs may be, they are the building blocks with which every library and framework is built, and ignoring them will relegate you to a downstream user of them. Besides that, the limited APIs may be a temporary situation. Java's Collections API, for example, has received numerous updates in its 8th version, and the Calendar API, once one of the most hated aspects of writing date/time focused code, has also been massively improved (with the help of a third-party lib called [Joda Time](http://www.joda.org/joda-time/)).

Once you've mastered this requirement you will be able to author your own libraries to solve very specific problems that you encounter. Don't take this into consideration, though, when evaluating your skills. You don't need to be the author and maintainer of a popular library or framework to be able to say you're proficient. The reverse is also true.

---

So these are my preconditions on how to evaluate programming language expertise. You're probably wondering if I follow my own advice. Am I honest about my own skills? And you may also be thinking whether it pays off to be this honest, and what happens if your resume looks less impressive if you follow this methodology and starting removing certain skills?

I cannot stress this enough: you need to be honest with yourself if you want to evolve as a software developer. It's going to be a long journey until you learn enough to be proficient, there are no short-cuts. You need to treat your career as you would a platform with millions of users: it needs to be monitored carefully, constantly, and with a very objective attitude towards performance. This entails having tangible metrics that you can observe daily to track your progress. If you decide to start learning a programming language, no matter if it's low-level, high-level, imperative or functional, take time off to evaluate how you're doing. Ask yourself these three questions:

1. Can you read and write a program without compile errors and without the help of an IDE?
1. Are you aware of the pros and cons of this particular language?
1. Do you have a firm grasp over its standard APIs?

As for myself, following the aforementioned conditions, I'm knowledgeable (or have been in the past) in four languages:

* PHP, which was my entry in the world of web development; as I said I'm no longer developing any software using it
* Java, judging by the years I've worked as a backend developer; no longer using it, I've switched to JVM hosted languages because they tend to be functional
* Python, which is still my go-to language for small projects
* JavaScript, the language in which I'm currently most involved in

I'm hopeful I'll be able to add Elm to that list by the end of this year (still a long way to go), and maybe Clojure (I've worked with it before, but not enough to feel proficient). I've chosen them because they're extremely different from what I'm familiar with. Elm is a purely functional language similar and written in Haskell, and Clojure is a Lisp. Even though proficiency is something that I won't reach soon, the journey there will be worth it, because the architecture of apps made possible by these technologies is vastly different from the ones I'm used to working with in imperative languages.

I would advise you to do the same when picking what to invest your time in. If you love C++, I wouldn't recommend choosing D as your next language. Not because D isn't any good, it's objectively very well designed, but you won't learn any new patterns, and you won't learn new ways to solve problems. You'll write more efficient code, but it will look and feel very similar to what you've been writing all your life. Try to push yourself outside your comfort zone.

Let me know in the feedback section how your experience with learning programming languages has been so far.
