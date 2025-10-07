import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ValuesPrinciples from "../components/pages/aboutus/ValuesPrinciples";
import MarketingSalesTeam from "../components/pages/aboutus/MarketingSalesTeam";
import BiomedicalTeam from "../components/pages/aboutus/BioMedicalTeam";
import { AboutUs } from "../components/pages/aboutus/AboutUs";

const Page = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <ValuesPrinciples />
      <MarketingSalesTeam />
      <BiomedicalTeam />
      <Footer />
    </div>
  );
};

export default Page;
