import Image from "next/image";
import Link from "next/link";

const researchGroups = [
  {
    name: "Speech & Language Therapists",
    description:
      "Papers exploring clinical practice, diagnostic pathways, service pressures, training and implementation capacity in speech and language therapy.",
    papers: [
      {
        title:
          "Diagnostic procedures of paediatric speech and language therapists in the UK: Enabling and obstructive factors",
        authors: "Harvey H.",
        year: "2023",
        insight:
          "Shows how paediatric diagnostic practice is shaped by service structures, professional judgement, access to information and system pressures.",
        link: "https://doi.org/10.1111/1460-6984.12871",
      },
      {
        title:
          "Understanding capacity for implementing new interventions: A qualitative study of speech and language therapy services for children with speech sound disorder",
        authors: "Nicoll A, Roulstone S, Williams B, Maxwell M.",
        year: "2024",
        insight:
          "Explores how SLT services experience capacity constraints when trying to implement new interventions in real-world settings.",
        link: "https://doi.org/10.1111/1460-6984.12979",
      },
      {
        title:
          "Impact of COVID-19 on clinical practice of UK-based speech and language therapists working with school-aged children with neurodisability and oropharyngeal dysphagia",
        authors: "Morgan S, Weir KA, Mulligan K, Jacobs S, Hilari K.",
        year: "2024",
        insight:
          "Highlights how pandemic disruption affected SLT practice, service access and support for school-aged children with complex needs.",
        link: "https://doi.org/10.1111/cch.13159",
      },
      {
        title:
          "Evaluation of a pilot to introduce simulated learning activities to support speech and language therapy students' clinical development",
        authors: "Ormerod E, Mitchell C.",
        year: "2024",
        insight:
          "Supports the importance of training innovation and simulated learning for preparing future SLTs for clinical practice.",
        link: "https://doi.org/10.1111/1460-6984.12953",
      },
    ],
  },
  {
    name: "Digital Health & Technology",
    description:
      "Papers exploring telehealth, voice-assisted technology, virtual reality and remote assessment in speech, language and autism-related care.",
    papers: [
      {
        title:
          "Speech and Language Practitioners' Experiences of Commercially Available Voice-Assisted Technology: Web-Based Survey Study",
        authors: "Kulkarni P, Duffy O, Synnott J, Kernohan WG, McNaney R.",
        year: "2022",
        insight:
          "Shows clinician interest in voice-assisted technology while identifying usability, accessibility and implementation barriers.",
        link: "https://doi.org/10.2196/29249",
      },
      {
        title:
          "UK paediatric speech and language therapists' perceptions on the use of telehealth in current and future clinical practice: An application of the APEASE criteria",
        authors: "Charlton J, Gréaux M, Kulkarni A, Dornstauder M, Law J.",
        year: "2024",
        insight:
          "Explores the acceptability, practicality and future role of telehealth in paediatric SLT services.",
        link: "https://doi.org/10.1111/1460-6984.12988",
      },
      {
        title:
          "Telepractice application for the overt stuttering assessment of children aged 6-15 years old",
        authors: "Aldukair L, Ward D.",
        year: "2022",
        insight:
          "Demonstrates how telepractice can be applied to speech assessment, while raising questions about reliability and clinical suitability.",
        link: "https://doi.org/10.1111/1460-6984.12739",
      },
      {
        title:
          "Speech and Language Therapists' Perspectives of Virtual Reality as a Clinical Tool for Autism: Cross-Sectional Survey",
        authors: "Mills J, Duffy O.",
        year: "2025",
        insight:
          "Examines SLTs' views on virtual reality as a potential clinical tool for autism support and intervention.",
        link: "https://doi.org/10.2196/63235",
      },
      {
        title:
          "Telehealth Autism Diagnostic Assessments With Children, Young People, and Adults: Qualitative Interview Study With England-Wide Multidisciplinary Health Professionals",
        authors:
          "Spain D, Stewart GR, Mason D, Milner V, Fairhurst B, Robinson J, Gillan N, Ensum I, Stark E, Happe F.",
        year: "2022",
        insight:
          "Explores professional experiences of telehealth autism diagnostic assessment across England, including benefits, limitations and equity concerns.",
        link: "https://doi.org/10.2196/37901",
      },
    ],
  },
  {
    name: "Autism, Neurodiversity & Family Experience",
    description:
      "Papers exploring autism, ADHD, bilingualism, family participation and the broader lived experience surrounding support needs.",
    papers: [
      {
        title:
          "Autism and bilingualism: A thematic analysis of practitioner perspectives in the United Kingdom",
        authors: "Davis R, Zaki FBM, Sargent L.",
        year: "2024",
        insight:
          "Highlights practitioner perspectives on autism and bilingualism, including uncertainty, assumptions and the need for culturally informed support.",
        link: "https://doi.org/10.1111/1460-6984.12939",
      },
      {
        title:
          "Parental Participation in NICU-Based Occupational Therapy, Physiotherapy, and Speech and Language Therapy: A Qualitative Study",
        authors: "Edney SK, McHugh G.",
        year: "2023",
        insight:
          "Shows the importance of parent participation, communication and inclusion in therapy contexts involving vulnerable children.",
        link: "https://doi.org/10.1097/ANC.0000000000000830",
      },
      {
        title:
          "Impact of the COVID-19 Pandemic on Children with ASD and ADHD in Northern Greece: A Pilot Study",
        authors:
          "Pavlidou E, Samara A, Michailidou S, Kinali M, Spilioti M, Ziavra N.",
        year: "2025",
        insight:
          "Explores how pandemic disruption affected children with ASD and ADHD, reinforcing the importance of continuity, routine and support access.",
        link: "https://doi.org/10.3390/brainsci15111212",
      },
    ],
  },
  {
    name: "Schools & Education",
    description:
      "Papers exploring collaboration between schools and SLTs, school-commissioned services, teacher perspectives and support for children with SLCN.",
    papers: [
      {
        title:
          "Collaboration between teachers and speech and language therapists: Services for primary school children with speech, language and communication needs",
        authors: "Glover A, McCormack J, Smith-Tamaray M.",
        year: "2015",
        insight:
          "Explores how teachers and SLTs collaborate to support primary school children with speech, language and communication needs.",
        link: "https://doi.org/10.1177/0265659015603779",
      },
      {
        title: "A school-commissioned model of speech and language therapy",
        authors: "White S, Spencer S.",
        year: "2018",
        insight:
          "Examines a school-commissioned model of SLT, helping frame how service design affects access, collaboration and delivery.",
        link: "https://doi.org/10.1177/0265659018780961",
      },
      {
        title:
          "Speech, language and communication needs in education: perspectives from research and practice",
        authors: "Dockrell JE et al.",
        year: "2014-2017",
        insight:
          "Provides education-focused perspectives on identifying and supporting speech, language and communication needs in school contexts.",
        link: "https://doi.org/10.1111/1460-6984.12089",
      },
      {
        title:
          "Teachers' attitudes towards autistic pupils' social communication differences",
        authors: "Lewis J, Stojanovik V.",
        year: "2024",
        insight:
          "Explores teacher attitudes towards autistic pupils' social communication differences, linking school culture to inclusion and support.",
        link: "https://doi.org/10.1080/13603116.2024.2422085",
      },
      {
        title:
          "Collaborative working between speech and language therapists and teaching staff within mainstream UK primary schools: A scoping review",
        authors: "Mathers A, et al.",
        year: "2024",
        insight:
          "Reviews collaborative working between SLTs and teaching staff, highlighting the importance of shared responsibility and communication.",
        link: "https://doi.org/10.1177/02656590241232613",
      },
    ],
  },
];

