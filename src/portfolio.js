/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: 'AK Hanish',
  logo_name: 'AKH',
  nickname: 'Tech Geek',
  subTitle:
    'A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.',
  resumeLink:
    'https://drive.google.com/file/d/1Sumn2vTX_Q7uuOUhFhs_EbbLXGq5j_T4/view?usp=sharing',
  portfolio_repository: 'https://github.com/akhanish7/myPortfolio',
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: 'https://github.com/akhanish7/',
  linkedin: 'https://www.linkedin.com/in/akhanish/',
  gmail: 'akhanish7@gmail.com',

  facebook: 'https://www.facebook.com/profile.php?id=100016731278029',

  instagram: 'https://www.instagram.com/ak._.hanish/',
};

const skills = {
  data: [
    {
      title: 'Full Stack Development',
      fileName: 'FullStackImg',
      skills: [
        '⚡ Building resposive website front end using React-Redux',
        '⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin',
        '⚡ Creating application backend in Node, Express & Flask',
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
          fontAwesomeClassname: 'simple-icons:html5',
          style: {
            color: '#E34F26',
          },
        },
        {
          skillName: 'CSS3',
          fontAwesomeClassname: 'fa-css3',
          style: {
            color: '#1572B6',
          },
        },
        {
          skillName: 'Sass',
          fontAwesomeClassname: 'simple-icons:sass',
          style: {
            color: '#CC6699',
          },
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'simple-icons:javascript',
          style: {
            backgroundColor: '#000000',
            color: '#F7DF1E',
          },
        },
        {
          skillName: 'ReactJS',
          fontAwesomeClassname: 'simple-icons:react',
          style: {
            color: '#61DAFB',
          },
        },
        {
          skillName: 'NodeJS',
          fontAwesomeClassname: 'simple-icons:node-dot-js',
          style: {
            color: '#339933',
          },
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'simple-icons:npm',
          style: {
            color: '#CB3837',
          },
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassname: 'simple-icons:yarn',
          style: {
            color: '#2C8EBB',
          },
        },
        {
          skillName: 'Gatsby',
          fontAwesomeClassname: 'simple-icons:gatsby',
          style: {
            color: '#663399',
          },
        },
        {
          skillName: 'Flutter',
          fontAwesomeClassname: 'simple-icons:flutter',
          style: {
            color: '#02569B',
          },
        },
      ],
    },
    {
      title: 'Cloud Architecture',
      fileName: 'CloudInfraImg',
      skills: [
        '⚡ Experience working on multiple cloud platforms',
        '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases',
        '⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS',
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4"
        //   }
        // },
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'simple-icons:amazonaws',
          style: {
            color: '#FF9900',
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6"
        //   }
        // },
        {
          skillName: 'Firebase',
          fontAwesomeClassname: 'simple-icons:firebase',
          style: {
            color: '#FFCA28',
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791"
        //   }
        // },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'simple-icons:mongodb',
          style: {
            color: '#47A248',
          },
        },
        {
          skillName: 'Docker',
          fontAwesomeClassname: 'simple-icons:docker',
          style: {
            color: '#1488C6',
          },
        },
        {
          skillName: 'Kubernetes',
          fontAwesomeClassname: 'simple-icons:kubernetes',
          style: {
            color: '#326CE5',
          },
        },
      ],
    },
    {
      title: 'UI/UX Design',
      fileName: 'DesignImg',
      skills: [
        '⚡ Designing highly attractive user interface for mobile and web applications',
        '⚡ Customizing logo designs and building logos from scratch',
        '⚡ Creating the flow of application functionalities to optimize user experience',
      ],
      softwareSkills: [
        {
          skillName: 'Adobe XD',
          fontAwesomeClassname: 'simple-icons:adobexd',
          style: {
            color: '#FF2BC2',
          },
        },
        {
          skillName: 'Figma',
          fontAwesomeClassname: 'simple-icons:figma',
          style: {
            color: '#F24E1E',
          },
        },
        {
          skillName: 'Adobe Illustrator',
          fontAwesomeClassname: 'simple-icons:adobeillustrator',
          style: {
            color: '#FF7C00',
          },
        },
        {
          skillName: 'Inkscape',
          fontAwesomeClassname: 'simple-icons:inkscape',
          style: {
            color: '#000000',
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: 'HackerRank',
      iconifyClassname: 'simple-icons:hackerrank',
      style: {
        color: '#2EC866',
      },
      profileLink: '',
    },
    {
      siteName: 'Codechef',
      iconifyClassname: 'simple-icons:codechef',
      style: {
        color: '#5B4638',
      },
      profileLink: '',
    },
    {
      siteName: 'Codeforces',
      iconifyClassname: 'simple-icons:codeforces',
      style: {
        color: '#1F8ACB',
      },
      profileLink: '',
    },
    {
      siteName: 'Hackerearth',
      iconifyClassname: 'simple-icons:hackerearth',
      style: {
        color: '#323754',
      },
      profileLink: '',
    },
    {
      siteName: 'Kaggle',
      iconifyClassname: 'simple-icons:kaggle',
      style: {
        color: '#20BEFF',
      },
      profileLink: '',
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: 'Sambhram Institute of Technology, Bangalore',
      subtitle: 'B.Tech. in Computer Engineering',
      logo_path: 'sait.jpg',
      alt_name: 'SAIT, Bangalore',
      duration: '2017 - Present',
      descriptions: [
        '⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.',
        '⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.',
      ],
      website_link: 'https://sambhramit.com/',
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: 'Android Developement',
      subtitle: 'Workshop',
      logo_path: 'wac.png',
      certificate_link: '',
      alt_name: 'WHAT AFTER COLLEGE',
      color_code: '#8C151599',
    },
    {
      title: 'Java Foundation',
      subtitle: 'Solo Learn',
      logo_path: 'sololearn.png',
      certificate_link:
        'https://www.sololearn.com/Certificate/1068-13153649/pdf/',
      alt_name: 'Java',
      color_code: '#00000099',
    },
    {
      title: 'HTML 5',
      subtitle: 'Solo Learn',
      logo_path: 'sololearn.png',
      certificate_link:
        'https://www.sololearn.com/Certificate/1014-13153649/pdf/',
      alt_name: 'HTML 5',
      color_code: '#0C9D5899',
    },
    {
      title: 'JP Morgan & Chase Virual Work',
      subtitle: 'Inside Sherpa',
      logo_path: 'insidesherpa.png',
      certificate_link:
        'https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_9JkfFrTHuJQBXueb5_completion_certificate.pdf',
      alt_name: 'Inside Sherpa',
      color_code: '#1F70C199',
    },
    // {
    //   title: 'Big Data',
    //   subtitle: '- Kim Akers',
    //   logo_path: 'microsoft_logo.png',
    //   certificate_link:
    //     'https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view',
    //   alt_name: 'Microsoft',
    //   color_code: '#D83B0199',
    // },
    // {
    //   title: 'Advanced Data Science',
    //   subtitle: '- Romeo Kienzler',
    //   logo_path: 'ibm_logo.png',
    //   certificate_link:
    //     'https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH',
    //   alt_name: 'IBM',
    //   color_code: '#1F70C199',
    // },
    // {
    //   title: 'Advanced ML on GCP',
    //   subtitle: '- GCP Training',
    //   logo_path: 'google_logo.png',
    //   certificate_link:
    //     'https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV',
    //   alt_name: 'Google',
    //   color_code: '#0C9D5899',
    // },
    // {
    //   title: 'DL on Tensorflow',
    //   subtitle: '- Laurence Moroney',
    //   logo_path: 'deeplearning_ai_logo.png',
    //   certificate_link:
    //     'https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8',
    //   alt_name: 'deeplearning.ai',
    //   color_code: '#00000099',
    // },
    // {
    //   title: 'Fullstack Development',
    //   subtitle: '- Jogesh Muppala',
    //   logo_path: 'coursera_logo.png',
    //   certificate_link:
    //     'https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA',
    //   alt_name: 'Coursera',
    //   color_code: '#2A73CC',
    // },
    // {
    //   title: 'Kuberenetes on GCP',
    //   subtitle: '- Qwiklabs',
    //   logo_path: 'gcp_logo.png',
    //   certificate_link:
    //     'https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750',
    //   alt_name: 'GCP',
    //   color_code: '#4285F499',
    // },
    // {
    //   title: 'Cryptography',
    //   subtitle: '- Saurabh Mukhopadhyay',
    //   logo_path: 'nptel_logo.png',
    //   certificate_link:
    //     'https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_',
    //   alt_name: 'NPTEL',
    //   color_code: '#FFBB0099',
    // },
    // {
    //   title: 'Cloud Architecture',
    //   subtitle: '- Qwiklabs',
    //   logo_path: 'gcp_logo.png',
    //   certificate_link:
    //     'https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2',
    //   alt_name: 'GCP',
    //   color_code: '#4285F499',
    // },
  ],
};

// Experience Page
const experience = {
  title: 'Experience',
  subtitle: 'Work, Internship and Volunteership',
  description:
    'I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.',
  header_image_path: 'experience.svg',
  sections: [
    {
      title: 'Work',
      experiences: [
        {
          title: 'Founder',
          company: 'AKH Innovations',
          company_url: 'https://akhinnovations.ml/',
          logo_path: 'akhInnovations.png',
          duration: ' 2018',
          location: 'Bangalore, Karnataka',
          description:
            'Here, I use to take Free-Lancing projects on Web and Mobile Developement',
          color: '#0879bf',
        },
      ],
    },
    {
      title: 'Internships',
      experiences: [
        {
          title: 'Full Stack Developer',
          company: 'TailBuds Pvt. Ltd.',
          company_url: 'https://www.tailbuds.com/',
          logo_path: 'tailbuds.png',
          duration: 'Apr-2020 - Present',
          location: 'Work From Home',
          description:
            'Iam Creating there E-Commerce Website on MEAN Stack and also Cross Mobile Apps using IONIC5',
          color: '#ee3c26',
        },
        {
          title: 'Web Developer',
          company: 'Wild Voyager Pvt. LTD.',
          company_url: 'https://www.wildvoyager.com/',
          logo_path: 'wildvoyager.png',
          duration: 'Apr 2019- Jul 2019',
          location: 'Work From Home',
          description: 'Fixed Bugs and added Functionality to their Website',
          color: '#0071C5',
        },
        {
          title: 'Search Engine Optimization Analyst',
          company: 'ThinkITMagic',
          company_url: 'http://www.thinkitmagic.com/',
          logo_path: 'thinkitmagic.jpg',
          duration: 'Feb 2019- Mar 2019',
          location: 'Work From Home',
          description: 'Worked as SEO analyst and served their clients.',
          color: '#0071C5',
        },
        {
          title: 'Web Developer',
          company: 'Edu4Sure Pvt. LTD.',
          company_url: 'https://edu4sure.com/',
          logo_path: 'e4s.png',
          duration: 'Aug 2018 - Nov 2018',
          location: 'Work From Home',
          description:
            'Worked on Multiple Projects and Delivered Quality Websites.',
          color: '#0071C5',
        },
      ],
    },
    {
      title: 'Volunteerships',
      experiences: [
        {
          title: 'Campus Ambassador',
          company: 'Slice Pay',
          company_url: 'https://sliceit.com/',
          logo_path: 'slicepay.svg',
          duration: 'Feb 2018 - Jul 2019',
          location: 'Bangalore, Karnataka',
          description:
            'I was responsible for Promoting SlicePay in my College and also need to Approve the Applications of registered users from my College.',
          color: '#4285F4',
        },
        {
          title: 'Campus Co-Ordinator',
          company: 'Coding Ninjas',
          company_url: 'https://www.codingninjas.com/',
          logo_path: 'codingninjas.svg',
          duration: 'Mar 2018 - Feb 2020',
          location: 'Bangalore, Karnataka',
          description:
            'Responsible for Organizing various Technical Seminars for Students and Promoting their Courses in my college.',
          color: '#D83B01',
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: 'Projects',
  description:
    'My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.',
  avatar_image_path: 'projects_image.svg',
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: 'Contact Me',
    profile_image_path: 'Hanish Pic.jpeg',
    description:
      'I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full Stack, Cloud  and Opensource Development.',
  },
  blogSection: {
    title: 'My Business Website',
    subtitle:
      'For individual fundamental empowerment, I like to create powerful Applications that create impact on each of the user with Quality Products!',
    link: 'https://www.akhinnovations.ml/',
    avatar_image_path: 'blogs_image.svg',
  },
  addressSection: {
    title: 'Address',
    subtitle:
      '#74 5th Cross, DKN Road Near Sambhram Institute of Technology, MS Palya Bangalore',
    avatar_image_path: 'address_image.svg',
    location_map_link:
      'https://www.google.com/maps/place/AKH+Innovations/@13.0925862,77.5444281,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae23188cf28d99:0x68f18aef16d4124d!8m2!3d13.0925862!4d77.5466168',
  },
  phoneSection: {
    title: 'Phone Number',
    subtitle: '+91 8319627474',
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
