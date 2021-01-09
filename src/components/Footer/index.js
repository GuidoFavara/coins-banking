import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ContactMe,
} from "./FooterElemnts";
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Acerca de</FooterLinkTitle>
              <FooterLink to="/">Como funciona</FooterLink>
              <FooterLink to="/">Testimonios</FooterLink>
              <FooterLink to="/">Empleos</FooterLink>
              <FooterLink to="/">Inversores</FooterLink>
              <FooterLink to="/">Condiciones de uso</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contactanos</FooterLinkTitle>
              <FooterLink to="/">Teléfonos</FooterLink>
              <FooterLink to="/">Soporte</FooterLink>
              <FooterLink to="/">Destinatarios</FooterLink>
              <FooterLink to="/">Sponsors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Enviar</FooterLink>
              <FooterLink to="/">Embajadores</FooterLink>
              <FooterLink to="/">Agencia</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Coins
            </SocialLogo>
            <WebsiteRights>
              Coins © {new Date().getFullYear()} Todos los derechos reservados.
              Desarrollado por{" "}
              {
                <ContactMe
                  href="//www.linkedin.com/in/guido-favara/"
                  target="_blank"
                  arial-label="LinkedIn"
                >
                  Guido Favara
                </ContactMe>
              }
            </WebsiteRights>
            <SocialIconLink
              href="//www.github.com/GuidoFavara"
              target="_blank"
              arial-label="GitHub"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIcons>
              <SocialIconLink
                href="//www.linkedin.com/in/guido-favara/"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/guido-favara/"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/guido-favara/"
                target="_blank"
                arial-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/guido-favara/"
                target="_blank"
                arial-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