const questionnaires = [
  {
    title: "Parents & Carers",
    description:
      "Help us understand the challenges families face when supporting children with speech, language and communication needs.",
    link: "https://qualtrics.kcl.ac.uk/jfe/form/SV_8BAc5AalhHuXzYG",
  },
  {
    title: "Speech & Language Therapists",
    description:
      "Share your experience of assessment, intervention, service pressures and unmet needs in practice.",
    link: "https://qualtrics.kcl.ac.uk/jfe/form/SV_8BAc5AalhHuXzYG",
  },
  {
    title: "School Staff",
    description:
      "Tell us what it is like to support children with communication needs in educational settings.",
    link: "https://qualtrics.kcl.ac.uk/jfe/form/SV_8BAc5AalhHuXzYG",
  },
];

const team = [
  {
    name: "Amani Touihri",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/amani-touihri-a67a64179/",
    image: "/photo/ameny.png",
    
  },
  {
    name: "Burte-Ujin Gerelt-Od",
    role: "Biomedical Engineer",
    linkedin: "https://www.linkedin.com/in/burte-ujin-gerelt-od-6a23152b0/",
    image: "/photo/burte.jpeg",
  },
  {
    name: "Maximilien Mazoudier",
    role: "Business Graduate",
    linkedin: "https://www.linkedin.com/in/maximilien-mazoudier-6a23152b0/",
    image: "/photo/maximilien.png",
  },
  {
    name: "Tanya Garg",
    role: "Mental Health Innovator",
    linkedin: "https://www.linkedin.com/in/tanya-garg-akc-7842941b5/",
    image: "/photo/tanya.jpeg",
  },
  {
    name: "Zeyana AlMazroui",
    role: "Biomedical Engineer",
    linkedin: "https://www.linkedin.com/in/zeyana-almazroui-6a23152b0/",
    image: "/photo/zeyana.png",
  },
];

