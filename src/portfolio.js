/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Howdy.",
  title2: "Rishabh",
  logo_name: "Bussie.R()",
  nickname: "bassi / rishabh",
  full_name: "Rishabh Bassi",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1sP3I9VZZlTrKS0YOHnR6eF8wwJ5LDTTv/view?usp=drive_link",
  mail: "mailto:bassirishabh@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/bassirishabh",
  linkedin: "https://www.linkedin.com/in/rishabh-bassi/",
  gmail: "bassirishabh@gmail.com",
  gitlab: " ",
  facebook: "https://www.facebook.com/bassirishabh",
  twitter: "https://twitter.com/bassi_rishabh",
  instagram: "https://www.instagram.com/rishabh_bassi/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Backend SW development using Python, NodeJS, ExpressJS and Django/Flask",
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend Firmware Development using C and Python  - SSD FW",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#5c79df",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Rails",
          fontAwesomeClassname: "simple-icons:rails",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "Ruby",
          fontAwesomeClassname: "simple-icons:ruby",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "VSCode",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },

        },
      ],
    },

    {
      title: "Cloud & Parallel Computing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Certified AWS Developer and Cloud Practioner in handling distributed systems",
        "⚡ Experience working on multiple cloud platforms and Faster Processing using Multi cloud architecture Hadoop",
        "⚡ Experience hosting and managing web apps on GCP and AWS along with fastracking code on GPU",
        "⚡ Experience in Parallelizing and Optimizing Code using Open MP, MPI, Multiprocessing",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient Experience of working with Machine Learning, DL Models and NLP Technologies such as BERT",
        "⚡ Extensive Research Experience in ML Domain with 3 publication and 3+ years of working as Research Assistant.",
        "⚡ Certifications by deeplearning.ai and Stanford Online",
        "⚡ Passion to delve deeper into NLP and Generative AI to contribute to Healthcare Domain",
        "⚡ Experience with 10+ Projects ranging from Data Analysis to ML Models, from DL to Generative AI",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "emojione:hugging-face",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Texas A&M University ",
      subtitle: "Masters in Computer Science",
      logo_path: "tamu.png",
      alt_name: "TAMU",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Studying Advanced Software Development and Computer Science Concepts with specialization in Machine Learning",
        "⚡ Maintaing perfect GPA of 4 out of 4 and fully funded MS for a year. Learning Advanced Research Topics in NLP, Info Storage, Cloud Computing and Machine Learning Domain",
        "⚡ Worked on various impact based projects like TA Management Portal and Travelix.",
        "⚡ Coursework Taken : Advanced DS and Algo, Machine Learning, Software Engineering, Data Mining and Analysis, Distributed Systems, Information Storage and Reterival ",
      ],
      website_link: "https://www.tamu.edu/",
    },
    {
      title: "Thapar University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "ti1.png",
      alt_name: "TIET",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Graduated with specialization in Machine Learning and Data Analysis with CGPA 9.62. ",
        "⚡ Gold Medalist and Schoalrship Holder for Exemplary Academic Performance. Worked with Professors as Research Fellow.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc. and implemented avrious projects based on courses I learnt.",
        "⚡ Coursework Taken : DS, Algo, OS, DBMS, Networking, ML, DL, AI, NLP, Capstone etc. ",
      ],
      website_link: "https://www.thapar.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/LAZVDQRCRHP4",
      alt_name: "DeepLearning",
      color_code: "#ffc475",
    },
    {
      title: "Natural Language Processing with Classification and Vector Spaces",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/JWHUM6AVJHM3",
      alt_name: "DeepLearning",
      color_code: "#ffc475",
    },
    {
      title: "Mastering Data Structures and Algorithms",
      subtitle: "Udemy",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.udemy.com/certificate/UC-ac3a4583-a01c-4efa-8ddf-6306d63584df/",
      alt_name: "Udemy",
      color_code: "#ffc475",
    },
    {
      title: "Practical PHP: Master the Basics and Code Dynamic Websites",
      subtitle: "Udemy",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.udemy.com/certificate/UC-188V4IU7/",
      alt_name: "PHP",
      color_code: "#1e70c1",
    },
    {
      title: "Machine Learning A-Z",
      subtitle: "Udemy",
      logo_path: "coursera_logo.png",
      certificate_link: " ",
      alt_name: "ML",
      color_code: "#ffbfae",
    },
    {
      title: "Hands on Internt of Things",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: " ",
      alt_name: "IOT",
      color_code: "#b190b0",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        " ",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "google_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring and Deploying Machine Learning Models",
      subtitle: "LinkedIN Learning",
      logo_path: "ll.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/0afda0f02b150d69d06c824f9aba7d8fbd1ec7cf26ffe48789507d9722382f7e",
      alt_name: "linkedin",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning ",
      subtitle: "LinkedIN Learning",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/79c01982dfc6d742f731525aec1e568354878735766fa1a3ef65fadb89bd83ea",
      alt_name: "linkedin",
      color_code: "#8C151599",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        " ",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android App Development",
      subtitle: "Summer Training Intershala",
      logo_path: "is.png",
      certificate_link: "https://drive.google.com/drive/u/0/folders/1E65Fu8D10CT_iiYDJ2-8skfpDO0fZSbQ",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "Advanced JAVA Training",
      subtitle: "Industrial Summer Training",
      logo_path: "java.png",
      certificate_link: " ",
      alt_name: "Java",
      color_code: "#fffbf3",
    },
    {
      title: "Generative AI",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: " ",
      alt_name: "DeepLearning",
      color_code: "#fffbf3",
    },
    {
      title: "LinkedIN NLP Course",
      subtitle: "LinkedIN Learning",
      logo_path: "ll.png",
      certificate_link: "https://www.linkedin.com/learning/certificates/9ae701859b8925c1b32d4ff528194c5f968b5b25c78e3172b4f181e025ce2348?u=104  ",
      alt_name: "Linkedin",
      color_code: "#fffbf3",
    },
    {
      title: "LinkedIN Excel Course",
      subtitle: "LinkedIN Learning",
      logo_path: "ll.png",
      certificate_link: "https://www.linkedin.com/learning/certificates/8f1500872494aa1589bc5c27389188b036daba0224a0d4339aa65565480017bb",
      alt_name: "Linkedin",
      color_code: "#fffbf3",
    },
    {
      title: "AWS Introduction Course",
      subtitle: "AWS",
      logo_path: "aws.png",
      certificate_link: " ",
      alt_name: "Linkedin",
      color_code: "#fffbf3",
    },
    {
      title: "GRE",
      subtitle: "326/340",
      logo_path: "GRE.jpeg",
      certificate_link: " ",
      alt_name: "GRE",
      color_code: "#fffbf3",
    },
    {
      title: "TOEFL",
      subtitle: "101/120",
      logo_path: "ets.png",
      certificate_link: " ",
      alt_name: "TOEFL",
      color_code: "#fffbf3",
    },
    {
      title: "Qualcomm 5G Wireless ",
      subtitle: "Qualcomm Academy Courses",
      logo_path: "5g.jpeg",
      certificate_link: " ",
      alt_name: "Qualcomm",
      color_code: "#fffbf3",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Research",
  description:
    "I am a Software Engineer with a demonstrated history of working in the industry and driven by passion to bridge the gap between cutting-edge research and practical implementation to solve complex problems. I have 4 years of experience as a Software Engineer with couple of internships most recent being Summer 2023 Intern at LinkedIN. In past I have worked as Senior Engineer at Western Digital where I was responsible for driving FW modules development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Graduate Research Assistant",
          company: "Texas A&M University",
          company_url: "https://www.tamu.edu/",
          logo_path: "tamu.png",
          duration: "August 2022 - May 2023",
          location: "College Station, TX",
          description:
            "Investigating bottlenecks in Data Processing of Synthetic Aperture Radar for Satellites and Optimizing code to fast-track enormous matrix computations using algorithms and parallel computing.",
          color: "#f10000",
        },
        {
          title: "Senior Engineer",
          company: "Western Digital",
          company_url: "https://www.westerndigital.com/",
          logo_path: "wd.png",
          duration: "July 2019 - July 2022",
          location: "Bangalore, KA",
          description:
            " Designed Robust Firmware for Error Handling of XOR to better handle defective NAND Memories. Planned Remodelling of Verification Framework for HW Registers in Firmware itself to avoid redundancies in Validation cycles. Revised Performance Gaps in Existing SSD FW to meet Blue Category Performance Numbers. Deployed Code with 25% increase in Write-Read CDM Benchmark.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Intern",
          company: "LinkedIN",
          company_url: "https://www.linkedin.com/",
          logo_path: "linkedin.png",
          duration: "May 2023 - Aug 2023",
          location: "Mountain View, CA",
          description:
            "Worked as a Summer Intern at LinkedIn where I designed Real Time Automation Frameowork with SQL Database to solve Conflict Resolutions. For the most part, the MySQL team does not have any awareness of several incidents of data divergence due to bugs unless reported by our users. Hence designed a automation framework to detect and report such discrepancies. I have equal exposure in various Innovative Forums such as Innovation Bazaar and Hackathons",
          color: "#ee3c26",
        },
        {
          title: "Six Months Software Intern",
          company: "Western Digital",
          company_url: "https://www.westerndigital.com/",
          logo_path: "wd.png",
          duration: "Jan 2019 - Jun 2019",
          location: "Bangalore, KA",
          description:
            "Involved in Development of Diagnostic Framework in order to bypass Firmware Path to increase debug capacility in later stages of SSD Development",
          color: "#0071C5",
        },
        {
          title: "Software Intern",
          company: "Western Digital",
          company_url: "https://www.westerndigital.com/",
          logo_path: "wd.png",
          duration: "Jun 2018 - Jul 2018",
          location: "Bangalore, KA",
          description: "Developed a Performance Counter Framework to help developer analyze defects in coding schemes. Analyzed results of this framework to optimize and remove the bottleneck in SSD Firmware",
          color: "#56A4D3",
        },
      ],
    },
    {
      title: "Research, Hackathon and Leadership Experience",
      experiences: [
        {
          title: "Research Assistant",
          company: "University of Illinois Urbana-Champaign",
          company_url: "https://iot.cs.illinois.edu/people/",
          logo_path: "uiuc.png",
          duration: "2021",
          location: "Remote",
          description:
            "Research Internship under Dr. Matthew Caesar(UIUC) to create ExplainNet System. Idea was to create Intelligent Network Systems by extesnive application of NLP and Generative AI.",
          color: "#4285F4",
        },
        {
          title: "Research Publication",
          company: "International Conference On Computational Vision and Bio Inspired Computing",
          company_url: "https://link.springer.com/chapter/10.1007/978-981-16-9573-5_26",
          logo_path: "publication.jpeg",
          duration: "2021",
          location: "Remote",
          description:
            "Spirochaeta Bacteria Segmentation Using an Efficient Deep Learning Approach",
          color: "#D83B01",
        },
        {
          title: "Research Publication",
          company: "International Conference on Advancements in Computing, Communication and Technology",
          company_url: "",
          logo_path: "publication.jpeg",
          duration: "2021",
          location: "Remote",
          description:
            "Prediction of Celebrity Influence during election propaganda using Twitter Sentiment Analysis",
          color: "#D83B01",
        },
        {
          title: "Research Publication",
          company: "Science Globe International Conference",
          company_url: "https://www.digitalxplore.org/up_proc/pdf/377-153025525644-48.pdf",
          logo_path: "publication.jpeg",
          duration: "2018",
          location: "Thapar University",
          description:
            "Autonomous Tagging of Stackoverflow Questions",
          color: "#D83B01",
        },
        {
          title: "Managing Director",
          company: "Pushap Industries",
          company_url: " ",
          logo_path: "pushap.png",
          duration: " Aug 2020 - Jul 2022",
          location: " ",
          description: "Managed family business Pushap Industries by directing manfacturing workforce along with coordinating supply chain.",
          color: "#D83B01",
        },
        {
          title: "Hackathon",
          company: "Western Digital",
          company_url: " ",
          logo_path: "wd.png",
          duration: "2019",
          location: "Bangalore, KA",
          description:
            "Participated in Hackathon organized at Western Digital with idea of Distributed Faster Events Parsing using MapReduce(Hadoop).",
          color: "#D83B01",
        },
        {
          title: "Innovation Bazaar",
          company: "Western Digital",
          company_url: " ",
          logo_path: "wd.png",
          duration: "2020",
          location: "Bangalore, KA",
          description:
            "Participated in Innovation bazaar 2020 with idea for Data Deduplication to imporve Storage Utilisation",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Welcome to the Projects page, where innovation meets technology and Machine Learning! Here, I showcase a diverse range of projects that demonstrate my passion for exploring the latest tools and technologies. From captivating data visualizations to machine learning models, each project represents a unique endeavor that pushes the boundaries of what's possible. Whether it's diving into the depths of natural language processing or unraveling complex patterns in large datasets, these projects highlight my commitment to building impactful solutions.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rishabh.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://rishabhbassi.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Travelix",
      url: "https://travelix2.vercel.app/",
      description:
        "TRAVELIX is a personalized travel recommendation system that provides recommendations to users based on their preferences and travel history.",
      languages: [
        {
          name: "Ruby",
          iconifyClass: "logos-ruby",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Machine Learning",
          iconifyClass: "carbon:machine-learning",
        },
        {
          name: "User User CF",
          iconifyClass: "fluent-emoji:information",
        },
        {
          name: "Auto Rec",
          iconifyClass: "file-icons:adobe-mediaencoder",
        },
      ],
    },
    {
      name: "TA Management Portal",
      url: "https://www.youtube.com/watch?v=DCYwQhl1O4g&ab_channel=harmanpreetsingh",
      description: "The app handles the student applications for TA positions in the computer science department with various functionalities of the hiring manager, professor, and student.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Ruby on Rails",
          iconifyClass: "logos-rails",
        },
      ],
    },
    {
      name: "Network Optimization Graphs",
      url: "https://github.com/bassirishabh/AlgoProject_Graphs",
      description: "Perform Network optimization by implementing a network routing protocol using the data structures and algorithms such as Graph, Heap, Make Union find.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Algorithms",
          iconifyClass: "devicon:thealgorithms",
        },
        {
          name: "Data Structures",
          iconifyClass: "arcticons:dsb",
        },
      ],
    },
    {
      name: "Codex AI",
      url: "https://aicodexaviva.vercel.app/",
      description:
        "AI as a humanoid to solve various challeneges, tasks and coding problems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenAI",
          iconifyClass: "logos-openai",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Humanoid",
      url: "https://www.youtube.com/watch?v=DXLhJYifnIE&ab_channel=Logerine",
      description:
        "Build a Humanoid to function as a ChatBot using TensorFlow; Identify objects using OCR, perform functions such as Personalized AI and help in interview preparation",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Raspberry Pi",
          iconifyClass: "devicon:raspberrypi",
        },
        {
          name: "Image Processing",
          iconifyClass: "bi:image-fill",
        },
        {
          name: "Natural Language Processing",
          iconifyClass: "vscode-icons:file-type-ai",
        },
      ],
    },
    {
      name: "Data Mining and Analysis",
      url: "https://github.com/bassirishabh/Project_DataMining",
      description:
        "Implemented supervised and unspervised classification techniques such as XGBoost, Boruta, Nested CV to do learning task on dataset consisting of 500 features and 1000 samples. ",
      languages: [
        {
          name: "R",
          iconifyClass: "logos-r-lang",
        },
        {
          name: "XGBoost/PCA",
          iconifyClass: "arcticons:pcapdroid",
        },
        {
          name: "Data Mining",
          iconifyClass: "eos-icons:data-mining",
        },
      ],
    },
    {
      name: "Automatic Text Summarization",
      url: "https://github.com/bassirishabh/Text-Summarizer",
      description:
        "Utilize Natural Language Processing to summarize a source of data (webpage, Wikipedia, PDF); Results delivered via e-mail",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Django",
          iconifyClass: "akar-icons:django-fill",
        },
        {
          name: "Front End",
          iconifyClass: "simple-icons:frontendmentor",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Speak Translator",
      url: "https://github.com/bassirishabh/Text-Summarizer",
      description:
        "Application to translate image text to user specified language; Uses OCR to covert image to text; Translation API’s; TTS to convert translated text to audio",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "OCR",
          iconifyClass: "mdi:ocr",
        },
      ],
    },
    {
      name: "Combo Offers Portal",
      url: "https://github.com/bassirishabh/Combos",
      description:
        "Management portal for e-commerce websites for inventory management. Displays all products which can be brought together in a specified budget",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
        {
          name: "Web App",
          iconifyClass: "carbon:application-web",
        },
      ],
    },
    {
      name: "Line Follower Robot",
      url: "https://github.com/bassirishabh/Combos",
      description:
        "Developed Buggy using ultrasound and other sensors to detects objects and takes appropriate turns/actions.",
      languages: [
        {
          name: "Arduino",
          iconifyClass: "logos-arduino",
        },
        {
          name: "Sensors",
          iconifyClass: "material-symbols:sensors",
        },
      ],
    },
    {
      name: "Himachal Tourism Website",
      url: "https://github.com/bassirishabh/Portal-For-Tourism",
      description:
        "Developed Website using HTML,CSS and JS as forntend porject for Himachal Tourism",
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JS",
          iconifyClass: "vscode-icons:file-type-js",
        },
      ],
    },
    {
      name: "Bacteria Detection using Deep Learning",
      url: "https://github.com/bassirishabh/DeepLearning_BacteriaDetection",
      description:
        "Detection of bacteria using Convolutional Neural Network Deep Learning Techniques",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Deep Learning",
          iconifyClass: "devicon:keras",
        },
      ],
    },
    {
      name: "Employee Management System",
      url: "https://github.com/bassirishabh/DeepLearning_BacteriaDetection",
      description:
        "Allows admins to mutate and manage employee details; Allows portal access and management to employees",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "JSP",
          iconifyClass: "logos:jspm",
        },
        {
          name: "DBMS",
          iconifyClass: "mdi:database",
        },
        {
          name: "SQL",
          iconifyClass: "logos:mysql",
        },
      ],
    },
    {
      name: "Political Propoganda Influence using Twitter SA",
      url: "https://github.com/bassirishabh/Twitter_SA_Political",
      description:
        "Predict influence of celebrities during elections using sentiment analysis on Retweets of their followers.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Twitter",
          iconifyClass: "logos-twitter",
        },
        {
          name: "NLP",
          iconifyClass: "carbon:ibm-watson-natural-language-understanding",
        },
        {
          name: "Hugging Face",
          iconifyClass: "emojione:hugging-face",
        },
      ],
    },
    {
      name: "Personal Portfolio",
      url: "https://github.com/bassirishabh/me",
      description:
        "(This) Personal Portfolio developed using React to give insights into my life.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Netlify",
          iconifyClass: "logos-netlify",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
