import CryptoHubAboutUs from "../indexPageComponents/CryptoHubAboutUs";
import CryptoHubContactUs from "../indexPageComponents/CryptoHubContactUs";
import CryptoHubHero from "../indexPageComponents/CryptoHubHero";
import CryptoHubLatestBlog from "../indexPageComponents/CryptoHubLatestBlog";
import CryptoHubServices from "../indexPageComponents/CryptoHubServices";
import CryptoHubTeam from "../indexPageComponents/CryptoHubTeam";
import CryptoHubTopPartners from "../indexPageComponents/CryptoHubTopPartners";

const LandingPageContainer = () => {
  return (
    <main className="min-h-screen">
      <CryptoHubHero />
      <CryptoHubTopPartners />
      <CryptoHubAboutUs />
      <CryptoHubServices />
      <CryptoHubTeam />
      <CryptoHubLatestBlog />
      <CryptoHubContactUs />
    </main>
  );
};

export default LandingPageContainer;
