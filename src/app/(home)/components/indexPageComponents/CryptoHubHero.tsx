import CryptoHubMaxWidth from "@/components/CryptoHubMaxWidth";
import {FC} from "react";
import CryptoHubHeading from "@/app/components/CryptoHubHeading";
import CryptoHubParagraph from "@/app/components/CryptoHubParagraph";
import LottieAnimation from "./Lottie/LottieAnimation";

interface Props {}

const CryptoHubHero: FC<Props> = (props): JSX.Element => {
  return (
    <section className="relative lg:overflow-hidden w-full h-full">
      <div className="absolute inset-0 z-0 lg:hidden h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <LottieAnimation className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-light dark:bg-dark opacity-70"></div>
      </div>
      <CryptoHubMaxWidth className="relative flex flex-col lg:flex-row gap-8 lg:gap-8 lg:pt-8 pb-[2rem] lg:pb-8 px-5 lg:px-[5rem] 2xl:px-[8.25rem] justify-between">
        <div className="text-dark dark:text-light flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 h-[70vh] sm:h-[80vh] md:h-[90vh] gap-4 lg:gap-7">
          <CryptoHubHeading className="text-center lg:text-left">
            Crypto, ICO and Web3
          </CryptoHubHeading>
          <CryptoHubParagraph
            $lg
            className="max-w-[450px] sm:max-w-[500px] text-center lg:text-left lg:max-w-[500px]"
          >
            Crypto Currency, Blockchain, ICO, Web3 related website crafted with
            precision. Comes with all essential UI components and pages for
            anything that relates to Crypto, Blockchain and Web3.
          </CryptoHubParagraph>
        </div>

        <div className="hidden lg:block w-full lg:w-1/2">
          <LottieAnimation />
        </div>
      </CryptoHubMaxWidth>
    </section>
  );
};

export default CryptoHubHero;
