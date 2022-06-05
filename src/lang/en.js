const messages = {

  // ------------- about me page -------------
  // header info
  hello: "hello world",
  whoResume: "Liang's Resume",
  aboutMe: "About me",
  resume: "Resume",
  experiences: "Projects",
  chooseLanguage: "Language",

  // self introduction info
  self: "Self Introduction",
  selfIntroduction1: "I am a Java engineer, currently contracted with a Chinese staffing company. My job is mainly developing new systems and maintenance programs. Recently I am looking for regular work.",
  selfIntroduction2: "My skill sets include familiarity with Java, corresponding data structure and implementation principle, using Spring, Spring Boot and MyBatis, knowledge with database such as MySQL and PostgreSQL. I am also farmiliar with HTML/JavaScript/CSS and can also use Vue and React to develop pages.",
  selfIntroduction3: "Lastly, I can speak three languages; English, Japanese and Chinese.",

  // personal infos
  personalInfo: "Personal Info",
  nameLabel: "Name",
  nameValue: "Xiaole Liang",

  birthdayLabel: "Birthday",
  birthdayValue: "31/10/1993",

  locationLabel: "Location",
  locationValue: "Tokyo",

  currentStatusLabel: "Current status",
  currentStatusValue: "On-the-job",

  emailLabel: "Email",

  githubLabel: "Github",

  blogLabel: "Blog",

  workPeriodLabel: "Work period",
  workPeriodValue: "4 years",

  // skills
  skills: "Skills",

  // todo can not bind into attributes
  tech: "Tech",
  languages: "Languages",

  // todo can not bind into attributes
  skill: "Skill",
  familiarity: "Familiarity",

  dataSkill: "Data Structure and Algorithms",
  datafamiliarity: "Skillful",

  javaSkill: "Java",
  javaFamiliarity: "Advanaced",

  springSkill: "Spring Framework",
  springFamiliarity: "Skillful",
  
  dbSkill: "DataBase",
  dbFamiliarity: "Skillful",

  linuxSkill: "Linux",
  linuxFamiliarity: "Experienced",

  frontSkill: "HTML/CSS/JS",
  frontFamiliarity: "Skillful",

  frongtFrameworkSkill: "Vue/React",
  frongtFrameworkFamiliarity: "Skillful",

  englishToeic: "English Toeic",
  toeicScore: "820",

  jlptN1: "JLPT N1",
  n1Score: "121",

  jlptN2: "JLPT N2",
  n2Score: "137",

  chinese: "Chinese",
  chineseScore: "Native Speaker",

  preViewMessage: "Click picture to preview.",
  // ------------- about me page -------------


  // ------------- resume page -------------
  clickHereDownloadResume: "Please click here to download my resume",
  pleaseChooseLanguage: "Please choose language",
  cancel: "Cancel",
  confirm: "Confirm",

  english: "English",
  japanese: "Japanese",
  toeic: "Toeic",
  workPeriod: "Work Experience",
  year4: "4 years(2019-present)",
  workExperiences: "Work Experience",

  programmingLanguages: "Programming Languages",
  framework: "Framework",
  software: "Software",
  db: "Database",

  companyQAndF: "株式会社Q&F (2021/4 - current)",
  fullStackEngineer: "Full Stack Software Engineer",
  qfDuty1: "Developing order management system",
  qfDuty2: "Developing file store system",
  qfDuty3: "Reconstructing frontend source code",
  qfDuty4: "Customizing ORM framework",

  companyGSD: "株式会社GSD (2020/4 - 2021/3)",
  backendEngineer: "Backend Software Engineer",
  gsdDuty1: "Upgrading of the tourism reservation platform",
  gsdDuty2: "Development of the bank transaction monitor",
  gsdDuty3: "Development of the order management system",

  companyCPS: "株式会社CPS (2019/2 - 2020/3)",
  cpsDuty1: "Development of the log format system",
  cpsDuty2: "Upgrading of the Online shop system",
  cpsDuty3: "Developing of the game check system",

  education: "Education",
  bachelor: "Bachelor",
  major: "Financial Management",
  universityPeriod: "Period",
  universityPeriodValue: "2013 - 2017",
  university: "University",
  universityName: "YunCheng University",
  // ------------- resume page -------------


  // ------------- projects page -------------
  projectDescLabel: "Project description",
  projectPeriodLabel: "Period",
  projectStackLabel: "Tech Stack",
  dutyLabel: "Duties",

  // project 1
  project1Name: "Window Batch System",
  project1Period: "2019/2 - 2019/4",
  project1Description: "This system deals with the logs from the other servers, deleting unnecessary parts and formating these logs, sending them to another server.",
  project1Duty: ["Writing design and test documents", "Explaining specification for coding team"],
  project1TechStack: "Window Batch, Excel, Senjun",

  // project 2
  project2Name: "Food Online Shop",
  project2Period: "2019/5 - 2019/9",
  project2Description: "This is a B2B food online shop system that needed modification to meet the sale tax changing from 8% to 10% in 2019.",
  project2Duty: ["Modifying existing pages and server side logic", "Writing test documents and doing unit test", "Fixing bugs and answering QA"],
  project2TechStack: "Java, VB.NET, Tomcat, Linux, HiRDB, SVN, FTP",

  // project 3
  project3Name: "Game Encrypt Check Platform",
  project3Period: "2019/10 - 2020/3",
  project3Description: "This platform system is used to check whether if a game is encrypted properly. All the checks need to be done before the game is published.",
  project3Duty: ["Developing RESTful API", "Writing Junit tests", "Creating application designs", "Reviewing source code", "Sharing thoughts in the study group"],
  project3TechStack: "Java8, MySQL, Git/Github, AWS, Neuron, Ubuntu, Docker, Jira",

  // project 4
  project4Name: "Overseas Trip Hotel Reservation Platform",
  project4Period: "2020/7 - 2020/9",
  project4Description: "The tourism companies can use this platform to reserve hotels, customize trip courses and buy airplane tickets.",
  project4Duty: ["Creating new pages and writing server side code", "Writing unit test design and testing", "Importing Google Maps into current system"],
  project4TechStack: "Java8, Oracle, JSP, SVN, JavaScript, Struts1, Google Maps",

  // project 5
  project5Name: "Bank Transactions Monitoring System",
  project5Period: "2020/10 - 2020/11",
  project5Description: "This system monitors bank users' transactions, which uses different conditions to check whether if users have suspicious transactions and inserts the transaction id into a table that is used to check who is suspicious.",
  project5Duty: ["Writing application design and coding", "Fixing bugs and answering QA", "Reviewing source code and application design"],
  project5TechStack: "Java8, SQL Server, Spring Boot, Spring Batch, Git/Github",

  // project 6
  project6Name: "Online Shop Orders Management Platform",
  project6Period: "2020/12 - present",
  project6Description: "The platform consists of several parts, for example: order management, stock management, customer management, etc. I was in charge of backorder management. The main work flow of backorder management; getting order data from another server; then checking whether if orders need backorder services and updating the data status. Next, completion of data checks and finally, sending of valid data to aws S3 storage.",
  project6Duty: ["Writing application design and coding", "Creating common vue components", "Writing Junit test", "Fixing bugs and answering QA", "Reviewing source code and application design", "Releasing and deployment"],
  project6TechStack: "Java11, PostgreSQL, Spring Boot, Spring Data JPA, Git/Github, Vue, TypeScript, AWS, CI/CD, Flyway, Gradle",

  // project 7
  project7Name: "Online Shop File Management System",
  project7Period: "2021/6 - present",
  project7Description: "This system is used to manipulate the files, related to business, stored in aws s3. It can upload, download files from the s3 and also can directly delete.",
  project7Duty: ["Writing application design and coding", "Creating react.js components", "Fixing bugs and answering QA", "Reviewing source code and application design", "Releasing and deployment"],
  project7TechStack: "Java11, PostgreSQL, Spring Boot, Spring Data JPA, Git/Github, React, TypeScript, AWS, CI/CD, Gradle, Node.js",

  // ------------- projects page -------------
}

export default messages