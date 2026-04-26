---
title: AI Security Glossary
description: AI security glossary covering prompt injection, adversarial examples, model poisoning, jailbreaking, data poisoning, and other key terms every AI security professional needs to know.
---

Understanding the terminology is the first step toward securing the machine. Here are the core concepts at **77 Security**.

### Adversarial Example
An input to a machine learning model that is specifically designed to cause the model to make a mistake. In image recognition, this might be a few "noisy" pixels that make a model see a toaster instead of a dog.

### Data Poisoning
An attack that happens during the **training phase**. By inserting malicious data into the training set, an attacker can create a "backdoor" in the model that they can exploit later.

### Jailbreaking
The process of using clever prompts to bypass the built-in safety filters of an LLM. Unlike prompt injection, jailbreaking usually focuses on making the model "roleplay" as an unrestricted entity.

### Prompt Injection
A vulnerability where a user’s input is mistaken by the LLM for a system-level command. 
* **Direct:** User types the command.
* **Indirect:** The LLM reads a website or email that contains hidden malicious instructions.

### RAG (Retrieval-Augmented Generation)
A technique that allows an LLM to look at private data (like your company docs) before answering. 
**Security Risk:** If the RAG source is compromised, the model could leak sensitive info to unauthorized users.

### Temperature
A parameter that controls the "creativity" of an LLM. 
* **Low Temperature:** The model is more predictable and safe.
* **High Temperature:** The model is more creative but more prone to **Hallucinations**.
