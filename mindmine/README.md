# MindMine | Application

This directory contains the application component of **MindMine**, a research-led project exploring digital support for children with speech, language and communication needs (SLCN), their families and speech and language therapists (SLTs).

## Product concept

MindMine investigates how a digital platform could help therapists organise home-based activities and help families engage with those activities between appointments.

### Intended workflows

- **Therapists:** Prepare and share suitable home activities, subject to professional judgement.
- **Parents and carers:** Access activities and communicate progress or difficulties.
- **Care continuity:** Help therapists and families stay aligned between sessions.

These are intended workflows, not a verified list of implemented features.

## Implementation status

The code in this directory should be reviewed before documenting exact features, frameworks, database services, APIs, authentication or deployment status.

| Item | Status |
| --- | --- |
| Programming language and framework | To verify from source |
| Package manager and dependencies | To verify from manifests |
| Local development commands | To verify from scripts |
| Environment variables | To document without exposing secrets |
| Database and authentication | To verify from source |
| Automated tests | To verify from repository |
| Deployment | To verify |

## Getting started

1. Open this directory and identify its dependency manifest (for example `package.json`, `pyproject.toml` or `requirements.txt`).
2. Install the dependencies using the package manager specified by the project.
3. Create local environment configuration only if required; never commit secrets.
4. Follow the run scripts or entry point defined in the source.
5. Check any tests or build scripts before deployment.

> **Exact installation commands intentionally omitted:** they must match the repository's actual code and tooling.

## Design priorities

- Accessibility for families with different digital literacy levels.
- Clear, low-friction workflows for busy SLTs.
- Privacy by design and appropriate access controls.
- Safeguarding and responsible handling of child-related information.
- Clinical oversight and transparent limits of the software.

## Validation roadmap

Before claiming readiness for real-world clinical use, evaluate usability, technical reliability, privacy, safeguarding, clinical safety and any applicable regulatory requirements. User testing and clinical evaluation should be planned with appropriate permissions.

## Research context

The application direction is informed by the project's stakeholder research. See the [research and analysis README](../data%20analysis/README.md) and [main project README](../README.md).

## Disclaimer

This application is exploratory and should not be used as a substitute for assessment or treatment by a qualified professional.
