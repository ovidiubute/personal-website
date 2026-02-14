---
title: Why AI Finally Breaks ClickOps
date: 2026-02-14
description: When AI joins your team, "just clicking around in AWS" stops working.
draft: false
slug: /blog/why-ai-finally-breaks-clickops
template: post
---

If you want to build a SaaS product with AI, you need to accept something early that most teams only learn the hard way:

AI does not simplify infrastructure.

It makes infrastructure non-negotiable.

The moment models stop being "APIs you call" and start becoming collaborators in your development process, your system becomes extremely sensitive to ambiguity. Environment drift starts to matter. Undocumented permissions start to hurt. Manual fixes come back to haunt you. Inconsistent deployments turn into multi-day debugging sessions.

AI is an amplifier. If your infrastructure is messy, AI will amplify the mess.

That is why we made a decision that felt premature at the time. Before we had a UI. Before we had something demoable. Before we could even pretend we had a polished product.

We invested heavily in infrastructure.

## Building the foundation before it felt necessary

Most early-stage SaaS teams focus on visible progress. Features. Screens. Demos. Infrastructure is often treated as something you will "clean up later" once things stabilize.

We did the opposite.

We standardized very early on Infrastructure as Code using OpenTofu (https://opentofu.org/). We used Digger (https://digger.dev/) to run infrastructure plans inside pull requests. And we wired deployments through GitHub Actions (https://github.com/features/actions) to make CI/CD deterministic from day one.

It was not glamorous work. There were no screenshots to share. But we made a deliberate choice: if something exists in our AWS account, it must exist in version control.

No manual console changes.

No "temporary" IAM policies.

No environment-specific hacks that only one person understands.

If you cannot rebuild your system from scratch using code, you do not truly control it.

At the time, it felt like discipline. In retrospect, it was leverage.

## Why AI changes the equation

In a traditional SaaS product, infrastructure evolves at a steady pace. You add a service, a database, maybe a queue. The surface area grows slowly and the complexity stays manageable.

When you build with AI as part of the system, not just part of the feature set, the pace of change accelerates. You iterate on ingestion pipelines. You add asynchronous workflows. You adjust compute profiles. You isolate environments for experiments. You tighten permissions because one overly broad policy becomes a real risk when models start orchestrating actions.

Infrastructure stops being background noise. It becomes the medium in which your product evolves.

If every change requires manual coordination, Slack approvals, or someone who "knows AWS," your velocity collapses under its own complexity. You cannot experiment freely if every experiment is operationally expensive.

Infrastructure as Code changes that dynamic. When infrastructure is declarative, versioned, and reviewed like application code, it stops being ceremony and becomes part of the development loop.

And in the AI era, your development loop is everything.

## Infrastructure as a shared language

The real shift happened when we realized something: once everything was codified, we could better collaborate on infrastructure alongside AI.

Because the system was explicit and structured, we could reason about it programmatically. We could refactor modules, tighten IAM policies, add queues, split environments, improve naming conventions, and validate deployments. All inside pull requests, with diffs, plans, and predictable rollouts.

The AI was not guessing how our cloud was configured. It could see the source of truth.

AI performs best in well-defined systems. If your infrastructure is implicit and scattered across dashboards and tribal knowledge, any model working with it is operating in partial darkness.

When your infrastructure lives in code, it becomes legible. And legibility is what enables safe acceleration.

## The reality: AWS will humble you

Now, here is the part that does not show up in most IaC blog posts.

When people talk about Infrastructure as Code, it sounds like a clean story. You write some config, you apply it, and now your cloud is fully reproducible.

In reality, AWS is a giant collection of services built by different teams over decades, and sometimes it behaves like it was designed by committee. Because it was.

So yes, we aimed for "everything in OpenTofu", but AWS quickly reminded us that reality is more… artistic.
One of the first things we hit was AWS Organizations. You would think setting up an org, accounts, and organizational units would be a solved problem. It mostly is, but parts of the setup are awkward. In practice we ended up needing manual configuration and, in some cases, CloudFormation.

Then there is AWS Control Tower, which is basically AWS saying: "Yes, we know Organizations is hard. Here is an opinionated way to manage it." Great in theory. But if you have ever tried to fully codify Control Tower from scratch, you know the feeling: you start with confidence, and then 45 minutes later you are staring at a console screen thinking "why is this not an API?"

And this is where Infrastructure as Code becomes less about ideology and more about pragmatism.
You are not trying to win purity points. You are trying to build a system that can be understood, repeated, and evolved.

## Region constraints: the AWS practical joke department

Then you run into the classic AWS gotchas that feel like inside jokes.
For example, CloudFront.

CloudFront is global, which sounds great, until you discover that the ACM certificate it requires must live in us-east-1. Not in your region. Not where your infrastructure is deployed. Not where your team is operating. Always us-east-1.

So you end up with this weird split-brain infrastructure setup where everything is beautifully deployed in your chosen region, except for the one certificate that must exist in Virginia because reasons.

It is the kind of constraint that makes you question your life choices, until you accept it and move on.
So suddenly your clean single-region infrastructure plan turns into a distributed setup because one service lives in a different region, and now your IaC needs to coordinate across regions.

If you are doing this early in a startup, it genuinely feels like AWS is trolling you personally.

## The best one: "Please click approve in the console"

Then there was Bedrock.

For a while, AWS Bedrock required manual approval through the AWS console before you could use certain models. Not a resource you could provision. Not a flag you could enable through IaC. Just a friendly UI flow that essentially said:

"Congrats on being automated. Now click this button."

Nothing says "fully automated cloud infrastructure" like a critical dependency that requires a human to log into a console and agree to something.

To AWS’s credit, this requirement was eventually removed as the service matured. But at the time, it was a useful reminder: cloud platforms evolve, and early services often have activation steps that do not yet fit cleanly into Infrastructure as Code workflows.

That is not a failure of IaC. It is a reality of building on fast-moving platforms. And when you are building an AI-native SaaS, you are almost always adopting services that are still evolving.

## The lesson: infrastructure is a discipline, not a fantasy

These problems are not reasons to avoid IaC. They are reasons to adopt it even harder.

Because when you hit weird constraints like global services tied to one region, features that require manual activation, or services that cannot be cleanly managed through your chosen tooling, you want those exceptions to be documented and intentional.

The real enemy is not "manual work". The enemy is undocumented manual work. The worst infrastructure setups are not the ones with a few manual steps. The worst ones are the ones where nobody remembers which steps are manual until something breaks.

## Removing gatekeeping by removing ambiguity

There is an uncomfortable truth in many SaaS organizations: a lot of DevOps overhead exists because the system is fragile.

If infrastructure changes are risky, undocumented, or inconsistent across environments, you need human gatekeepers. Approval chains become a proxy for safety. The more uncertainty there is, the more process you add.

But leaning hard on processes compensates for ambiguity.

When infrastructure changes flow through pull requests, when plans are generated automatically, when deployments are deterministic and tied to commits, the system becomes self-describing. You do not need someone to "bless" changes because the safety mechanisms are built into the workflow.

This does not eliminate discipline. It encodes it. We reduced the need for entire approval cycles not by cutting corners, but by making the system explicit.

## Determinism is the real multiplier

People talk about AI as the productivity multiplier. In practice, determinism is more important.

AI becomes genuinely useful when it operates inside predictable constraints. When environments behave the same way every time. When permissions are clearly defined. When deployments are repeatable. When configuration drift is detectable.

Without that, every AI-generated suggestion becomes a potential risk. With it, suggestions become accelerators.

The difference between chaos and leverage is rarely intelligence. It’s structure.

## The strategic advantage of boring decisions

Looking back, investing in Infrastructure as Code before we had a UI might have seemed excessive. But it created a foundation where humans and AI could collaborate safely. It allowed us to evolve quickly without multiplying operational fragility. It reduced the need for dedicated gatekeepers because the guardrails were already embedded in the system.

If you are building a SaaS product with AI, do not start with the model selection matrix. Do not start with agent frameworks. Do not start with prompt libraries.

Start by making your system legible. Because AI amplifies whatever foundation you give it.

Clarity beats cleverness. And in the long run, clarity compounds.
