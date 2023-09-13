import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Welcome from "../components/Welcome";
import WelcomeMore from "../components/WelcomeMore";
import Courses from "../components/Courses";
import AboutMe from "../components/AboutMe";
import Podcast from "../components/Podcast";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <SeoHead title="Make Change Happen" />
      <Layout>
        <Welcome />
        <WelcomeMore />
        <Courses />
        <AboutMe />
        <Contact />
        {/* <Podcast /> */}
      </Layout>
    </>
  );
}
