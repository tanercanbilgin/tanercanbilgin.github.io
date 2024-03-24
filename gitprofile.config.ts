// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'tanercanbilgin', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['tanercanbilgin/kimmichball', 'tanercanbilgin/pic101','tanercanbilgin/arduino101'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'My First DIY PCB Project',
          description:
            'Taking on each step of the project with careful attention, as it was my first attempt, I worked diligently despite my lack of experience. Despite constantly encountering mistakes, I didnt give up and continued until I achieved results.However, after long efforts, I completed my project. I believed I succeeded after hours of effort. I enjoyed this experience, which returned to me as both experience and knowledge, and I thought it was a good start for me.',
          imageUrl:
            'https://i3.ytimg.com/vi/dGl1446TdQU/maxresdefault.jpg',
          link: 'https://www.youtube.com/watch?v=dGl1446TdQU',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Tanercan Bilgin',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'tanercanbilgin',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'tanercanbilgin@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "Leadership",
    "Python",
    "JavaScript",
    "Embedded C/C++",
    "MATLAB",
    "PCB Design",
    "Linux",
    "Arduino",
    "PIC",
    "Hardware",
    "Electronics",
    "Soldering",
    "AutoCAD",
    "Proteus",
    "Fritzing",
    "Autodesk Fusion 360",
    "GitHub",
    "Node.js",
    "MongoDB",
    "Embedded Systems",
    "Adobe Design Programs",
    "Microsoft Office",
    "WordPress",
    "Web Hosting",
    "Domain Management",
  ],
  experiences: [
    {
      company: 'Kuzgun UAV',
      position: 'Avionic and Software Team Member',
      from: 'November 2023',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/kuzguniha/',
    }
  ],
  educations: [
    {
      institution: 'Yalova University',
      degree: 'Bachelor',
      from: '2021',
      to: '2025',
    }
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,

  enablePWA: true,
};

export default CONFIG;
