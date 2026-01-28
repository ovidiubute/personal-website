---
title: Why We Chose TypeScript — and Why That Decision Matters for Agentic AI
date: 2026-01-28
draft: false
slug: /blog/why-we-chose-typescript
template: post
---

When people talk about "agentic AI", the conversation usually starts with models, prompts, or orchestration frameworks. That's understandable — those are the visible parts. But in practice, the real constraints on what kind of agentic workflows a product can support are decided much earlier, often years before anyone seriously talks about AI.

They are decided in places that don't look particularly "AI-related" at the time: language choice, system boundaries, conventions, and the general predictability of the codebase under change.

For us, choosing TypeScript was one of those decisions. At the time, it had nothing to do with artificial intelligence. In hindsight, it turned out to be one of the most important preconditions for building agentic systems that we actually trust.

---

## Popularity as a system property

TypeScript is not the most elegant language. It is not the most expressive, nor the most minimal. There are languages with cleaner type systems, more powerful abstractions, and far more aesthetic coherence.

None of that mattered as much as one simple fact: TypeScript is widely used.

Agentic systems do not live in pristine, greenfield codebases. They operate inside large, evolving systems that have been shaped by years of product pressure, organizational constraints, and incremental decisions. In those environments, elegance tends to break down quickly. What holds instead are conventions, shared patterns, and a general sense of "how things are usually done".

Popularity creates that shared ground. It means architectural patterns are familiar rather than novel. It means most engineers joining the team already have an intuition for how the system likely behaves. It means there is a large body of collective experience about what works, what fails, and where the sharp edges are.

From an agentic perspective, this matters because agents reason over systems in much the same way humans do: by relying on patterns and expectations. A popular language embeds those expectations into the ecosystem. An elegant but uncommon language often requires rediscovery, explanation, and interpretation at every layer.

Agentic workflows benefit far more from familiarity than from cleverness.

---

## Ecosystem density as an AI constraint

One of the less discussed aspects of AI systems is that they are heavily shaped by the distribution of existing knowledge. Models reason better about domains where there is a large volume of real-world code, documentation, examples, and production usage.

JavaScript and TypeScript dominate modern SaaS infrastructure. Most cloud SDKs, third-party APIs, internal tooling, and integration examples are either written in TypeScript or designed with it in mind. This has a very practical consequence for agentic systems: fewer translation steps.

Every time an agent has to mentally "cross a boundary" — from one language, paradigm, or abstraction style to another — you increase the risk of misinterpretation. Adapters, wrappers, and glue code might look clean to humans, but they introduce ambiguity for automated reasoning.

By working in an ecosystem where most tools already speak the same language, agents can operate closer to the actual execution environment. They can reason about asynchronous flows, error handling, data shapes, and APIs with fewer hidden assumptions.

Ecosystem size, in this sense, is not just a convenience. It is a real capability multiplier for AI-driven systems.

---

## When AI feels magical — and when it completely falls apart

This difference becomes obvious the moment you actually sit down and work with modern models inside a real codebase.

Recently, I spent a session with Claude Opus working on a fairly complex interaction built with react-flow. The task involved reasoning about graph state, user interactions, layout constraints, and incremental UI changes. The results were genuinely impressive. The model understood the abstractions, followed established patterns, and was able to propose changes that were not just syntactically correct, but structurally aligned with how react-flow applications are typically built.

That wasn't an accident.

React, react-flow, and the surrounding ecosystem are extremely well-represented in public code, documentation, and examples. The abstractions are consistent, the patterns repeat, and the "shape" of a correct solution is widely shared. The model wasn't guessing — it was operating inside a dense, familiar conceptual space.

Now contrast that with something like ElectroDB, a popular DynamoDB ORM.

Despite being written in TypeScript, ElectroDB represents a very different kind of abstraction. It encodes DynamoDB access patterns through a highly opinionated DSL, with behavior that is difficult to infer without already knowing the library extremely well. Even experienced developers often need the documentation open constantly to remember which combinations of attributes, indexes, and operations are valid.

In practice, no model I've tried can reliably reason about ElectroDB without making mistakes. Not because the model is "bad", but because the abstraction itself is opaque. The mental model required to use it correctly lives almost entirely in the documentation and in the heads of experienced users. It is not easily derivable from the code alone.

This contrast is revealing. Agentic systems perform best not where abstractions are powerful, but where they are legible. They struggle when correct usage depends on implicit knowledge or memorized rules rather than observable structure.

---

## Shared mental models between humans and agents

A recurring mistake in discussions about agentic AI is the assumption that agents will eventually replace human reasoning. In real products, that is rarely the goal. What actually matters is collaboration.

Agents propose changes. Humans review them. Agents explain decisions. Humans adjust intent. Over time, trust is built not because agents are always right, but because their behavior is legible and predictable.

TypeScript helps here not by enforcing correctness, but by externalizing structure. Interfaces, schemas, and explicit contracts make intent visible. They give both humans and agents something concrete to reason about.

When a model works well with tools like React or react-flow, it's because those tools encode their constraints in ways that are discoverable. When a model fails with something like ElectroDB, it's often because the real rules live outside the code.

Agentic workflows break down when understanding requires memorization rather than reasoning.

---

## Predictability over flexibility

There is a common intuition that agentic systems require maximum flexibility. In practice, the opposite is true.

The most effective agentic workflows are built around predictable surfaces: stable APIs, explicit schemas, deterministic side effects, and clearly defined responsibilities. Agents are powerful not because they can do anything, but because they can operate safely within well-understood constraints.

TypeScript nudges teams toward this style of system. It encourages explicit boundaries and shared contracts. It makes it easier to build systems where proposed changes can be reviewed, validated, and reasoned about before they are applied.

Agentic systems amplify whatever architecture they sit on top of. If the underlying system is implicit and opaque, agents amplify confusion. If it is explicit and predictable, agents become reliable collaborators.

---

## The real takeaway

Choosing TypeScript did not make our product "AI-native". It made it agent-ready.

Agentic AI is not primarily a question of intelligence. It is a question of legibility. Models thrive in ecosystems where structure is visible, conventions are shared, and correct behavior can be reasoned about rather than memorized.

Sometimes the most future-proof decision you can make is choosing the most boring option available — and then being disciplined about how you use it.
