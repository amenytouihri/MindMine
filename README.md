# MindMine

**Exploring digital support for paediatric speech and language therapy**

MindMine is a research-led digital health project investigating how technology could support children with speech, language and communication needs (SLCN), their families, and speech and language therapists (SLTs).

The repository brings together stakeholder research, data analysis and application development. Its aim is to explore how therapist-guided activities, family engagement and communication between appointments could be supported through a digital platform.

> **Project status:** Research and exploratory software development. MindMine is not a clinically validated or approved medical device.

## Why this project?

Speech and language support often depends on activities and communication that continue beyond appointments. MindMine explores opportunities to make those activities easier to organise, understand and follow up, without replacing professional assessment or care.

## Research

Stakeholder discovery included SLTs, parents and school representatives. In the SLT responses analysed, reported median time allocations highlighted a gap between current and preferred practice:

| Activity | Current median | Preferred median |
| --- | ---: | ---: |
| Family engagement | 13% | 38% |
| Report writing | 38% | 13% |

These are descriptive results from the project's survey samples, not population-wide estimates. See [`data analysis/README.md`](data%20analysis/README.md) for context and analytical limitations.

## Proposed product direction

The research informed exploration of a therapist-and-parent platform for:

- Assigning and organising therapist-guided home activities.
- Making activities accessible to families between appointments.
- Supporting communication and progress feedback.
- Reducing avoidable friction in clinical and family workflows.

These are product objectives; they should not be read as claims that every feature has been implemented.

## Repository structure

```text
MindMine/
├── data analysis/    # Research analysis and supporting materials
├── mindmine/         # Application code
├── LICENSE
└── README.md
```

For technical setup and verified implementation details, see [`mindmine/README.md`](mindmine/README.md).

## Approach

1. Explore clinical and family workflows through stakeholder research.
2. Analyse responses and identify unmet needs.
3. Translate findings into product requirements and design decisions.
4. Develop and evaluate a prototype.
5. Iterate with users, considering accessibility, privacy and safety.

## Ethics, privacy and safety

Work involving children, families or health-related information requires careful attention to consent, safeguarding, secure handling of personal data and applicable UK data protection requirements. Any future clinical deployment would need appropriate governance, evaluation and regulatory assessment based on the software's intended purpose.

Do not commit identifiable participant responses, credentials or sensitive clinical information to this repository.

## Author

**Ameny Touihri**  
Software Engineering · Bioinformatics & Computational Biology · MedTech Innovation & Entrepreneurship

[GitHub](https://github.com/amenytouihri) · [Portfolio](https://ameny.vercel.app)

## Licence

See the repository's [`LICENSE`](LICENSE) file for applicable terms.

## Disclaimer

MindMine is an exploratory research and software project. It does not provide diagnosis, treatment recommendations or a substitute for qualified speech and language therapy.
