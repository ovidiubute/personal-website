---
title: Thoughts on Zabbix
date: 2015-12-04
draft: false
slug: /blog/thoughts-on-zabbix
template: post
---

I'd like to spend some time analysing the state of a very powerful, but somehow little known, at least outside of sysops/devops circles, solution to monitor your production environment.

<!-- end -->

Zabbix, according to the Wikipedia entry, started as an internal project around the year 1998. Three years later, it was released under the GPL license to the world, but took an additional three more years to reach a milestone 1.0 release, in 2004.

The project has now been going for almost 18 years, which is amazing considering the typical lifespan of most open source projects. Development seems to be split between two branches, an LTS, bearing the 2.x version template, and a new 3.0 branch which, at the time of this article, is in beta.

Why is it then, that so few developers are familiar with Zabbix as a product? 1998 is the year Google was founded, after all. There aren't really many examples of open source products founded during the 90's that are still alive and kicking.

Well, I'll be frank. If you are a sysadmin, Zabbix is an awesome tool. The distributed architecture of agents deployed on host machines, the templating, the frankly unlimited number of servers it can manage, the alerts, it's all a great improvement over the somewhat ageing Nagios.

But if you're a developer, and you've successfully deployed your backend app somewhere (managed or cloud), you should not be thinking about Zabbix, not in the year 2016. There are so many competitors these days that outdo Zabbix in the application monitoring space, it's frankly absurd how some of Zabbix's issues have not been addressed in almost 18 years.

Allow me to just list some of my biggest grievances with Zabbix.

## No dynamic items

Honestly, you don't fully appreciate this until you use something like Graphite. No dynamic items means, before you can see your data plotted on a graph, actually scratch that, before you can add your data to the Zabbix database, you need to carefully, meticulously, and painstakingly add every single item definition in your application to Zabbix's configuration.

So let's just assume you're running a REST based application. You have something like 20 endpoints, and you'd like to know how are these endpoints performing. So you add an atomic counter in every controller that just increments on each hit. Obviously, that won't get you too far, so you also add a Histogram to each controller that saves the distribution of response time to the clients. Let's suppose you're running an app that needs to respond very quickly to requests (such as a Trading or Ad related middleware app). You're going to set the distribution to something like this:

    0..50 milliseconds
    50..75 ms
    75..100 ms
    100..125 ms
    125..150 ms
    150..300 ms
    300..500 ms
    500..750 ms
    750..1000 ms
    1000..1500 ms
    1500..Infinity ms

Seems like a reasonable setup. We can graph how many hits we have per endpoint, and how quickly our backend is responding to clients.

But can you guess how many Zabbix items we have to add to completely monitor our app? Well, one hit counter per controller plus eleven histogram related items per controller gives us a grand total of two hundred and forty items. And this is still a very small scale app. Remember we're not really monitoring anything inside the controllers, just how fast they respond and how are they doing so. You'll obviously need a lot more items to get a sense of how your app is doing.

But who's going to add 240 items manually into what is obviously my second biggest grievance with Zabbix (its interface)? Nobody wants to do it, so either you trick the new guy into doing manual work for a day or two, or you do what everybody else using Zabbix does: you write a script to add the items for you.

So wait, let's back up a bit. You're writing this super cool backend app with all the latest tech, maybe you're in a startup and one of the tasks for your next sprint reads:

    Find a way to automate adding Zabbix items (5 story points)

Obviously, if you have worked with Zabbix before you know that an item is really more complex than I make it out to be in this article. And I'll be fair, I understand why items can't just be duck typed in like Graphite, StatsD, or pretty much any project at this stage. But is it annoying to have to configure them? Yes. It most definitely is.

How does any other backend manage this problem? Simple. By offering no configuration whatsoever. You want to add a metric to OpenTSDB? Sure, just send it. Graphite? No problem. The caveat is Zabbix's items are more advanced from an operational standpoint. But like I said, if you're a developer, you don't care.

## The GUI

Where do I begin with the interface? It really does seem that Zabbix's GUI was designed for sysadmins to monitor the iowait and open sockets of Apache, not for developers to graph their JMX counters.

It's just so tedious to do anything. That's all I can say. The interface is at least 10 years past its prime, and if you've ever looked at dashboards such as Kibana, you'd be forgiven for mistaking Zabbix for a dead project.

## The graphs

I refuse to criticize an image library that is about as old as the Internet. And yes I'm talking about libgd. Let's just say that the Internet has evolved, and websites these days tend to have a wow factor them. Zabbix's graphs have a ‘meh' factor to them, and what I mean is that they are so bland and so unattractive to look at, you will not want them on that big screen next to the fancy Kibana screen that other team has been working on.

## Conclusion

Enjoy Zabbix, if you're a sysadmin, that is. For us developers, we'd very much like a bit more flexibility and visual appeal to our monitoring.
