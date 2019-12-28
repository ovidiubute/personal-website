---
title: Why do we test?
date: "2016-12-26"
tags: software, testing, clean code
---

> "What is the point of software testing?"

My first reaction upon hearing this was of dismissal. Later on it got me thinking as to how I could convincingly present the advantages of testing. Because the usual arguments of "it's the right thing to do", or "you can't scale a project without tests" can actually be countered pretty easily. We now live in an era of micro-frameworks, IDEs with integrated linters, and extremely short feedback loops provided by hot reloading technologies. It's getting easier and easier to prove to someone that your code works even in the absence of unit or integration tests.

---

Let's say you lend a friend a $100 bill, and at the end of the day, he reimburses you with ten $10 bills. Ask yourself this: do you count the bills before putting them back in your wallet? He is, after all, your friend, you implicitly trust him. But could he have made a mistake and given you nine bills instead of ten? Maybe eleven?

Suppose you answered yes, now consider the following: **does counting the money make you distrustful of your friend?** Do you believe that, even if he is your friend, it is your responsibility to protect yourself, and your money, from his mistakes, even if you don't recall him ever making one?

If you don't count them right then and there, when the transfer is made, do you count them later and get back to him if you find he's made an error? What if it's two days later and your friend no longer remembers what happened? **What if it's two years later and he's already left the country?**

These are questions that get asked daily across organizations of all sizes. They are particularly harder to answer in software companies, though, and that's because of a little thing called bureaucracy. **Few things anger us, developers, more than bureaucracy**. It's why we pay everything online, why we don't understand the long queues at the Post Office, or the people refusing to exchange their printed meal tickets with meal cards. It's an established cultural trait, one that has allowed our economic sector to be so innovative in the past thirty years.

There is, however, one drawback, and it should be apparent to us all: without oversight and paper trails, software can be easily mutated, redesigned, rewritten, changed beyond recognition. But what about the people actually working on the product? How do they keep up with the ever changing landscape? This is a subject that everyone gets asked about during technical interviews: *"Do you document your code? How do you go about it?", "What is a comment block?", "How do you generate documentation from code?", "How do you keep your documentation up to date?".

That last question resonates with me a lot. After working in several companies of different profiles, ranging from telecom, social networking, to mobile gaming, I can say without a shadow of a doubt that trying to write documentation, and keeping it up to date, is humanly impossible.

**Maintaining a test suite is the only infallible method of tracking and understanding the shifting complexities of a software product.** Anything else is not worth investing in. This is the real reason that we write tests. It's not that we don't trust each other, it's not because we believe everyone else is stupid and doesn't warrant our trust, it's simply because human memory is a fragile and finite resource. You should not have to memorize source code in the eventuality that someone reports a bug. You should not have to track the changes made by a colleague just in case a problem pops up two days after release.

If you've ever asked yourself what's the point of testing your code, simply step back and imagine yourself in a few years time. Is it reasonable to think you'll still remember the source code you've written, if any one of your users (code without users other than yourself is not the type of project that I'm talking about) reports a problem? Would you be comfortable handing over the project to someone else? How much time would he have to spend to understand the code at the same level as you?

It may take you a minute or so to prove to someone that your product still works today, but could you still do it in two or three years time? If the answer's no, it may be time to invest in a test suite.
