import styles from "./Home.module.scss";

import HomeHero from "@components/sections/HomeHero/HomeHero";
import ProjectCard from "@components/features/ProjectCard";
import type { ProjectProps } from "@components/features/ProjectCard/ProjectCard";

import { props as flappyBirdNetworkProjectProps } from "@components/features/projects/FlappyBirdNetwork";
// import { props as sandwichBotProjectProps } from "@components/features/projects/SandwichBot";
import { props as speedReadingProjectProps } from "@components/features/projects/SpeedReading";

export default function Home() {
    const projects: ProjectProps[] = [
        flappyBirdNetworkProjectProps,
        // sandwichBotProjectProps,
        speedReadingProjectProps
    ];
    
    return (
        <div className={styles.homePage}>
            <HomeHero />
            <div className={styles.content}>
                <h3 className={styles.h3} id="about">
                    About Me <span className={`timestamp ${styles.timestamp}`}>6/13/25</span>
                </h3>
                <p>
                    Hello. I'm Owen, a high-schooler who loves making websites
                    and Arduino projects. I've created many user interface
                    designs over the years, wherever they may be. I'm a
                    programmer on my school's FIRST robotics team, where I wrote
                    code for the robot's visual odometry and helped to design a
                    brand new, modernized website.
                </p>
                <p>
                    I've listed a few polished projects worth looking at below.
                    Thank's for stopping by!
                </p>

                <h3 id="projects">Projects</h3>
                <div className={styles.projectsContainer}>
                    {projects.map(proj => (
                        <ProjectCard {...proj} />
                    ))}
                </div>
                <button className={`button ${styles.moreProjectsButton}`}>
                    &sdot;&sdot;&sdot;
                </button>
                {/* <!-- <h3 id="timeline">Timeline</h3> --> */}
                {/* <!-- <p>Nam ut turpis tortor. Nunc sed mattis ipsum, in rutrum libero. Nunc a sem nulla. In eu tempor est. Vivamus faucibus ut nulla sit amet scelerisque. Aenean interdum erat nec massa vestibulum, ut elementum nunc semper. Etiam non tincidunt ante, vitae convallis arcu. Phasellus mattis nunc quis sollicitudin rutrum. Donec diam nibh, egestas vel lacinia eu, ornare in elit. Nulla tempus dapibus est, malesuada mollis nisi rhoncus id. Vivamus blandit rutrum erat eu placerat. Quisque sit amet leo sit amet nisi pharetra vehicula. Proin congue sapien urna, et eleifend nibh sagittis at. Donec sit amet enim varius, aliquam nisi quis, hendrerit lacus. Nulla facilisi.</p>
            <p>Vivamus nec tellus sit amet turpis bibendum tempus non ac urna. Etiam faucibus risus id dolor congue lobortis. Praesent convallis enim leo, at maximus sapien fringilla et. Ut fringilla nisi ornare odio vestibulum porttitor. Integer venenatis sapien sit amet urna convallis semper. Duis risus nisi, congue ut blandit at, tincidunt vel leo. Nulla tempor, massa eu mattis malesuada, mauris nisl laoreet magna, in ullamcorper mi nibh in metus. Proin vulputate, neque pretium tristique mattis, nulla quam interdum lacus, at porttitor ligula diam id libero.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum non purus gravida, hendrerit nisl eget, congue est. Vestibulum elementum laoreet risus, et blandit enim euismod ut. Nulla facilisi. Donec scelerisque sem semper mi congue, sit amet faucibus lacus congue. Suspendisse viverra egestas odio at sodales. Duis sed mi leo. Vivamus porta pretium erat, vitae accumsan diam blandit nec. Fusce dapibus eleifend ipsum sit amet imperdiet.</p>
            <p>Nam tempus, ex ut tincidunt efficitur, ex lacus tempor massa, vel tempus risus quam quis nibh. Nam vel massa vitae tortor consequat convallis sit amet quis libero. Sed accumsan, tortor ullamcorper dapibus ultrices, nisi mauris mattis erat, ut ullamcorper risus nisi id nisi. Integer tempus eu nunc vel sodales. Maecenas aliquet sodales elit, ut scelerisque urna vulputate elementum. Suspendisse rutrum, augue sit amet malesuada luctus, velit magna eleifend urna, eget auctor purus augue in diam. Mauris volutpat pharetra imperdiet. Proin ultrices nisi ac tristique ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris venenatis tellus felis, vel varius justo rhoncus ac. Nulla ut ante sed diam maximus laoreet. In varius laoreet velit, vitae convallis odio rhoncus in.</p>
            <p>Vivamus risus enim, blandit eu justo id, suscipit sagittis libero. Nam pulvinar erat sit amet metus euismod tristique a eget dui. Proin lorem metus, iaculis ut tempor id, tempus bibendum tellus. Morbi volutpat rhoncus metus, eget semper leo semper vitae. Suspendisse tincidunt porta orci, eget efficitur justo interdum eu. Duis finibus, libero pulvinar sodales congue, tortor elit placerat massa, eget pharetra odio felis fermentum purus. Pellentesque congue diam ut consectetur finibus. Duis ac iaculis mauris, sit amet venenatis purus. Suspendisse massa lectus, mattis a urna ac, lacinia ultricies lectus. Nam scelerisque neque quis velit luctus, non lobortis ipsum posuere. Nunc tincidunt nec ex at tincidunt. Sed condimentum nunc ut sapien dapibus, in pulvinar dui ultrices. Morbi tincidunt nisi ac tortor dignissim, ac pharetra eros gravida. Phasellus volutpat dolor turpis, eu condimentum tellus volutpat vitae. Quisque efficitur, purus sit amet porttitor hendrerit, erat neque luctus mi, at euismod nunc leo nec justo. Vestibulum urna ipsum, gravida eu tincidunt sollicitudin, gravida ac mauris.</p> --> */}
            </div>
        </div>
    );
}
