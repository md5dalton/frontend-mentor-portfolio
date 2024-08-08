
const tech = [
    {name: "HTML", start: 2020},
    {name: "CSS", start: 2020},
    {name: "Javascript", start: 2021},
    {name: "React", start: 2022},
    {name: "SASS/SCSS", start: 2022},
    {name: "Next JS", start: 2023},
    {name: "Tailwind CSS", start: 2023},
]

const date = new Date()
const year = date.getFullYear()

export const skills = tech.map(({ name, start }) => ({ name, experience: year - start }))

export const projects = [
    {
        name: "Shortly URL shortening API",
        thumbnails: {
            small: "", 
            large: "/images/projects/shortly.jpg"
        },
        links: {
            code: "https://github.com/md5dalton/short-url",
            site: "https://shorty-pied.vercel.app/"
        },
        tech: [
            "React", "SASS"
        ]
    },
    {
        name: "Results summary component",
        thumbnails: {
            small: "", 
            large: "/images/projects/results-summary-component.jpg"
        },
        links: {
            code: "https://github.com/md5dalton/results-summary-component",
            site: "https://results-summary-component-khaki-phi.vercel.app/"
        },
        tech: [
            "html", "css"
        ]
    },
    {
        name: "Social links profile",
        thumbnails: {
            small: "", 
            large: "/images/projects/social-links-profile.jpg"
        },
        links: {
            code: "https://github.com/md5dalton/social-links",
            site: "https://social-links-livid.vercel.app/"
        },
        tech: [
            "Next JS", "Tailwind CSS"
        ]
    },
]