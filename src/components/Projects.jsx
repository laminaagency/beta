import React from "react";
import styled from "styled-components";
import { tokens } from "../assets/styles/tokens.js";
import SectionTitle from "./SectionTitle.jsx";
import ContactButton from "./ContactButton.jsx";
import { useTranslation } from 'react-i18next';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  /* Default for Mobile/Smaller screens */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 2rem;
  width: 100%;
  max-width: 1800px;
  row-gap: 4rem;

  /* Target screens large enough for 3 columns (e.g., above 1200px) */
  @media (min-width: 1200px) {
    /* Explicitly set 3 columns with equal width */
    grid-template-columns: repeat(3, 1fr); 
  }
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
  const { t } = useTranslation();
  const projects = [

    {
      title: t('projects.project_01_title'),
      description: t('projects.project_01_description'),
      image: "/cachi-printscreen.png",
      url: "https://www.instagram.com/cachicamo.natural/?hl=es-la",
    },
    {
      title: t('projects.project_02_title'),
      description: t('projects.project_02_description'),
      image: "/rola.png",
      url: "https://rola.la/rola/",
    },
    // {
    //   title: "United Airlines - Campañas de publicacion Web",
    //   description: "Fuimos parte colaboradora en el equipo de publicaciones, gestion y desarrollo Web entre 2021 - 2025.",
    //   image: "/united-airlines-img.png",
    //   url: "https://www.united.com/en/us",
    // },
    {
      title: t('projects.project_04_title'),
      description: t('projects.project_04_description'),
      image: "/cachicamo-facebook.png",
      url: "https://www.facebook.com/cachicamonatural/",
    },
    {
      title: t('projects.project_05_title'),
      description: t('projects.project_05_description'),
      image: "/kinemez.png",
      url: "https://kinemez.com/contacte/?lang=ca",
    },
    // {
    //   title: "IQVIA Solutions - Design System",
    //   description: "",
    //   image: "/docsite-img.png",
    //   url: "https://www.iqvia.com/",
    // },
  ];

  // Función de ejemplo para el click del botón
  const handleProjectClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ProjectsSection>
      <SectionTitle text={t('navbar.nav_item_projects')} id="projects" />

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
                  border: '1px solid'
                }}
              >
              {t('projects.projects_btn')}
              </ContactButton>
            </Content>
          </Card>
        ))}
      </Grid>
    </ProjectsSection>
  );
};

export default Projects;
