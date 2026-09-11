import { NewsSection } from "../../assets/styles";

const newsItems = [
  /*
  {
    id: 2,
    date: "Aug 2025",
    description: (
      <>
        Selected to attend <a
          href="https://www.linkedin.com/posts/aramide-adebesin_urunana-activity-7372634505234436097-17LJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU"
          target="_blank"
          rel="noopener noreferrer"
        > Deep Learning Indaba (DLI) 2025 in Kigali, Rwanda</a>, where I presented my research on supporting visually impaired individuals in medication management alongside Zainab Tairu. 
      </>
    ),
  },
  {
    id: 2,
    date: "June 2025",
    description: (
      <>
        I served on the planning team for a career-focused conference organized by the Women in Health Tech Initiative, themed  <a
          href="https://www.linkedin.com/posts/aramide-adebesin_hello-fam-its-been-a-while-here-my-final-activity-7345213539730534400-Urei?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU"
          target="_blank"
          rel="noopener noreferrer"
        >  “From Classroom to Impact: Building Your Tech Career.”</a> The event was designed to encourage students to explore career paths beyond the classroom and featured industry speakers across technology and innovation.
      </>
    ),
  },
  */
  {
    id: 1,
    date: "Sept 2026",
    description: (
      <>
        I was invited as a speaker by the <a
          href="https://lnkd.in/p/eha7pjZm"
          target="_blank"
          rel="noopener noreferrer"
        > DSN OAU Chapter</a>, during an information session for the DSN AI Bootcamp 2026. I spoke on the Data Analytics & Data Science Tracks, guiding participants on tackling the “Audit the Dashboard” challenge through identifying dataset errors, validating management claims, and building clean Power BI and Excel dashboards. I also shared insights on structuring a strong research abstract for the Poster Track, covering problem statements, methodology, and real-world impact. 
        
      </>
    ),
  },
  {
  id: 2,
  date: "Feb 2026",
  description: (
    <>
      Selected through a competitive process as a recipient of the <strong>Prof. Anthony Uyi Afuwape Scholarship</strong> by the <strong>Department of Mathematics, Obafemi Awolowo University (OAU)</strong>, in recognition of my commitment to Mathematics, academic growth, and community service. This scholarship supports my continued journey toward applying mathematical knowledge to solve real-world problems.
    </>
  ),
},
  /*
  {
    id: 2,
    date: "Sept 2026",
    description: (
      <>
        I was invited as a panel speaker at OAU Finance Week ’25, contributing to a session titled <a
          href="https://www.linkedin.com/posts/oluwatomisin-ola-samuel-62674b1b4_financeweek2025-financialindependence-cowrywiseoau-ugcPost-7330859271582019585-n1dJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU"
          target="_blank"
          rel="noopener noreferrer"
        >“The Quiet Power of Community in Personal Success.”</a> I shared insights on how community, collaboration, and leadership shape personal and professional growth with a diverse academic audience. 
        
      </>
    ),
  },
  */
  {
    id: 3,
    date: "Jan 2026",
    description: (
      <>
       Volunteered as a Data Analytics Instructor for the<a href="https://www.linkedin.com/posts/stephen-babatunde-6868611b4_im-excited-to-share-another-milestone-for-ugcPost-7409543545755217920-vsal?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwBU3EBFWmeTyvJu0ggthSsa8o2aVV-QtY"> Cowrywise OAU Skill Acquisition Program</a> delivering training in data analysis to students as part of a six-week digital skills initiative. Contributed to equipping participants with practical technical skills while collaborating with other facilitators to support over 280 active learners throughout the program.
      </>
    ),
  },
  {
    id: 4,
    date: "July 2025",
    description: (
      <>
        I spoke as a panelist <a href="https://www.linkedin.com/posts/elizabeth-ogunsakin_hello-fam-its-been-a-while-here-a-few-activity-7355952589957406720-il0E?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwBU3EBFWmeTyvJu0ggthSsa8o2aVV-QtY"> Think Different 3.0 Mathematics Conference</a>, themed “Maths in Motion: From Equations to Innovation,” where I engaged with undergraduate and secondary school students on the role of mathematics in driving problem-solving, creativity, and emerging technologies, including artificial intelligence and machine learning.
       
      </>
    ),
  },
  {
    id: 5,
    date: "June 2025",
    description: (
      <>
       Selected as one of the 31 participants from over 700 applicants across 19 countries for the  <a href="https://www.linkedin.com/posts/dsnai_datasciencenigeria-dsncommunity-dsnladiesinai-ugcPost-7334210183646093314-rdwo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwBU3EBFWmeTyvJu0ggthSsa8o2aVV-QtY" target="_blank" rel="noopener noreferrer"> DSN Ladies In AI Mentorship Programme</a> and advanced as one of the 10 finalists. Completed the Chatbot Creation track, where I developed practical skills in building AI-powered conversational systems and applying artificial intelligence techniques to solve real-world problems
      </>
    ),
  },
  {
    id: 6,
    date: "Feb 2025",
    description: (
      <>
        As the<a href="https://www.linkedin.com/posts/dsnai_datasciencenigeria-dsncommunity-spotlights-activity-7303343728369324032-0jxP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer" > Data Science Nigeria (DSN) OAU Chapter Lead </a> I coordinated and participated in a two-week physical bootcamp focused on Data Analysis, Data Science/Machine Learning, and Deep Learning/AI. I contributed to the learning sessions while collaborating with core team members and volunteer tutors to support 50+ participants through structured training and hands-on guidance.
      </>
    ),
  },
  {
    id: 7,
    date: "Feb 2025",
    description: (
      <>
        Data Science Nigeria (DSN) OAU Chapter, which I led, was officially <a href="https://www.linkedin.com/posts/dsnai_datasciencenigeria-dsncommunity-spotlights-activity-7303343728369324032-0jxP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer"> spotlighted</a> by Data Science Nigeria in recognition of its impactful programs, community growth, and contributions to advancing AI literacy and skills development. Under my leadership, the community has hosted technical events, info sessions, and initiatives connecting students to global AI opportunities.
      </>
    ),
  },

  {
    id: 8,
    date: "Jan 2025",
    description: (
      <>
        I was selected as the Community Lead of the <a href="https://www.linkedin.com/posts/dsn-oau_greetings-from-dsn-oau-the-past-two-ugcPost-7316417757925851136-Gc1I?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwBU3EBFWmeTyvJu0ggthSsa8o2aVV-QtY" target="_blank" rel="noopener noreferrer">Data Science Nigeria (DSN) OAU Chapter</a>, where I led community engagement, coordinated technical activities, and supported initiatives aimed at promoting AI and data science learning. I organized community meetups, facilitated discussions, and guided members on opportunities for growth in the data science ecosystem.
      </>
    )
  },
  /*
  {
    id: 7,
    date: "Jan, 2025",
    description: (
      <>
        Volunteered as a speaker with <a href="https://www.linkedin.com/company/sca-oau/about/," target="_blank" rel="noopener noreferrer"> She Code Africa (SCA) OAU </a>community during the <a href="https://www.linkedin.com/posts/aramide-adebesin_hi-fam-happy-new-month-my-month-of-activity-7292481152798351360-dtp-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer"> STEM-A-GIRL outreach program</a>, visiting multiple secondary schools to engage female students on STEM education and career pathways. The initiative reached over 800 girls, providing mentorship, inspiration, and guidance on opportunities in STEM.
    </>
    )
  },
  {
    id: 8,
    date: "Nov 2024",
    description: (
      <>
        Was part of <a href="https://www.linkedin.com/posts/deep-learning-indaba_ideathon-winners-we-are-excited-activity-7287868619990966272-Ou7K?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer"> Team TQuick</a>, which was part of the selected winners of the Deep Learning Indaba 2024 Ideathon, developing an AI-driven solution under expert mentorship. The project emerged victorious among multiple teams following a highly competitive ideation and evaluation process.
      </>
    ),
  },
  {
    id: 9,
    date: "Oct 2024",
    description: (
      <>
         Participated as part of the Team WARP in the <a href="https://www.linkedin.com/posts aramide-adebesin_hi-fam-i-come-bearing-good-news-activity-7268523727825358848-9GCv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer">MATLAB Nigeria Coding Challenge 2024</a>, progressing to the final stage and earning two special mentions.
      </>
    ),
  },
  {
    id: 10,
    date: "Oct 2024",
    description: (
      <>
        Won <b>2nd Best Poster award</b> at the <a href="https://datasciencenigeria.org/ai-bootcamp/" target="_blank" rel="noopener noreferrer">Data Science Nigeria (DSN) AI Bootcamp 2024</a>, for my work on  Foodie Lens, an image recognition project that identifies African dishes from images and provides recipes and cooking instructions. <a href="https://drive.google.com/file/d/14HsvkIEGH4CZ5i16aAa4hzf_S2dr_E2r/view?usp=sharing" target="_blank" rel="noopener noreferrer">[poster]</a>
      </>
    ),
  },
  */
  {
    id: 9,
    date: "Oct 2024",
    description: (
      <>
        Selected through a competitive process to attend the all-expense-paid <a href="https://www.linkedin.com/posts/elizabeth-ogunsakin_mydsnaibootcampstory-dsnaibootcamp2024-datasciencenigeria-activity-7252896215288152064-7Qki?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwBU3EBFWmeTyvJu0ggthSsa8o2aVV-QtY" target="_blank" rel="noopener noreferrer"> Data Science Nigeria (DSN) Artificial Intelligence Bootcamp 2024</a> ,where I received intensive hands-on training in artificial intelligence and machine learning.
      </>
    ),
  },
  {
    id: 10,
    date: "2023/2024",
    description: (
      <>
        Selected as the Data Analytics Lead for the <a href="https://www.linkedin.com/in/elizabeth-ogunsakin/overlay/Position/2465616069/treasury/?profileId=ACoAADwBU3EBFWmeTyvJu0ggthSsa8o2aVV-QtY" target="_blank" rel="noopener noreferrer"> Google Developer Student Club (GDSC) OAU Chapter</a>, leading initiatives to promote data-driven problem solving through workshops, peer learning sessions, and practical projects in data analytics and machine learning.
      </>
    ),
  },
  /*
  {
    id: 13,
    date: "Aug 2024",
    description: (
      <>
        <a href="https://www.linkedin.com/posts/aramide-adebesin_hey-fam-for-a-while-its-been-raining-congratulations-activity-7205275089787842560-F3kJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer">Selected </a>through a competitive application process to attend the <a href="https://deeplearningindaba.com/" target="_blank" rel="noopener noreferrer">Deep Learning Indaba Conference 2024</a> in Dakar, Senegal, and awarded travel and accommodation grants. Thank you to the DLI Committee for the full sponsorship!
      </> 
    ),
  },
  {
    id: 14,
    date: "July 2024",
    description: (
      <>
        Selected to<a href="https://www.linkedin.com/posts/pythonnigeria_pyconng-python-pythonconference-activity-7201234126127919104-UA82?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer"> speak</a> at <a href="https://www.pynigeria.org/" target="_blank" rel="noopener noreferrer">PyCon Nigeria (PyConNG)</a>, on “Activation Functions Simplified: A Beginner’s Guide”, introducing core neural network concepts to a broad Python community audience.
      </>
    ), 
  },
  {
    id: 15,
    date: "Feb 2024",
    description: (
      <>
        Led and hosted a <a href="https://www.linkedin.com/posts/women-in-data-science-ile-ife_wids2024-widsdatathon2024-activity-7149400330718420992-6Hng?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer"> Datathon Workshop themed “Equity in Healthcare”</a> as the Community Lead of <a href="https://www.linkedin.com/company/women-in-data-science-ile-ife/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer"> Women in Data Science (WiDS) Ile-Ife</a>, facilitating hands-on learning, mentorship access, and applied analytics for healthcare problem-solving.
      </>
    ),
  },
  {
    id: 18,
    date: "Feb 2024",
    description: (
      <>
        I delivered a talk on <a href="https://www.linkedin.com/posts/aramide-adebesin_embark-on-a-transformative-journey-into-the-activity-7162771620879626240-n7Ka?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer"> Data Preprocessing </a> under the Microsoft Learn Student Ambassadors Program.
      </>
    ),
  },
  {
    id: 18,
    date: "Nov 2023",
    description: (
      <>
        Selected as a <a href="https://www.linkedin.com/posts/aramide-adebesin_winners-nathanandaramide-activity-7097537173758840832-sROs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer"> Stage B Cash Prize Winner </a> in the <a href="https://hamoye.org/" target="_blank" rel="noopener noreferrer"> Hamoye Data Science</a> Cohort (Spring 2023), a competitive data science program recognizing outstanding performance and project execution.
      </>
    ),
  },
  {
    id: 16,
    date: "Oct 2023",
    description: (
      <>
        Participated in the <a href="https://www.linkedin.com/posts/aramide-adebesin_hi-there-i-know-its-been-a-while-ive-activity-6992129670414503936--6kb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer">Tech Girls Advocacy Drive</a>, engaging directly with students to promote STEM education and career awareness for girls, reaching over 400 girls. The initiative was supported by <a href="https://tech4dev.com/" target="_blank" rel="noopener noreferrer">Tech4Dev</a>, with sponsorship from <a href="https://news.microsoft.com/source/" target="_blank" rel="noopener noreferrer">Microsoft </a>and the <a href="https://www.isdb.org/" target="_blank" rel="noopener noreferrer">Islamic Development Bank (IsDB)</a>.
      </>
    ),
  },
  {
    id: 17,
    date: "Oct 2023",
    description: (
      <>
        Led a team of three to participate in the Datafest Africa Datathon organized by <a href="https://www.datacommunityafrica.org/">Data Community Africa</a> and secured the top-10 position as <a href="https://www.linkedin.com/posts/aramide-adebesin_teamdatatitans-activity-7118353731284262912-HuP1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer"> Team Data Titans</a>
      </>
    ),
  },
  {
    id: 19,
    date: "Oct 2023",
    description: (
      <>
       I  <a href="https://www.linkedin.com/posts/aramide-adebesin_hello-everyone-i-have-exciting-news-to-activity-7130955577525960704-3zzb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADSyGbUB1N3kuzo3tUHflsJwUQOC7VuzXqU" target="_blank" rel="noopener noreferrer">spoke</a> at the Data Science Masterclass hosted by <a href="https://www.regenesys.net/?utm_source=ORG-SOCIAL&utm_medium=ORG-LI&utm_campaign=ORG-LI-RainerDigital" target="_blank" rel="noopener noreferrer"> Digital Regenesys </a> (Regenesys Business School), reaching over 1,000 students and alumni 
      </>
    ),
  }*/
];

const News = () => {
  return (
    <NewsSection id="news">
      <h1 className="text-2xl font-semibold font-serif tracking-tight">News</h1>
      <div className="mt-4 space-y-3">
        {newsItems.map((item, index) => (
          <div key={`${item.date}-${index}`} className="news-item flex items-start gap-3">
            <span className="date shrink-0 w-28 text-sm tracking-wide text-slate-600">
              {item.date}:
            </span>
            <span className="description flex-1 leading-relaxed">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </NewsSection>
  );
};

export default News;