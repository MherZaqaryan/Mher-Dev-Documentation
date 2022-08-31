import Link from "@docusaurus/Link";
import React from "react";
import styles from "../css/projects.module.css";

const projects = [
  {
    title: "BedWars1058 Private Games Addon",
    description: "This is an add-on for the BedWars1058 plugin, this add-on allows players to create private BedWars games and play with their friends! Private game hoster can modify game's difficulty to either harder or easier with game modifiers.",
    link: "/private-games",
    polymartId: 1620
  },
  {
    title: "BedWars1058 Cosmetics Addon",
    description: "BedWars1058 Cosmetics is an addon for the BedWars1058 mini-game which adds some visual effects applied by players for in-game events such as bed destroying, final killing, winning, bow shooting, etc.",
    link: "/cosmetics",
    polymartId: 1619
  },
];

function Project(project) {
  return (
    <div className={styles.project}>
      <div className={styles.flex}>
        <Link className={styles.projectPolymart} to={`https://polymart.org/resource/${project.polymartId}`}>
          {project.title}
        </Link>
        <p>{project.description}</p>
      </div>
      <div>
        <Link className="button button--primary" to={project.link}>
          Documentation
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}