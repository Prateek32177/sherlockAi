# Sherlock AI

> Open-source AI Investigation Platform for production systems.

Sherlock AI is an agentic AI platform that helps engineers investigate production incidents using natural language.

Instead of simply answering questions, Sherlock plans an investigation, gathers evidence from multiple sources, executes queries, retrieves documentation, and produces evidence-backed reports.

The goal is to build a production-grade AI system while exploring modern AI engineering concepts such as LangGraph, RAG, tool calling, structured outputs, evaluation, and observability.

---

## Vision

Modern production environments contain data across multiple systems:

- Logs
- Databases
- Runbooks
- Deployment history
- Incident reports
- Internal documentation

Finding the root cause of an issue often requires engineers to manually switch between these systems.

Sherlock AI aims to become an AI investigator that can:

- Plan investigations
- Decide which tools to use
- Query structured data
- Retrieve relevant knowledge
- Correlate evidence
- Explain findings with confidence

---

## Example

Instead of asking

> Why are payment failures increasing today?

Sherlock performs an investigation.

```

Question

↓

Plan Investigation

↓

Query Database

↓

Retrieve Runbooks

↓

Analyze Evidence

↓

Generate Report

```

Rather than giving a direct answer, Sherlock shows every step taken during the investigation.

---

## Goals

- Learn production AI engineering from first principles
- Build with real enterprise architecture
- Keep every AI decision transparent
- Avoid "black-box" responses
- Build something genuinely useful rather than another chatbot

---

## Core Features

### Investigation Engine

- Investigation lifecycle
- Timeline of execution
- Evidence collection
- Investigation reports

### Agentic AI

- LangGraph orchestration
- Planning
- Tool calling
- Conditional execution
- Stateful workflows

### Retrieval-Augmented Generation (RAG)

- Runbooks
- Internal documentation
- Incident history
- Deployment notes

### SQL Investigation

Natural language

↓

AI Planner

↓

Generate SQL

↓

Execute

↓

Analyze

↓

Explain

### Evidence-Based Reports

Every response includes:

- Investigation timeline
- Evidence used
- SQL executed
- Retrieved documents
- Confidence score

### Observability

- Agent execution timeline
- Tool traces
- Prompt history
- Token usage
- Evaluation metrics

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend

- Express
- TypeScript

### AI

- LangGraph
- LangChain
- OpenAI

### Database

- PostgreSQL
- pgvector
- Drizzle ORM

### Validation

- Zod

### Logging

- Pino

### Queue (Later)

- Redis
- BullMQ

### Deployment

- Docker
- Docker Compose

### Future

- LangSmith
- OpenTelemetry

---

## Project Structure

```

backend/
src/
investigations/
graph/
nodes/
tools/
rag/
db/
config/

frontend/

docs/

```

---

## Roadmap

### Phase 1

- [ ] Backend foundation
- [ ] PostgreSQL
- [ ] Docker
- [ ] Investigation API

### Phase 2

- [ ] LangGraph
- [ ] Planner node
- [ ] Reporter node
- [ ] Investigation timeline

### Phase 3

- [ ] SQL Tool
- [ ] PostgreSQL execution
- [ ] Evidence collection

### Phase 4

- [ ] RAG
- [ ] pgvector
- [ ] Runbook retrieval

### Phase 5

- [ ] Agentic investigations
- [ ] Conditional routing
- [ ] Stateful execution

### Phase 6

- [ ] Evaluation
- [ ] Memory
- [ ] Streaming
- [ ] Human approval

### Phase 7

- [ ] Multi-agent collaboration

---

## Learning Objectives

This project intentionally explores the technologies commonly used in modern AI Engineering.

- Agentic AI
- LangGraph
- LangChain
- RAG
- Tool Calling
- Structured Outputs
- SQL Agents
- Vector Databases
- Prompt Engineering
- AI Evaluation
- AI Observability
- Docker
- Production Deployment

---

## Status

🚧 Early Development

This project is being built incrementally from scratch with a focus on understanding production AI systems rather than creating another LLM demo.