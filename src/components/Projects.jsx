import React from "react";
import styled from "styled-components";
import { tokens } from "../assets/styles/tokens.js";
import SectionTitle from "./SectionTitle.jsx";
import ContactButton from "./ContactButton.jsx";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1800px;
  row-gap: 4rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${tokens.functional.grey3};
  margin-bottom: 1rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  background: ${tokens.brand.primary};
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.2s ease;
  &:hover {
    background: ${tokens.brand.primaryDark};
  }
`;

const Projects = () => {
  const projects = [

    {
      title: "Cachicamo Natural - Identidad de marca + Web",
      description: "Estrategia de branding desde cero con un sitio moderno y responsivo. Desarrollo de los perfiles en redes sociales.",
      image: "/cachi-printscreen.png",
      url: "https://www.instagram.com/cachicamo.natural/?hl=es-la",
    },
    {
      title: "ROLA - Diseño y Desarrollo Web + SEO",
      description: "Creacion de sitio desde cero. Wireframes, perspectiva UX. Curacion y upload de contenido.",
      image: "/rola.png",
      url: "https://rola.la/rola/",
    },
    {
      title: "United Airlines - Campañas de publicacion Web",
      description: "Fuimos parte colaboradora en el equipo de publicaciones, gestion y desarrollo Web entre 2021 - 2025.",
      image: "/united-airlines-img.png",
      url: "https://www.united.com/en/us",
    },
    {
      title: "Cachicamo Natural - Redes Sociales",
      description: "Contenido curado para SEO + Growth Campaign. Gestion de la agenda de publicaciones.",
      image: "/cachicamo-facebook.png",
      url: "https://www.facebook.com/cachicamonatural/",
    },
    {
      title: "Kinemez - Web desde cero",
      description: "Diseño, creacion y desarrollo web con traducciones al Catalán. Roadmap y sitemap",
      image: "/kinemez.png",
      url: "https://kinemez.com/contacte/?lang=ca",
    },
        {
      title: "IQVIA Solutions - Design System",
      description: "",
      image: "/docsite-img.png",
      url: "https://www.iqvia.com/",
    },
  ];

  // Función de ejemplo para el click del botón
  const handleProjectClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ProjectsSection>
      <SectionTitle text="Hicimos" id="projects" />

      <Grid>
        {projects.map((project, index) => (
          <Card key={index}>
            <Image src={project.image} alt={project.title} />
            <Content>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
              <ContactButton
                onClick={() => handleProjectClick(project.url)}
                style={{
                  padding: "0.4rem 0.8rem",
                  fontSize: "0.9rem",
                  // Aquí puedes pasarle el navState si quieres otro estilo
                }}
              >
              Vamos
              </ContactButton>
            </Content>
          </Card>
        ))}
      </Grid>
    </ProjectsSection>
  );
};

export default Projects;
