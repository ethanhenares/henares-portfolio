const projects = [
  {
    id: 1,
    title: "Branding",
    description: "A project branding for my DDMS.",
  },
  {
    id: 2,
    title: "Poster",
    description: "A Random Edit Poster.",
  },
  {
    id: 3,
    title: "Band Poster",
    description: "A Customized artwork, typography, and layout for a band's promotional concert poster.",
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
