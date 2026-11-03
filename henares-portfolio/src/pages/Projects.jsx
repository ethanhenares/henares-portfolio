const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A short one-line description of the first project.",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A short one-line description of the second project.",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A short one-line description of the third project.",
  },
];

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <img
              src={`https://placehold.co/300x180?text=${encodeURIComponent(project.title)}`}
              alt={`${project.title} placeholder`}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
