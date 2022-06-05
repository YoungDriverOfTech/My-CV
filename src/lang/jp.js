const messages = {
  // ------------- about me page -------------
  // header info
  hello: 'こんにちは、世界',
  whoResume: "梁の履歴書",
  aboutMe: "私について",
  resume: "履歴書",
  experiences: "案件経験",
  chooseLanguage: "言語",

  // self introduction info
  self: "自己紹介",
  selfIntroduction1: "私はJavaのエンジニアで、今ある中国の派遣会社に通っています。主な仕事の内容は新システムの開発とメンテナンスです。今は正社員の仕事を探しています。",
  selfIntroduction2: "Javaとデータ構造の知識が持っています。Spring、Spring Boot、 MyBatisなどのフレームワークも、MySQL、PostgreSQLなどのDBも扱えます。HTML/JavaScript/CSS/Vue/Reactの知識も持っています。",
  selfIntroduction3: "今まで、英語、日本語と中国語３言語が話せます、お客様や同僚とスムーズなコミュニケーションができます",

  // personal infos
  personalInfo: "個人情報",
  nameLabel: "名前",
  nameValue: "梁　小楽(ryou shouraku)",

  birthdayLabel: "誕生日",
  birthdayValue: "1993/10/31",

  locationLabel: "場所",
  locationValue: "東京",

  currentStatusLabel: "現在状態",
  currentStatusValue: "仕事あり",

  emailLabel: "メール",
  emailValue: "xiaoleliang045@gmail.com",

  githubLabel: "Github",
  githubValue: "https://github.com/YoungDriverOfTech",

  blogLabel: "ブログ",
  blogValue: "https://www.yuque.com/lexiao-1kmgg",

  workPeriodLabel: "経験年数",
  workPeriodValue: "4 年",

  // skills
  skills: "スキル",

  tech: "技術",
  languages: "言語",

  skill: "スキル",
  familiarity: "詳しさ",

  dataSkill: "データ構造とアルゴリズム",
  datafamiliarity: "習熟",

  javaSkill: "Java",
  javaFamiliarity: "上手",

  springSkill: "Springフレームワーク",
  springFamiliarity: "習熟",
  
  dbSkill: "データベース",
  dbFamiliarity: "習熟",

  linuxSkill: "Linux",
  linuxFamiliarity: "経験したことある",

  frontSkill: "HTML/CSS/JS",
  frontFamiliarity: "習熟",

  frongtFrameworkSkill: "Vue/React",
  frongtFrameworkFamiliarity: "習熟",

  englishToeic: "英語Toeic",
  toeicScore: "820",

  jlptN1: "日本語一級",
  n1Score: "121",

  jlptN2: "日本語二級",
  n2Score: "137",

  chinese: "中国語",
  chineseScore: "母語",

  preViewMessage: "画像をクリックすると、プレビューができます",
  // ------------- about me page -------------


  // ------------- resume page -------------
  english: "英語",
  japanese: "日本語",
  toeic: "Toeic",
  workPeriod: "経験年数",
  year4: "4年(2019-現在)",
  workExperiences: "就職履歴",

  programmingLanguages: "プログラミング言語",
  framework: "フレームワーク",
  software: "ソフトウェア",
  db: "データベース",

  companyQAndF: "株式会社Q&F (2021/4 - 現在)",
  fullStackEngineer: "フルスタックソフトウェアエンジニア",
  qfDuty1: "受注管理システム開発",
  qfDuty2: "ファイル保管システム開発",
  qfDuty3: "フロントエンドのソースを再構築",
  qfDuty4: "ORMフレームワークをカスタマイズ化",

  companyGSD: "株式会社GSD (2020/4 - 2021/3)",
  backendEngineer: "バックエンドエンジニア",
  gsdDuty1: "海外ホテル予約システムバージョンーアップ",
  gsdDuty2: "銀行取引監視システム開発",
  gsdDuty3: "受注管理システム開発",

  companyCPS: "株式会社CPS (2019/2 - 2020/3)",
  cpsDuty1: "ログフォマット化システム開発",
  cpsDuty2: "食品販売システムバージョンアップ",
  cpsDuty3: "ゲーム審査システム開発",

  education: "教育",
  bachelor: "専攻",
  major: "財務管理",
  universityPeriod: "期間",
  universityPeriodValue: "2013 - 2017",
  university: "大学名",
  universityName: "運城学院",
  // ------------- resume page -------------


  // ------------- projects page -------------
  projectDescLabel: "プロジェクト概要",
  projectPeriodLabel: "期間",
  projectStackLabel: "技術",
  dutyLabel: "私の役割",

  // project 1
  project1Name: "Windowバッチシステム",
  project1Period: "2019/2 - 2019/4",
  project1Description: "本システムはログ処理システムです。別のサーバから送ってきたログファイルを必要がない情報を削除し、残した部分を整形して、別のサーバに送ります",
  project1Duty: ["お客様とやりとりして、仕様をを確認すること", " 詳細設計書、単体テスト設計書と結合テスト設計書を作成すること", "製造チームに仕様説明とお客様にプレゼンテーションすること"],
  project1TechStack: "Window バッチ, イクセル, 千手",

  // project 2
  project2Name: "B2B食品売買システム",
  project2Period: "2019/5 - 2019/9",
  project2Description: "2019年に消費税が10％になったと伴う、本システムに対して、画面表示内容、DBの更新方法とサーバ側のロジックを修正が必要でした。",
  project2Duty: ["既存画面の表示修正とサーバー側のロジック修正", "単体テスト設計書作成と単体テスト作業", "バグ修正とQA回答", "成果物整理"],
  project2TechStack: "Java, VB.NET, Tomcat, Linux, HiRDB, SVN, FTP",

  // project 3
  project3Name: "ゲーム暗号化審査システム",
  project3Period: "2019/10 - 2020/3",
  project3Description: "ゲームメーカーさん向けのシステムです。ゲームが正式にpublishまで、色々な審査を行い、審査が全部通る場合は、ゲームが販売されることが可能です。",
  project3Duty: ["RESTful APIの開発", "Junit単体テストの作成", "設計書を作成", "ソースレビュー", "勉強会で知識や経験の共有"],
  project3TechStack: "Java8, MySQL, Git/Github, AWS, Neuron, Ubuntu, Docker, Jira",

  // project 4
  project4Name: "海外旅行ホテル予約システム",
  project4Period: "2020/7 - 2020/9",
  project4Description: "旅行会社が本システムを利用して、飛行機チケットを購入、海外のホテルを予約、旅行コースをカスタマイズすることができます。",
  project4Duty: ["新規画面とサーバーサイドロジック作成", "単体テスト仕様書作成とテストの実施", "Googleマップを本システムに導入"],
  project4TechStack: "Java8, Oracle, JSP, SVN, JavaScript, Struts1, Google Maps",

  // project 5
  project5Name: "銀行取引監視システム",
  project5Period: "2020/10 - 2020/11",
  project5Description: "SpringBatchで銀行の取引をチェックして、もしあるユーザーは疑わしい取引がやったら、該当取引IDを抽出して、別のテーブルに登録する。.",
  project5Duty: ["設計書作成とコーディング", "バグ修正とQA回答", "ソースと設計書のレビュー"],
  project5TechStack: "Java8, SQL Server, Spring Boot, Spring Batch, Git/Github",

  // project 6
  project6Name: "オンラインショップオーダー管理システム",
  project6Period: "2020/12 - 現在",
  project6Description: "本システムはオーダー管理、マスタ管理、在庫管理、顧客情報管理、取り寄せ管理によって構成されています。私は取り寄せ管理機能を担当しています。取り寄せのワークフローは、オーダー情報を別のサーバーから取得して、取り寄せ必要チェックとオーダー有効チェックを行なってから、残ってたオーダー情報を別のサーバーに送ることです。",
  project6Duty: ["設計書作成と実装", "Vue.jsコンポーネントの実装", "Junit単体テスト作成", "バグ修正とQA回答", "ソースと設計書のレビュー", "リリース作業"],
  project6TechStack: "Java11, PostgreSQL, Spring Boot, Spring Data JPA, Git/Github, Vue, TypeScript, AWS, CI/CD, Flyway, Gradle",
  
  // project 7
  project7Name: "オンラインショップフィル管理システム",
  project7Period: "2021/6 - 現在",
  project7Description: "本システムはAwsのS3に保存した業務関連のファイルを直接扱えます。例えばアップロード、ダウンロード、消すことができます。",
  project7Duty: ["設計書作成と実装", "Reactのコンポーネントの実装", "バグ修正とQAの回答", "ソースと設計書のレビュー", "リリース作業"],
  project7TechStack: "Java11, PostgreSQL, Spring Boot, Spring Data JPA, Git/Github, React, TypeScript, AWS, CI/CD, Gradle, Node.js",

  // ------------- projects page -------------
}

export default messages