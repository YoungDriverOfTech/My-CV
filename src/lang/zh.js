const messages = {
  // header info
  hello: '你好 世界',
  whoResume: "梁的简历",
  aboutMe: "关于我",
  resume: "简历",
  experiences: "项目",
  chooseLanguage: "语言",

  // self introduction info
  self: "自我介绍",
  selfIntroduction1: "我是一名Java开发工程师，现在就职于一家中国人开的派遣公司。主要的工作是完成现场的开发任务和系统的维护任务。最近想寻求一份正社员的工作。",
  selfIntroduction2: "熟悉Java以及相关的数据结构及其实现原理，能够熟练使用Spring，SpringBoot，MyBaits等开发框架。熟练运用关系型数据库，能够满足开发需求。熟悉HTML/JS/CSS，也能够熟练使用Vue和React等框架完成页面的开发工作",
  selfIntroduction3: "目前为止可以说英语，日语，汉语三种语言，能够和客户和同事顺畅交流",

  // personal infos
  personalInfo: "个人情报",
  nameLabel: "姓名",
  nameValue: "梁 小乐",

  birthdayLabel: "生日",
  birthdayValue: "1993/10/31",

  locationLabel: "现在地",
  locationValue: "东京",

  currentStatusLabel: "现在状态",
  currentStatusValue: "在职",

  emailLabel: "邮箱",
  emailValue: "xiaoleliang045@gmail.com",

  githubLabel: "Github",
  githubValue: "https://github.com/YoungDriverOfTech",

  blogLabel: "博客",
  blogValue: "https://www.yuque.com/lexiao-1kmgg",

  workPeriodLabel: "工作年限",
  workPeriodValue: "3.5 年",

  // skills
  skills: "技能",

  tech: "技能",
  languages: "语言",

  skill: "技能",
  familiarity: "熟练度",

  dataSkill: "数据结构和算法",
  datafamiliarity: "熟悉",

  javaSkill: "Java",
  javaFamiliarity: "精通",

  springSkill: "Spring框架",
  springFamiliarity: "熟悉",
  
  dbSkill: "数据库",
  dbFamiliarity: "熟悉",

  linuxSkill: "Linux",
  linuxFamiliarity: "有使用经验",

  frontSkill: "HTML/CSS/JS",
  frontFamiliarity: "熟悉",

  frongtFrameworkSkill: "Vue/React",
  frongtFrameworkFamiliarity: "熟悉",

  englishToeic: "英语托业",
  toeicScore: "820",

  jlptN1: "日语N1",
  n1Score: "121",

  jlptN2: "日语N2",
  n2Score: "137",

  chinese: "中文",
  chineseScore: "母语",

  preViewMessage: "可点击图片预览",
  // ------------- about me page -------------


  // ------------- resume page -------------
  english: "英语",
  japanese: "日语",
  toeic: "托业",
  workPeriod: "工作年限",
  year4: "4年(2019-现在)",
  workExperiences: "工作经历",

  programmingLanguages: "编程语言",
  framework: "框架",
  software: "软件",
  db: "数据库",
  // ------------- resume page -------------


  // ------------- projects page -------------
  projectDescLabel: "项目描述",
  projectStackLabel: "技术栈",
  dutyLabel: "我的职责",

  // project 1
  project1Name: "日志批处理系统",
  project1Description: "此系统处理其他服务器发来的日志文件，删除其中不必要的部分，然后格式化剩下的日志文件内容，转发给别的服务器",
  project1Duty: ["与客户交流确认式样", "做成详细设计书，单体设计书和结合测试书", "给coding团队说明式样", "给客户做演示"],
  project1TechStack: "Window Batch, Excel, 千手",

  // project 2
  project2Name: "B2B视频贩卖系统",
  project2Description: "2019年日本消费税由8%上涨至10%，要对原本项目的页面表示以及服务器点的代码进行修正以满足业务的要求。",
  project2Duty: ["页面表示和服务器端逻辑的修正", "单体测试书做成和单体测试作业", "bug修正和回答QA", "文书整理"],
  project2TechStack: "Java, VB.Net, Tomcat, Linux, HirDB, SVN, FTP",

  // project 3
  project3Name: "游戏加密审查系统",
  project3Description: "面向游戏制作厂商，其所发行的游戏需要先经过加密，然后再经由本系统进行加密检查，只有所有的检查都通过，游戏才能正式发售贩卖。",
  project3Duty: ["开发RestFul API", "完成Junit测试的编码", "制作详细设计", "代码审核", "学习会上分享经验和知识"],
  project3TechStack: "Java8, Mysql, Git/Github, Aws, Neuron, Ubuntu, Docker, Jira",

  // project 4
  project4Name: "海外旅行酒店预订平台",
  project4Description: "旅游公司可利用本系统团购机票，预订海外酒店，定制化旅行套餐。",
  project4Duty: ["完成新页面的制造和服务器端代码的编写", "制作弹体测试式样书和单体测试实施", "将谷歌地图导入到本系统中"],
  project4TechStack: "Java8, Oracle, Jsp, SVN, JavaScript, Struts1, GoogleMap",

  // project 5
  project5Name: "银行转账监视系统",
  project5Description: "使用SpringBatch框架对银行用户的交易信息进行监视，如果发现有用户的转账交易有异常，那么就把该笔转账交易的ID记录到另一张表中。",
  project5Duty: ["设计书做成和监视功能的代码实现", "bug修正和回答QA", "审核设计书和代码"],
  project5TechStack: "Java8, SQLServer, Springboot, SpringBatch, Git/Github",

  // project 6
  project6Name: "在线商城订单管理平台",
  project6Description: "本平台由订单管理，公共部品管理， 存货管理，顾客情报管理和仓库调货管理等模块组成。我主要负责仓库调货管理模块。此模块会先从别的服务器中取到订单数据，然后进行是否需要提供调货服务以及该订单是否合理等检查，最后会把检查完的订单数据发送给别的服务器进行处理。",
  project6Duty: ["设计书做成以及机能实装", "Vue组件实装", "Junit单体测试时装", "bug修正以及回答QA", "审核代码和设计书", "上线部署"],
  project6TechStack: "Java11, Postgre, Springboot, SpringJPA, Git/Github, Vue.js, TypeScript, AWS, CI/CD, Flyway, Gradle",
  
  // project 7
  project7Name: "在线商城文件管理系统",
  project7Description: "本系统可以对存储在S3上面的业务关联文件进行直接操作，比如上传下载，增加删除等。",
  project7Duty: ["设计书做成和机能时装", "React组件实装", "bug修正和回答QA", "审核代码和设计书", "上线部署"],
  project7TechStack: "Java11, Postgre, Springboot, SpringJPA, Git/Github, React.js, TypeScript, AWS, CI/CD, Gradle, Node.js",
  // ------------- projects page -------------
}

export default messages