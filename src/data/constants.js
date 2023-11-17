export const Bio = {
  name: "Naufaldi",

  description:
    "Hi Im Naufaldi, a special human with some ability to love learning and working on teamwork.",
  github: "https://github.com/rishavchanda",
  resume:
    "https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  twitter: "https://twitter.com/RishavChanda",
  insta: "https://www.instagram.com/rishav_chanda/",
  facebook: "https://www.facebook.com/rishav.chanda.165/",
};


  




export const projects = [
  {
  
    id: 0,
    title: "Vexa",
    date: "Oct 2022 - Present",
    description:
      "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
    image:
      "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "NodeMailer",
    ],
    category: "web app",
    github: "https://github.com/rishavchanda/Project-Management-App",
    webapp: "https://vexa-app.netlify.app/",
  },
  {
    id: 1,
    title: "Brain Tumor Detection",
    date: "Jan 2023 - Mar 2023",
    description:
      "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
    image:
      "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
    webapp: "https://brain-tumor.netlify.app/",
    member: [
      {
        name: "Rishav Chanda",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },
  {
    id: 2,
    title: "Buckoid",
    date: "Dec 2021 - Apr 2022",
    description:
      "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
    image:
      "https://camo.githubusercontent.com/fbf405040ae86b5d4a40f24e4ac034982cb8c0e2d850560ba64527997b258be8/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
    tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
    category: "android app",
    github: "https://github.com/rishavchanda/Buckoid-Android-App",
    webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  },
  
];

export const snippets = [
  {
  
    id: 0,
    title: "Next.Js Starter",
    
    description:
      "A dead simple for nextjs project.",

      
      techs:[
        {
      image:"https://tailwindcss.com/_next/static/media/social-card-large.a6e71726.jpg",

      
    },
    {
    image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      
    
},
],
       tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "NodeMailer",
    ],

   

  },
  {
    id: 1,
    title: "Frontend Starter Kit",
    
    description:
      "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",

   
      techs:[
        {
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dsass&psig=AOvVaw1WvEzzskRcZeBX4BPZfjvH&ust=1700251835732000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCGpOepyYIDFQAAAAAdAAAAABAJ", 
    },
      {
    image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      
      
},
],

  
   
  },
  {
    id: 2,
    title: "Backend Starter",
    
    description:
      "A boilerplate for Node.js, Express, Mongoose, Heroku, mLab, Nodemon, PM2, and Babel.",

    techs:[
      {
      image: "https://nodejs.org/static/images/logo.svg",
    },
    {
      image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      
  },
  
],
  },
  
  {
    id: 3,
    title: "Frontend Starter Kit",
    
    description:
      "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",

   
      techs:[
        {
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dsass&psig=AOvVaw1WvEzzskRcZeBX4BPZfjvH&ust=1700251835732000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCGpOepyYIDFQAAAAAdAAAAABAJ", 
    },
      {
    image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      
      
},
      ],
    },
  
];




