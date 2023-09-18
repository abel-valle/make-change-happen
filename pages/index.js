import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Welcome from "../components/Welcome";
import WhatIs from "../components/WhatIs";
import HowTo from "../components/HowTo";
import Courses from "../components/Courses";
import AboutMe from "../components/AboutMe";
// import Podcast from "../components/Podcast";
import Enroll from "../components/Enroll";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <SeoHead title="Make Change Happen" />
      <Layout>
        <Welcome />
        <WhatIs />
        <HowTo />
        <Courses />
        <AboutMe />
        <Enroll />
        <Contact />
        {/* <Podcast /> */}
      </Layout>
    </>
  );
}
