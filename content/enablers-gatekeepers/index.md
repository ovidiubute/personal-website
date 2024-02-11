---
title: Enablers and gatekeepers
date: 2020-04-09
draft: false
slug: /blog/enablers-gatekeepers
template: post
---

Teams should set and uphold a set of values. These come in different shapes and forms. Whether it’s being honest, transparent, responsible, or blameless. The list just goes on. Values are only important if they’re connected to behaviors, i.e. how you typically act regardless of the situation. Nobody behaves erratically over an extended period of time. Given enough self-reflection patterns emerge, and those patterns can be associated with values. I’d like to focus on just two of them in this article.

Throughout my software engineering career I kept hearing the word enablement thrown out a lot. Now, first of all, enabling someone to do something can have both positive and negative connotations. I think it’s only in this industry that it’s acceptable to say you’re going to enable someone. In any other context you’d get some weird looks just for saying that. So what’s special about an enablement team? Typically that means developing and maintaining components that other teams can benefit from.

If you ship software to customers you’re probably dependent on a continuous integration system. If it goes down, then you’re pretty much dead in the water. So someone, or a team of people, have to maintain it and keep it running close to 24/7. Can you imagine your company right now shipping without your CI system? If not, then the team that owns it is enabling you to do your job.

Gatekeeping is a word you don’t really hear much about. A gatekeeper is someone whose job is to not let anyone in to whatever they’re protecting. The CI team is on the hook for its availability, they upgrade it from time to time, implement new features, fix bugs, apply security patches, etc. Given that everyone in the company depends on their work, it’s only natural to expect that they will always have a lot of planned work ahead of them. It’s common in a lot of companies that developers from other teams may be interested in helping them even though it’s not exactly their job to do so.

Imagine you’re passionate about CI systems and you notice a problem with your company’s setup. It’s something you know how to fix, so you decide to just go ahead and do it. After you’ve prepared your patch for submission there are really two different scenarios that could play out, and they have to do with values. Let’s see how the next steps would play out given two totally different teams, A and B, who uphold different values.

You talk to team A and they accept to review your patch. They suggest some improvements based on their experience, and work with you to deliver it. You gain more insights into what it means to actually be on the team. You missed an edge-case and they point that out to you. You go back and fix it and re-submit, and your patch is finally accepted. They also let you know what’s coming down the road in the next months in case you find other issues.

You send your patch to team B. You don’t hear anything back for a couple of days, and decide to reach out in person. They tell you they’re swamped with work and don’t have time to look at your proposal. You keep trying to convince them that it’s a small fix which greatly improves developer experience, but they don’t want to hear about it and finally tell you flat out that it’s not your job to think about CI. You give up and go back to work. Six months later they fix the issue but you only find out about it by accident.

Team B is what I’d call a gatekeeper team, even though their official mission is to enable, just like team A. They don’t let people in if they don’t have to. This team rarely benefits from the expertise of outsiders. It’s basically like comparing proprietary to open source. But while I’m sure you’d rather interact with the former team, it may be useful to consider their perspective first before passing judgement.

It’s clear that team A values working together. If you bring an improvement to the table, they’ll take the time to review it, let you know if they were already planning on doing the same thing, or point out flaws in your solution. Team B assumes that since you’re not on the team, you really have no business thinking about their line of work and you shouldn’t even try. But is team B’s behavior objectively bad? Like in all things software, it depends.

What if team B is maintaining a critical banking software component? If you were in their shoes, would you be so eager to let outside contributors in? What if your improvement contains a bug? If that happens it’s not your responsibility, you’re not on the team. They’re the ones who have to fix it. Or perhaps their software is so complex there’s no way anyone on the outside would be capable of contributing without a lengthy on-boarding process.

You should also seriously consider that team A has to allocate time to work with you, so they’re making a call that you’re worth investing in. If it turns out your potential improvement would be a liability down the road, then they’re not getting that time back. It’s gone.

Team B in contrast is more draconian with their time. They consider themselves (perhaps rightfully so) experts in their field, and their assumption is, unless you’re on the team, you do not have enough context to suggest any improvements. You should only report problems to them and they’ll eventually get around to fixing them.

These are certainly extreme positions and I made them out to be so it’s easier to conceptualize. In reality teams are both enablers and gatekeepers from depending on the situation. But values always prevail, and it’s important to understand that when you need to work with other teams.
