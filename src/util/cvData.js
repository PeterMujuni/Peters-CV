import profileimage from '../assets/profilePhoto.jpg';
import logoImage from '../assets/portfolioLogo.png';
import linkedinImage from '../assets/linkedin.png';
import githubImage from '../assets/github.png';
import comingSoonImage from '../assets/coming-soon.png'

export const peterMujuni = {
    personligInfo: {
        name: 'PETER MUJUNI MWEBESA',
        position: 'Frontend Developer',
        email: 'kontakt@petermujuni.dk',
        location: 'Denmark, Copenhagen',
        image: profileimage,
        logo: logoImage,
        githubImage: githubImage,
        linkedinImage: linkedinImage , 
        githubLink: 'https://github.com/PeterMujuni',
        linkedinLink: 'https://www.linkedin.com/in/petermujuni/'
    },
    resume: [
        "Frontend Engineer, Peter Mujuni contributes to the improvement of web applications through accessibility, newest trends, best practices and strong focus on high quality code. He has reached his results through planning, documenting, implementing and executing frontend projects.",
        "The developer has hands-on experience as Frontend Engineer, with a strong focus on adding value by building bridges between the frontend  and users.",
        "He has experience in building frontend applications with fundamental web technologies from scratch such as  JavaScript ES6, CSS3 and HTML5, and also utilizing JS Libraries such as ReactJS.",
        "He is a web addict and has been working professionally within the WEB-industry since 2015."
    ],
    experience: [
        {
            company: 'Meedo',
            period: 'Nov 2021 - Now',
            assignments: 'Redevelop a wordpress learning management system into a React based application.',
            responsibilities: [
                'Implementation of web solutions using ReactJS.',
                'Further development of existing projects.',
                'Utilizing of APIs in web applications',
                'Close collaboration with designers, UXs and backenders.',
                'Conducting stakeholder calls to gather feedback.',
                'Ensure a high quality of code.',
                'Ensure that site works on a wide range of devices, screen sizes and browsers.'
            ],
            technologies: [
                'ReactJS', 'JavaScript ES6', 'CSS3', 'HTML5', 'Git', 'GitHub', 'Bash', 'VSCode'
            ]
        },
        {
            company: 'Flyttecentrum',
            period: 'July 2019 - Aug 2019',
            assignments: 'Design and implement an order form.',
            responsibilities: [
                'Design UI using Photoshop.',
                'Development of a responsive UI component.',
                'Ensure browser compatibility.',
                'Conducting stakeholder meetings to gather feedback.',
                'Analyzing requirements, as well as estimation of solution proposals.'
            ],
            technologies: [
                'JavaScript', 'CSS3', 'HTML5', 'Git', 'GitHub', 'Bash', 'VSCode'

            ]
        },
        {
            company: 'meneto Software ApS',
            period: 'April 2019 - June 2019',
            assignments: 'Redevelop existing web app. Add an employee page. Turn a 42 page  e-book into HTML and CSS.',
            responsibilities: [
                'Redevelopment of the company website.',
                'Design and develop new functions for existing modules.',
                'Ensure a high quality of code.',
                'Optimize and leverage new solutions and technology.',
                'Close collaboration with designers and UXs.',
                'Further development of new features.',
                'Conducting stakeholder meetings to gather feedback',
                'Ensure responsiveness to a wide range of devices.',
                'Ensure browser compatibility.'
            ],
            technologies: [
                'JavaScript ES6', 'CSS3', 'HTML5', 'Git', 'GitHub', 'Bash', 'VSCode'
            ]
        },
        {
            company: 'Alif Ba Ta Sprogcenter',
            period: 'Jan 2017 - Dec 2020',
            assignments: 'Develop company web app. Maintain, update and add new features.',
            responsibilities: [
                'Design UI using Photoshop.',
                'Develop UI with HTML5, CSS3 and React.',
                'Deliver a responsive company website to all devices.',
                'Utilizing APIs in web applications.',
                'Translate business needs into technical requirements.',
                'Conducting stakeholder meetings to gather feedback',
                'Ongoing further development of new features.'

            ],
            technologies: [
                'ReactJS', 'JavaScript ES6', 'CSS3', 'HTML5', 'Git', 'GitHub', 'Bash', 'VSCode'
            ]
        },
        {
            company: 'Softmedia Group',
            period: 'May 2015 - Dec 2016',
            assignments: 'Implement UI designs. Develop and maintain company web app.',
            responsibilities: [
                'Develop websites using HTML, CSS, and JavaScript.',
                'Further development of existing projects.',
                'Collaboration with designers.',
                'Create responsive sites.',
                'Participate in workshops with customers.'
            ],
            technologies: [
                'JavaScript ES6', 'CSS3', 'HTML5', 'Git', 'GitHub', 'Bash', 'VSCode'
            ]
        }
    ],
    education: [
        {
            name: 'AP Graduate in Computer Science',
            period: 'Aug 2012 - Dec 2014'
        }
    ],
    projects: [
        {
            name: 'Coming soon',
            period: '',
            description: '',
            imageUrl: comingSoonImage,
            link: '#'
        },
        {
            name: 'Coming soon',
            period: '',
            description: '',
            imageUrl: comingSoonImage,
            link: '#'
        }
    ],
    skills: {        
        frontend: 'Frontend Skills',
        backend: 'Backend Skills',
        other: 'Other Skills'        
    },
    frontendskills: [        
        {
            name: 'HTML5',
            icon: 'SiHtml5',
            progressValue: '99',
            color: '#F76800'
        },
        {
            name: 'CSS3',
            icon: 'SiCss3',
            progressValue: '99',
            color: '#32A2D6'
        },
        {
            name: 'JavaScript',
            icon: 'SiJavascript',
            progressValue: '99',
            color: '#F7DF1E'
        },
        {
            name: 'Sass',
            icon: 'SiSass',
            progressValue: '90',
            color: '#C76395'
        },
        {
            name: 'ReactJS',
            icon: 'SiReact',
            progressValue: '99',
            color: '#5ED3F3'
        },
        {
            name: 'TypeScript',
            icon: 'SiTypescript',
            progressValue: '50',
            color: '#2F74C0'
        },
        {
            name: 'NextJS',
            icon: 'SiNextdotjs',
            progressValue: '75',
            color: '#1D262D'
        },
        {
            name: 'Redux',
            icon: 'SiRedux',
            progressValue: '60',
            color: '#7248B6'
        }
    ],
    backendskills: [
        {
            name: 'MongoDB',
            icon: 'SiMongodb',
            progressValue: '99',
            color: '#4CAA3D'
        },
        {
            name: 'Firebase',
            icon: 'SiFirebase',
            progressValue: '99',
            color: '#F4C43D'
        },
        {
            name: 'NodeJS',
            icon: 'SiNodedotjs',
            progressValue: '75',
            color: '#4D9E39'
        }
    ],
    otherskills: [
        {
            name: 'Git',
            icon: 'SiGit',
            progressValue: '99',
            color: '#EB4D1C'
        },
        {
            name: 'GitHub',
            icon: 'SiGithub',
            progressValue: '95',
            color: '#1A1E22'
        },
        {
            name: 'Bash',
            icon: 'SiGnubash',
            progressValue: '99',
            color: '#3C4548'
        },
        {
            name: 'npm',
            icon: 'SiNpm',
            progressValue: '75',
            color: '#C60000'
        },
        {
            name: 'Photoshop',
            icon: 'SiAdobephotoshop',
            progressValue: '75',
            color: '#03272F'
        },
        {
            name: 'Illustrator',
            icon: 'SiAdobeillustrator',
            progressValue: '55',
            color: '#310000'
        },
        {
            name: 'Indesign',
            icon: 'SiAdobeindesign',
            progressValue: '80',
            color: '#47021E'
        },
        {
            name: 'Audition',
            icon: 'SiAdobeaudition',
            progressValue: '80',
            color: '#00251F'
        }
    ],
    language: [
        {
            name: 'Danks',
            progressValue: '100'
        },
        {
            name: 'Engelsk',
            progressValue: '95'
        },
        {
            name: 'Arabisk',
            progressValue: '80'
        }
    ]
}