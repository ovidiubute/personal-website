---
title: Abstractions Can Wait
date: 2026-02-24
description: Standard primitives create better feedback loops with AI
draft: false
slug: /blog/abstractions-can-wait
template: post
---

_This is the fourth post in a series where I’ll share how I use AI in practice on a real SaaS project — what works, what doesn’t, and where the hype breaks down._

When you build a SaaS product with AI as part of your daily workflow, infrastructure choices stop being a background concern. They directly affect how fast you can debug, refactor, and evolve the system.

Early on, the temptation is to reach for higher level abstractions. Frameworks that hide AWS. Platforms that generate infrastructure. Libraries that promise to remove boilerplate. That instinct is understandable. Abstractions feel like speed.

In practice, when AI is in the loop, starting from cloud primitives often leads to better long term velocity.

---

AI Understands Boring Infrastructure

Large language models are very good at reasoning about widely used systems. AWS Lambda, API Gateway, DynamoDB, SQS, S3, ECS, IAM. These are not niche tools. They are deeply represented in public documentation and code examples.

If your architecture is built directly on these primitives, you are operating inside a space the model understands well.

In our SaaS, the backend is mostly Lambda behind API Gateway with Auth0 JWT validation. DynamoDB is the main data store. SQS handles asynchronous processing. S3 is used for large data imports. OpenSearch powers metadata search across multiple providers. The frontend runs as a Next.js app in a container on ECS.

There is no heavy backend framework abstracting everything away. The boundaries are visible.

That visibility makes AI assistance much more concrete.

---

Example: Search and Index Design

Our global metadata service maintains separate OpenSearch indexes for origin, imdb, and eidr data. Document IDs are derived from SHA 256 hashes of provider IDs. The API supports a custom DSL for querying and can optionally fall back to third party providers if local results are insufficient.

Because we interact directly with OpenSearch, query behavior and index design are explicit. When search performance degrades or relevance is off, we can reason about mappings, analyzers, and query structure.

AI can meaningfully suggest improvements because OpenSearch patterns are common. There is no opaque search layer hiding how scoring or filtering works.

---

Example: Multi Tenancy and Authorization

Multi tenancy is enforced using JWT claims such as sub and tenant_id, combined with Amazon Verified Permissions for fine grained access control. The schema models entities like Tenant, User, Record, RecordField, and RecordJob, along with explicit actions.

When debugging an access issue, we are not dealing with hidden conventions in a framework. We are looking at explicit policy definitions, entity relationships, and evaluation context.

AI can reason about policy structure, principal resource relationships, and action scopes because the system is transparent. The authorization model is visible in code and configuration.

---

Boilerplate as Leverage

Using primitives means writing Terraform. Defining IAM roles. Configuring event source mappings. Thinking about Lambda memory and timeouts.

At first glance, this looks like overhead.

In practice, that boilerplate becomes structured context for AI. It can review IAM policies. It can suggest safer defaults. It can point out missing dead letter queues. It can reason about partition keys and DynamoDB access patterns.

If everything were hidden behind a high level abstraction, the model would have less surface area to analyze.

Explicit infrastructure is not just operational detail. It is explainable architecture.

---

Composability Beats Magic

As the product evolves, new flows appear. We introduced feature flags using OpenFeature and hosted flagd in ECS backed by S3. We handle ingestion ordering constraints across series, seasons, and episodes because relationships must be respected. We orchestrate cron driven synchronization across multiple external providers where external IDs can be added but never removed.

These changes were compositional. We connected new pieces to existing primitives.

Because the system is built from well understood building blocks, AI can reason about these additions without needing to reverse engineer a custom platform.

---

The Real Trade Off

The complexity in our system does not come from AWS. It comes from the domain. Cross referencing titles across origin, imdb, and eidr. Handling millions of records without external IDs. Designing a search API that is flexible enough to evolve. Refactoring the Records API to move away from exposing DynamoDB’s EAV model too directly.

Hiding AWS behind another layer would not have removed that complexity. It would have added another abstraction to understand.

When AI is part of the development process, standard cloud primitives become a shared language. They make debugging more concrete, refactoring more mechanical, and architectural discussions more grounded.

Abstractions still have a place. But early in a SaaS lifecycle, especially when iteration speed matters most, building directly on primitives creates a system that is easier for both humans and AI to reason about.
