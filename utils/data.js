
const tech = [
    {name: "HTML", start: 2020},
    {name: "CSS", start: 2020},
    {name: "Javascript", start: 2021},
    {name: "React", start: 2022},
    {name: "Next JS", start: 2023},
    {name: "Tailwind CSS", start: 2023},
]

const date = new Date()
const year = date.getFullYear()

export const skills = tech.map(({ name, start }) => ({ name, experience: year - start }))
