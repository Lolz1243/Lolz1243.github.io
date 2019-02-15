import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/pic012.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white font-sans pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Nikhil Vytla.
        </BigTitle>
        <Subtitle>I'm creating AR/VR-based educational technology and serious games for the next generation of educators and leaders.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Crimson"
            link="https://github.com/Lolz1243/Crimson"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Revolutionizing online reading through instantaneous audio and voice control with IBM Watson and Parse. Regional, State, and International Business Plan Finalist, DECA.
          </ProjectCard>
          <ProjectCard
            title="DevMatch"
            link="https://github.com/Lolz1243/DevMatch"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A fully functional, responsive Software-as-a-Service (SaaS) Ruby on Rails web app dedicated to bringing developers, investors, and entrepreneurs together.
          </ProjectCard>
          <ProjectCard
            title="Markt"
            link="https://github.com/Lolz1243/Markt"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Auto-generating supermarket bitmap layouts with TSP and A* to keep shoppers on the fast track to grocery success.
          </ProjectCard>
          <ProjectCard
            title="NewMoms"
            link="https://github.com/Lolz1243/NewMoms"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Personal pregnancy data analytics app for measuring postpartum depression. Finalist, Triangle Health Innovation Challenge (THInC).
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            Experiment, Fail, Discover, Repeat.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Hey there! I'm currently a first-year Chancellor's Carolina Scholar and Honors Carolina student, double majoring in CS and Statistics
          at the University of North Carolina at Chapel Hill. I firmly believe in the power of
          using technology for <a href="https://unc-cssg.org/">social good</a>, and I'm a strong advocate for <a href="https://edu.google.com">universal education</a> and making learning affordable regardless of pre-existing conditions.
        </AboutDesc>
        <AboutDesc>
          Between late 2016 and early 2017, I co-founded and launched <a href="http://onclass.org">Onclass.org</a>, a free educational platform dedicated to parallelizing education among students and building interactive educational tools and custom, teacher-recommended K-12 subject curriculum using Virtual Reality and Javascript.
          To date, we've reached over <u>20,000</u> unique students virtually, and our partnerships with the <a href="http://www.sanjoseca.gov/">City of San Jose</a> and consultations with the <a href="https://dschool.stanford.edu/">Hasso Platner Institute of Design</a> at Stanford have provided us with the opportunity to impact over <u>2,200</u> students through location-based tutoring sessions and workshops.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Contact Me</Title>
          <ContactText>
            Send me an email at <u>cnikhil.vytla [at] gmail.com</u>, check out my <a href="https://github.com/Lolz1243/resume/blob/master/Nikhil_Vytla_Resume.pdf">resume</a>, or find me on other platforms:{' '}
            <a href="https://github.com/Lolz1243">GitHub</a>, {' '}
            <a href="https://www.linkedin.com/in/nikhil-vytla">LinkedIn</a>, {' '}
            <a href="https://www.facebook.com/nvytla">Facebook</a>, &{' '}
            <a href="https://www.twitter.com/@nikhilxvytla">Twitter</a>!
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Nikhil Vytla. Made with ❤ in Chapel Hill.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
