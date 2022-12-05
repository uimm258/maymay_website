const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'uimm258@gmail.com',
  title: "How to find me?",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Maymay Liu',
  role: 'React Engineer',
  description:
    'Web application developer armed with proficient knowledge of entire software development life cycle and React expertise. Adept in use React.JS, CSS, SCSS, HTML to design effective single page web applications. Expert in work with Node.JS, GraphQL and PSQL for backend backend API developments. Skilled in conducting unit test and debugging company projects.',
}

const workExp = [
  {
    name: "U.S. Bank",
    date: "11/2021 - Present",
    description: "Built digital payments network web responsive application - Zelle Activity using ReactJS. \n \r Handled over $100 billion dollars P2P money transfer flow and displayed the money transfer activities for 10 billion+ users in the year of 2021-2022. \n \r Became a major contributor to the design of software architecture, data flow, and data contract for transition payment Built a complex web components and functionalities such as date, picker, form input, button, and modal for external partner using React, SCSS, and HTML. \n \r Fulfilled version control by extensively using Git in the project development \n \r Improved the functionality, UI, and efficiency of the internal web tools using React \n \r Worked as a team builder with both attitudes, aptitude, and willingness to share and mentor other team members while pushing through self-development. \n \r Used JIRA for bug tracking, issue tracking and task/story management. \n \r Involved in daily SCRUM meetings to keep track of the ongoing project status and issues."
  },
  {
    name: "Sunvalleytek International Inc",
    date: "05/2020 - 08/2021",
    description: "Converted JQuery based application into React based application using React.js Utilized React-Router to create Dynamic Routing. \n \r Created Components for UX-Library consisted of Button, Checkbox, Input, Icons, Toggle Button Dropdown, Multi-Level Dropdown, and many more. \n \r Produced content pages with CSS3 layout and style markup presentations and used JavaScript methods and properties. \n \r Implemented the Drag and Drop functionality using React-Draggable. \n \r Produced content pages with CSS3 layout and style markup presentations and used JavaScript methods and properties. Implemented the Drag and Drop functionality using React-Draggable."
  }
]

const education = {
    name: 'University of California, Santa Cruz',
    degree: 'B.S. Technology Information Management',
    award: 'Dean Student Reward'
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Yamma',
    description: 'Provided users with a compilation of up-to-date U.S. news; users can communicate with each other through corresponding article chat windows. Developed API services to receive the up-to-date U.S. news. The API integrated the front-end with the back-end and guaranteed the functionality of the system.',
    stack: ['React.JS', 'Node.JS', 'HTML', 'CSS', 'PSQL'],
    sourceCode: 'https://yamma-client-git-development-mettys.vercel.app/'
  },
  {
    name: 'Spaced Repetition',
    description:'A self-driven project for tutor use. Developed a website that allows users to learn Chinese words as the quizzing method. Migrated database to Heroku with SQL which allowed the display and translations of words through API calls. Designed and developed the register-and-login system that enables users to save their learning progress.',    
    stack: ['React.JS', 'Node.JS', 'HTML', 'CSS', 'PSQL'],
    sourceCode: 'https://github.com/uimm258/Spaced-Repetition-Client'
  },
  {
    name: 'Petful',
    description: 'Designed and developed a website that allows users to sign up and adopt a pet. Implemented an algorithm with linked lists and sorting for the stored database of dogs and cats to display available pets and to handle the adopting events. Took full ownership of the whole project.',
    stack: ['React.JS', 'Node.JS', 'HTML', 'CSS', 'PSQL'],
    sourceCode: 'https://github.com/uimm258/Petful-Client',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
  'AWS',
  'SQL',
  'Heroku',
  'Vercel',
  'Github',
  'Mocha',
  'Passport.JS',
  'Python',
  'Java',
  'WordPress'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'uimm258@gmail.com',
}

export { header, about, workExp, education, projects, skills, contact }
