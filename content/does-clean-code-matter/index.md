---
title: Does clean code matter?
date: 2016-08-21
tags: software, testing, clean code
draft: false
slug: /blog/does-clean-code-matter
template: post
---

A question I see often thrown around when discussing software development is:

> "What is clean code?"

The question always struck me as audacious. It's like asking a painter to explain how to paint properly. But hold on, a painter works alone, and the finished product does not have to conform to a rigid specification. A painter doesn't have deadlines either, at least, I've never heard of any. So that comparison doesn't work at all. Hmm. How about asking a bridge builder? He's part of a team, and the project's deliverable is met with extraordinary technical scrutiny. I wonder what he would answer when asked:

> "How do you build a clean bridge?"

On second thought, bridges are not built with the same methodology as software. Sure, there's maintenance, but you rarely decide mid-way to scrap everything and start over. And you don't really have the option to hot-fix your bridge at 3 A.M. on a Sunday because one of the structural elements has started to collapse.
Photo by chuttersnap on Unsplash

Could it be that the clean code question actually has more depth to it than we think?

I'd say that the question needs to have a bit more context for it to be fair to the person answering it. A more honest question would be something like:

> "What is clean code to you, if you're going to be working on a 5–10 man team?"

When was the last time you wrote code that you absolutely knew would hit production and stay there for at least 2 years? Have you ever known that in advance?

The real irony is that, if you're writing code all by yourself, you simply do not care about any of that. Does that mean you don't write clean code? Maybe. Or maybe you want to get the job done as quickly as possible and move on.

Does knowing the answers to the above questions make you write "clean" code? I believe people want to write the best software that they can, but is it fair to say that, under peer pressure, they'd do a better job?

And after all, how clean can code be? How do you measure it? It might be tempting to answer with a phrase containing the word "bugs" in it, but I think everyone knows how that one plays out in the real world.

Perhaps you could measure the cleanliness factor of a particular block of code by measuring how much time it takes you to change it. But that also needs some context. Was the code written by you a week ago? A month? 2 years? Are you a Junior level software developer or a seasoned vet? Are you new to the project?

And how about business value? Is it profitable for your company to write clean code? Does a start-up exit faster if its code was written in such a way that it allowed a 20–50 man team to rapidly iterate on it and pivot according to market fluctuations?

I'm going to stop with the questions now, though, let's draw up some conclusions.

It seems to me that measuring cleanliness of our code is hard. Writing clean code is even harder, of course. Talking about clean code, on the other hand, is surprisingly easy. Almost anyone can talk for hours about it.

And this is where I think the irony is: most people love the idea of clean code, would definitely write clean code given the opportunity, but have no idea how to measure code cleanliness or if this endeavor has any tangible business value.

I propose a new topic of discussion to everyone out there tackling the idea of clean code:

> "How do we measure clean code, and what's the threshold at which it starts generating business value?"
