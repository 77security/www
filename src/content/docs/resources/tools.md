---
title: AI Security Tools
description: Curated list of AI security tools for LLM red teaming, prompt injection testing, model evaluation, and runtime protection. Covers open-source and enterprise options.
date: 2026-04-26
---

To secure AI systems at **77 Security**, we utilize a mix of open-source and enterprise-grade tools. This list is updated regularly as the landscape evolves.

## Red Teaming & Attack Simulation
These tools help security researchers simulate attacks to find vulnerabilities before the "bad actors" do.

| Tool Name | Developer | Best For |
| :--- | :--- | :--- |
| **Garak** | Leon Derczynski | Scanning LLMs for hallucinations and prompt injections. |
| **PyRIT** | Microsoft | Automating the evaluation of generative AI risk. |
| **Counterfit** | Microsoft | General-purpose terminal tool for AI security testing. |

## Evaluation & Benchmarking
Use these to measure how "safe" your model is compared to industry standards.

* **Giskard:** An open-source framework for testing ML models (from Tabular to LLMs).
* **DeepEval:** "Unit testing" for LLMs. It lets you write tests to ensure your model doesn't drift into unsafe territory.

## Runtime Protection (Guardrails)
Tools that sit between the user and the model to stop attacks in real-time.

1.  **NeMo Guardrails (NVIDIA):** A toolkit to add programmable guardrails to LLM-based conversational systems.
2.  **Llama Guard (Meta):** A safeguard model specifically tuned to detect unsafe prompts and responses.

:::note
**77 Security Tip:** Never rely on a single tool. A multi-layered approach using both a "Scanner" (like Garak) and a "Guardrail" (like NeMo) is the industry standard.
:::
