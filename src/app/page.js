import Image from 'next/image';
import IntroductionSection from './components/Introduction';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Lens from './components/Lens';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-screen-md mx-auto py-10 px-4 text-base">
      <IntroductionSection />
      <AboutMe></AboutMe>
      <WorkExperience />
      <Projects />
      <Lens />
      <Footer></Footer>
    </div>
  );
}
