import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Kok Hung | Developer', // e.g: 'Name | Developer'
  lang: 'en, ch', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kok Hung Chan',
  subtitle: 'React Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello There! I am Kok Hung Chan. A graduate from UWE majoring software engineering.',
  paragraphTwo: 'Passionate on front-end coding. Love to develop mobile applications. Experience in developing applications using React-native, JavaScript, and websites using Html, Css.',
  paragraphThree: 'Always stay up to date with latest technology. Tech geek and a pet lover too! 😄',
  resume: 'https://drive.google.com/file/d/18J-G3HfoRInj5DkYBR6efVUn1udFUGDE/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Github.io webpage',
    info: 'A simple personal website that coded using html, css and bootstrap. It was my first personal website.',
    info2: '',
    url: 'https://kokhungchan.github.io',
    repo: 'https://github.com/Kokhungchan/kokhungchan.github.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kokhungchan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/kokhungchan',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kokhungchan/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Kokhungchan/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
