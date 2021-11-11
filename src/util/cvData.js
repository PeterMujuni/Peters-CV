import profileimage from '../Components/ProfilePhoto/profilePhoto.jpg';
import logoImage from '../Components/Navbar/portfolioLogo.png';
import linkedinImage from '../Components/Navbar/linkedin.png';
import githubImage from '../Components/Navbar/github.png';

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
    resume: 'Jeg er en nysgerrige, proaktiv web udvikler. Jeg kan godt lide at skabe moderne, smukke og responsive front-end-websteder. Mit foretrukne front-end bibliotek er React, men har ligeledes evne til at lære nye færdigheder på kort tid.',
    experience: [
        {
            company: 'Meedo',
            period: 'Nov 2021 - Now',
            assignments: 'Udvikling af applikationer med ReactJS.'
        },
        {
            company: 'meneto Software ApS',
            period: 'April 2019 - Jun 2019',
            assignments: 'Arbejdede som freelancere til at udvikle hele menetos website Og omsætte en e-book artikel på 42 sider til HTML CSS.'
        },
        {
            company: 'Flyttecentrum',
            period: 'Juli 2019 - Aug 2019',
            assignments: 'Design af en ny ordre side til flyttecentrum med photoshop. Omsætning af designet til functionel kode, ved brug af HTML5, CSS3 & Vanilla JavaScript.'
        },
        {
            company: 'Alif Ba Ta Sprogcenter',
            period: 'Jan 2018 - Dec 2020',
            assignments: 'udvikling og vedligholdelse af firmaets hjemmside.'
        },
        {
            company: 'Softmedia Group',
            period: 'Maj 2015 - Dec 2015',
            assignments: 'Mine opgaver bestod i udvikling af hjemmesider, ved brug af HTML og CSS. Siderne blev dernæst overført til Wordpress.'
        }
    ],
    education: [
        {
            name: 'React Developer CODECADEMY',
            period: 'Aug 2021 - Dec 2021'
        },
        {
            name: 'Frontend Nanodegree hos UDACITY',
            period: 'Dec 2018 - Marts 2019'
        },
        {
            name: 'Datamatiker Computer Science',
            period: 'Aug 2012 - Dec 2014'
        }
    ],
    projects: [
        {
            name: 'Book List app',
            period: 'Nov 2021',
            description: 'An app that helps me keep track of the books i want to read. I can add books to the list, delete book from the list. App made in ReactJS',
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
            progressValue: '99'
        },
        {
            name: 'CSS3',
            icon: 'SiCss3',
            progressValue: '99'
        },
        {
            name: 'JavaScript',
            icon: 'SiJavascript',
            progressValue: '99'
        },
        {
            name: 'ReactJS',
            icon: 'SiReact',
            progressValue: '99'
        },
        {
            name: 'TypeScript',
            icon: 'SiTypescript',
            progressValue: '50'
        },
        {
            name: 'Sass',
            icon: 'SiSass',
            progressValue: '50'
        },
        {
            name: 'Babel',
            icon: 'SiBabel',
            progressValue: '99'
        }
    ],
    backendskills: [
        {
            name: 'NodeJS',
            icon: 'SiNodedotjs',
            progressValue: '75'
        }
    ],
    otherskills: [
        {
            name: 'Git',
            icon: 'SiGit',
            progressValue: '95'
        },
        {
            name: 'GitHub',
            icon: 'SiGithub',
            progressValue: '55'
        },
        {
            name: 'Bash',
            icon: 'SiGnubash',
            progressValue: '80'
        },
        {
            name: 'Photoshop',
            icon: 'SiAdobephotoshop',
            progressValue: '75'
        },
        {
            name: 'Illustrator',
            icon: 'SiAdobeillustrator',
            progressValue: '55'
        },
        {
            name: 'Indesign',
            icon: 'SiAdobeindesign',
            progressValue: '80'
        },
        {
            name: 'Audition',
            icon: 'SiAdobeaudition',
            progressValue: '80'
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