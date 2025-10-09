// Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { tokens } from '../assets/styles/tokens.js';
import Logo from "../assets/images/logo-bold-nobg.png";


const FooterContainer = styled.footer`
    background-color:  ${tokens.functional.grey3};
    color: ${tokens.functional.white};
    padding: 7rem 2rem 0 2rem;
    font-size: 0.95rem;
    line-height: 1.8;
    margin-top: 288px;
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 4rem;
    max-width: 1600px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const FooterSection = styled.div`
    h4 {
        color: ${tokens.functional.white};
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
    }
`;

const LinkList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
        margin-bottom: 0.5rem;
    }
    
    a {
        color: ${tokens.functional.white};
        text-decoration: none;
        transition: color 0.2s;
        
        &:hover {
            color: ${tokens.brand.palette1[1]};
        }
    }
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
    
    a {
        color: ${tokens.functional.white};
        font-size: 1.5rem;
        transition: color 0.2s;
        
        &:hover {
            color: ${tokens.brand.palette2[0]};
        }
    }
`;

const ContactInfo = styled.div`
    p {
        margin: 0 0 0.5rem;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: 'transparent';
    padding: 1rem;
    border-radius: 8px;

    img {
      max-width: 600px;
      height: auto;
      filter: invert(100%) brightness(200%);
    }
`;

const Copyright = styled.div`
    text-align: center;
    margin-top: 6rem;
    padding-top: 2rem;
    border-top: 1px solid ${tokens.functional.white}55;
    color: ${tokens.functional.white};
    font-size: 0.85rem;
`;

const Footer = () => {
    const { t } = useTranslation();
    return (
        <FooterContainer>
            <ContentGrid>
                {/* Columna 1: Contacto */}
                <FooterSection>
                    <h4>{t('footer.footer_footer_section_1')}</h4>
                    <ContactInfo>
                        <p><strong>Email:</strong> info@lamina.digital</p>
                        <p><strong>{t('footer.footer_contact_info_phone')}:</strong> +54 9 11 6575-8962</p>
                        <p><strong>{t('footer.footer_contact_location')}:</strong> Buenos Aires, Argentina</p>
                    </ContactInfo>
                    <SocialLinks>
                        <a href="URL_FACEBOOK" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </SocialLinks>
                </FooterSection>

                {/* Columna 2: Enlaces */}
                <FooterSection>
                    <h4>{t('footer.footer_footer_section_2_title')}</h4>
                    <LinkList>
                        <li><a href="#home">{t('footer.footer_footer_section_2_item-1')}</a></li>
                        <li><a href="#servicios">{t('footer.footer_footer_section_2_item-2')}</a></li>
                        <li><a href="#proyectos">{t('footer.footer_footer_section_2_item-3')}</a></li>
                        <li><a href="#contacto">{t('footer.footer_footer_section_2_item-4')}</a></li>
                        <li><a href="#planes">{t('footer.footer_footer_section_2_item-5')}</a></li>
                    </LinkList>
                </FooterSection>

                {/* Columna 3: Servicios */}
                <FooterSection>
                    <h4>{t('footer.footer_footer_section_3_title')}</h4>
                    <LinkList>
                        <li><a href="#web">{t('footer.footer_footer_section_3_item-1')}</a></li>
                        <li><a href="#social">{t('footer.footer_footer_section_3_item-2')}</a></li>
                        <li><a href="#seo">{t('footer.footer_footer_section_3_item-3')}</a></li>
                        <li><a href="#auditoria">{t('footer.footer_footer_section_3_item-4')}</a></li>
                    </LinkList>
                </FooterSection>

                {/* Columna 4: Logo en vez de mapa */}
                <FooterSection>
                    <LogoWrapper>
                        <img src={Logo} alt="Logo de la empresa" />
                    </LogoWrapper>
                </FooterSection>
            </ContentGrid>
            
            <Copyright>
                &copy; {new Date().getFullYear()} Lámina Digital. {t('footer.footer_copyright')}
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
