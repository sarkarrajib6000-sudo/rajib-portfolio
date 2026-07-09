# BRIEFING — 2026-07-09T11:58:30Z

## Mission
Build a production-ready, responsive personal portfolio website for Rajib using React, TypeScript, Vite, Tailwind CSS v3, Framer Motion, and Lucide React.

## 🔒 My Identity
- Archetype: teamwork_preview_orchestrator
- Roles: orchestrator, user_liaison, human_reporter, successor
- Working directory: /data/data/com.termux/files/home/projects/portfolio/rajib-portfolio/.agents/orchestrator
- Original parent: top-level
- Original parent conversation ID: f17ea1a3-cedf-4c4c-aaf3-a71c7edb8ac2

## 🔒 My Workflow
- **Pattern**: Project
- **Scope document**: /data/data/com.termux/files/home/projects/portfolio/rajib-portfolio/.agents/orchestrator/plan.md
1. **Decompose**: Decomposed the project into 9 milestones spanning setups, components, image assets, and testing.
2. **Dispatch & Execute**:
   - **Delegate (sub-orchestrator)**: Spawn a worker or sub-orchestrator for each milestone sequentially to comply with incremental progress and manual approvals.
3. **On failure**:
   - Retry: nudge stuck agent or re-send task
   - Replace: spawn fresh agent with partial progress
   - Skip: proceed without (only if non-critical)
   - Redistribute: split stuck agent's remaining work
   - Redesign: re-partition decomposition
   - Escalate: report to parent (sub-orchestrators only, last resort)
4. **Succession**: Self-succeed when spawn count >= 16.
- **Work items**:
  - M1: Project Setup & Testing Infra [pending]
  - M2: Data Schema & Portfolio Copy [pending]
  - M3: Core Layout & Dark/Light Theme [pending]
  - M4: Hero & About Sections [pending]
  - M5: Skills & Certifications [pending]
  - M6: Featured Projects & Modals [pending]
  - M7: Contact Form & Validation [pending]
  - M8: Visual Assets Integration [pending]
  - M9: Quality Assurance & Hardening [pending]
- **Current phase**: 1
- **Current focus**: M1: Project Setup & Testing Infra

## 🔒 Key Constraints
- Work incrementally, complete one milestone at a time, verify after each, wait for approval.
- Use generate_image for screenshot assets.
- Integrate Vitest with form, theme, and data tests.
- Dark-first, responsive design with framer-motion.
- Never reuse a subagent after it has delivered its handoff.

## Current Parent
- Conversation ID: f17ea1a3-cedf-4c4c-aaf3-a71c7edb8ac2
- Updated: not yet

## Key Decisions Made
- Sequential milestone execution due to incremental approval requirement.

## Team Roster
| Agent | Type | Work Item | Status | Conv ID |
|-------|------|-----------|--------|---------|
| worker_m1 | teamwork_preview_worker | M1 Setup | in-progress | 12617352-f476-4429-b122-0ed47a3979d2 |

## Succession Status
- Succession required: no
- Spawn count: 1 / 16
- Pending subagents: 12617352-f476-4429-b122-0ed47a3979d2
- Predecessor: none
- Successor: not yet spawned

## Active Timers
- Heartbeat cron: task-31
- Safety timer: none
- On succession: kill all timers before spawning successor
- On context truncation: run `manage_task(Action="list")` — re-create if missing

## Artifact Index
- plan.md — Project plan outlining architecture and milestones
- progress.md — Heartbeat and status check list
- context.md — Context details of codebase and paths
