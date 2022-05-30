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
  selfIntroduction2: "Javaとデータ構造の知識が持っています。Spring，SpringBoot，MyBaitsなどのフレームワークも、MySql、PostgreなどのDBも扱えます。HTML/JS/CSS/Vue/Reactの知識も持っています。",
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
  workPeriodValue: "3.5 年",

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


  // ------------- resume page -------------


  // ------------- projects page -------------
  projectDescLabel: "プロジェクト概要",
  projectStackLabel: "技術",
  dutyLabel: "私の役割",

  // project 1
  project1Name: "Windowバッチシステム",
  project1Description: "本システムはログ処理システムです。別のサーバから送ってきたログファイルを必要がない情報を削除し、残した部分を整形して、別のサーバに送ります",
  project1Duty: ["お客様とやりとりして、仕様をを確認すること", " 詳細設計書、単体テスト設計書と結合テスト設計書を作成すること", "製造チームに仕様説明とお客様にプレゼンテーションすること"],
  project1TechStack: "Window バッチ, イクセル, 千手",

  // project 2
  project2Name: "B2B食品売買システム",
  project2Description: "2019年に消費税が10％になったと伴う、本システムに対して、画面表示内容、DBの更新方法とサーバ側のロジックを修正が必要でした。",
  project2Duty: ["既存画面の表示修正とサーバー側のロジック修正", "単体テスト設計書作成と単体テスト作業", "バグ修正とQA回答", "成果物整理"],
  project2TechStack: "Java, VB.Net, Tomcat, Linux, HirDB, SVN, FTP",

  // project 3
  project3Name: "ゲーム暗号化審査システム",
  project3Description: "ゲームメーカーさん向けのシステムです。ゲームが正式にpublishまで、色々な審査を行い、審査が全部通る場合は、ゲームが販売されることが可能です。",
  project3Duty: ["RestFul APIの開発", "Junit単体テストの作成", "設計書を作成", "ソースレビュー", "勉強会で知識や経験の共有"],
  project3TechStack: "Java8, Mysql, Git/Github, Aws, Neuron, Ubuntu, Docker, Jira",

  // project 4
  project4Name: "海外旅行ホテル予約システム",
  project4Description: "旅行会社が本システムを利用して、飛行機チケットを購入、海外のホテルを予約、旅行コースをカスタマイズすることができます。",
  project4Duty: ["新規画面とサーバーサイドロジック作成", "単体テスト仕様書作成とテストの実施", "Googleマップを本システムに導入"],
  project4TechStack: "Java8, Oracle, Jsp, SVN, JavaScript, Struts1, GoogleMap",

  // project 5
  project5Name: "銀行取引監視システム",
  project5Description: "SpringBatchで銀行の取引をチェックして、もしあるユーザーは疑わしい取引がやったら、該当取引IDを抽出して、別のテーブルに登録する。.",
  project5Duty: ["設計書作成とコーディング", "バグ修正とQA回答", "ソースと設計書のレビュー"],
  project5TechStack: "Java8, SQLServer, Springboot, SpringBatch, Git/Github",

  // project 6
  project6Name: "オンラインショップオーダー管理システム",
  project6Description: "本システムはオーダー管理、マスタ管理、在庫管理、顧客情報管理、取り寄せ管理によって構成されています。私は取り寄せ管理機能を担当しています。取り寄せのワークフローは、オーダー情報を別のサーバーから取得して、取り寄せ必要チェックとオーダー有効チェックを行なってから、残ってたオーダー情報を別のサーバーに送ることです。",
  project6Duty: ["設計書作成と実装", "Vue.jsコンポーネントの実装", "Junit単体テスト作成", "バグ修正とQA回答", "ソースと設計書のレビュー", "リリース作業"],
  project6TechStack: "Java11, Postgre, Springboot, SpringJPA, Git/Github, Vue.js, TypeScript, AWS, CI/CD, Flyway, Gradle",
  
  // ------------- projects page -------------
}

export default messages