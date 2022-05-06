import About from "../components/about";
import Blogs from "../components/blogs";
import Contacts from "../components/contacts";
import Experience from "../components/experience";
import HeaderJumbotron from "../components/header/header-jumbotron";
import Profile from "../components/profile";
import Section from "../components/containers/Section";

export default function Home() {
  return (
    <div>
      <HeaderJumbotron />
      <Section Component={<Profile />} bg="section-dark" id="section1" />
      <Section Component={<About />} bg="section" id="section2" />
      <Section Component={<Experience />} bg="section-dark" id="section3" />
      <Section Component={<Blogs />} bg="orange" id="section4" />
      <Section Component={<Contacts />} bg="section-dark" id="section5" />
    </div>
  );
}
