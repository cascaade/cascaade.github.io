import type { ProjectProps } from "../ProjectCard/ProjectCard"

export const props: ProjectProps = {
    name: "Speed Reading Trainer",
    desc: "Learn to put a pep in your step when it comes to literacy!",
    date: "8/13/25",
    cardBanner: "",
    url: "speed-reading"
}


export default function SpeedReading() {
    return (
        <>
            <p>A week of vacation opened my eyes to the necessity of preparation for my future, as it dawned on me that I wasn't set up for the best probability of success. In that discovery, I thought it was important to get a start on my summer reading, which really should have been done by now.</p>
            <p>After pushing it off for a week, I finally sat down to start my first book last night. That session told a lot about me as a reader, and let's just say... not much was positive. Closely followed by vocabulary, one of my biggest weaknesses is speed. It embarrassingly, as you can imagine, took my roughly an hour and a half to read to my designated 65 page goal. Part of that was most certainly distracting thoughts, such as the one I pursued just now.</p>
            <p>After looking around, I found one website that might help my unfortunate soul, though it was paid. Taking inspiration from the reading speed tests on social media, along with those captions that flash one word at a time on the screen, I decided to make a software catered to me and my needs.</p>
            <p>Making an educated guess from the title, you will presumably be spot on what this project is about. It lets you change the words per minute, and the number of words shown at a time to help you get a higher comprehension rate, while decreasing the habit of hearing the words as they are read. I threw this together in like 2 hours, so it's not the most polished site out there, but it works.</p>
            <br />

            <h2>Links</h2>
            <ul>
                <li><a href="https://github.com/cascaade/SpeedReadingTrainer/tree/main">View the code for this project on GitHub</a></li>
            </ul>
        </>
    )
}