export default function ResearchPage() {
  const paperCount = researchGroups.reduce(
    (total, group) => total + group.papers.length,
    0
  );

  return (
    <main id="top" className="min-h-screen bg-white px-6 py-20 text-[#293A5D] md:px-16" >
      <section className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-16 inline-block text-sm text-[#697E89] transition hover:text-[#293A5D]"
        >
          ← Back to MindMine
        </Link>

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#87B0AC]">
          Evidence & Participation
        </p>

        <h1 className="mb-8 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Everything starts with listening.
          <br />
          Everything continues with evidence.
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#697E89] md:text-xl">
          The voices on the homepage are not assumptions. They reflect patterns
          found across research, clinical practice, education and lived
          experience.
        </p>
      </section>

      <section className="mx-auto mt-28 max-w-7xl">
  <p className="mb-16 text-xs uppercase tracking-[0.35em] text-[#87B0AC]">
    Grounded in evidence. Driven by lived experience.
  </p>

  <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
    <div>
      <p className="text-7xl font-semibold leading-none md:text-8xl text-[#293A5D]">
        17
      </p>
      <p className="mt-4 text-xl text-[#697E89] md:text-2xl">
        research papers reviewed
      </p>
    </div>

    <div>
      <p className="text-7xl font-semibold leading-none md:text-8xl text-[#293A5D]">
        3
      </p>
      <p className="mt-4 text-xl text-[#697E89] md:text-2xl">
        stakeholder groups listening to
      </p>
    </div>

    <div>
      <p className="text-7xl font-semibold leading-none md:text-8xl text-[#293A5D]">
        1
      </p>
      <p className="mt-4 text-xl text-[#697E89] md:text-2xl">
        shared mission
      </p>
    </div>
  </div>
</section>

      <section className="mx-auto mt-28 max-w-7xl">
  <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#87B0AC]">
    What we are seeing
  </p>

  <h2 className="mb-16 max-w-4xl text-4xl font-medium leading-tight md:text-6xl">
    The research keeps pointing to the same quiet pressures.
  </h2>

  <div className="grid gap-10 md:grid-cols-2">
    {[
      "Long waiting times and delayed access to support.",
      "Parents and carers carrying emotional and practical burden.",
      "Clinicians and schools trying to do more with limited capacity.",
      "Digital tools showing promise but needing careful implementation.",
      "Communication needs being shaped by home, school and service systems.",
      "A gap between what people hear and what they actually need.",
    ].map((item, index) => (
      <div key={item} className="flex gap-6">
        <span className="text-sm text-[#87B0AC]">
          0{index + 1}
        </span>

        <p className="max-w-xl text-2xl leading-snug text-[#526790] md:text-3xl">
          {item}
        </p>
      </div>
    ))}
  </div>
</section>

      <section className="mx-auto mt-32 max-w-7xl">
        <h2 className="mb-10 text-3xl font-medium md:text-5xl">
          Research papers
        </h2>

        <div className="space-y-16">
          {researchGroups.map((group) => (
            <section key={group.name}>
              <div className="mb-6 flex flex-col justify-between gap-4  pt-8 md:flex-row md:items-end">
                <div>
                  <h3 className="text-2xl font-medium md:text-4xl">
                    {group.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[#697E89]">
                    {group.description}
                  </p>
                </div>

                <p className="text-sm text-[#87B0AC]">
                  {group.papers.length} papers
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {group.papers.map((paper) => (
                  <article
                    key={paper.title}
                    className="rounded-3xl border border-[#C4D9BC]/70 bg-white p-6 shadow-sm transition hover:border-[#87B0AC]"
                  >
                    <p className="mb-4 text-sm text-[#87B0AC]">
                      {paper.year}
                    </p>

                    <h4 className="mb-4 text-2xl font-medium text-[#293A5D]">
                      {paper.title}
                    </h4>

                    <p className="mb-4 text-sm text-[#697E89]">
                      {paper.authors}
                    </p>

                    <p className="mb-6 leading-7 text-[#526790]">
                      {paper.insight}
                    </p>

                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#526790] transition hover:text-[#87B0AC]"
                    >
                      Read paper →
                    </a>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

 <section className="mx-auto mt-32 max-w-7xl">
  <div className="mb-10">
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#87B0AC]">
      Project introduction
    </p>

    <h2 className="max-w-5xl text-4xl font-medium leading-tight text-[#293A5D] md:text-6xl">
      Listening to the people behind the waiting lists.
    </h2>
  </div>

  <div className="overflow-hidden rounded-3xl border border-[#E7EAF0] bg-white shadow-sm">
    <video
      controls
      playsInline
      preload="metadata"
      poster="/photo/marketingcover.jpg"
      className="aspect-video w-full"
    >
      <source src="/video/MindMine.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

   <div className="mt-8 grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
    <p className="text-sm uppercase tracking-[0.35em] text-[#87B0AC]">
      Why MindMine?
    </p>

    <p className="w-full text-xl leading-9 text-[#697E89] md:text-2xl">
      A short introduction to the problem we are exploring, why it matters and
      how MindMine is beginning to listen.
    </p>
  </div>
</section>
      <section className="mx-auto mt-32 max-w-7xl">
        <h2 className="mb-10 text-3xl font-medium md:text-5xl">
          Participate
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {questionnaires.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#C4D9BC]/70 bg-white p-6 shadow-sm transition hover:border-[#87B0AC]"
            >
              <h3 className="mb-4 text-2xl font-medium text-[#293A5D]">
                {item.title}
              </h3>

              <p className="mb-8 leading-7 text-[#526790]">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full border border-[#87B0AC] px-5 py-3 text-sm text-[#526790] transition hover:bg-[#87B0AC] hover:text-[#FDFAFF]"
              >
                Take questionnaire
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl  py-16">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#87B0AC]">
              The Team
            </p>

            <h2 className="max-w-3xl text-3xl font-medium md:text-5xl">
              Built by people listening across disciplines.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-[#697E89]">
            MindMine is being developed by a multidisciplinary team working
            across digital health, research, engineering, healthcare innovation
            and communication support.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] bg-[#E8ECEC]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-[#697E89]">
                    Photo
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-medium text-[#293A5D]">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-[#87B0AC]">{member.role}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-sm text-[#526790] transition hover:text-[#87B0AC]"
                >
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl pt-16">
        <p className="mb-4 text-3xl font-medium">#MindMine</p>

        <a
          href="mailto:mindmine@aheadstudio.net"
          className="text-[#697E89] transition hover:text-[#87B0AC]"
        >
          mindmine@aheadstudio.net
        </a>
      </section>
      <div className="mt-16 text-center">
  <a
    href="#top"
    className="text-sm uppercase tracking-[0.3em] text-[#87B0AC] transition hover:text-[#293A5D]"
  >
    Back to beginning ↑
  </a>

</div>
    </main>
  );
}
