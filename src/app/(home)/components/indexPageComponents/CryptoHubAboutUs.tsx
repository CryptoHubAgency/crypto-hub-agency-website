import CryptoHubHeading from "@/app/components/CryptoHubHeading";
import CryptoHubParagraph from "@/app/components/CryptoHubParagraph";
import CryptoHubMaxWidth from "@/components/CryptoHubMaxWidth";
import aboutUsImage from "/public/aboutUsImage.jpg";
import Image from "next/image";
import {FC} from "react";

interface Props {}

const CryptoHubAboutUs: FC<Props> = (props): JSX.Element => {
  return (
    <section className="relative lg:overflow-hidden w-full h-full">
      <CryptoHubMaxWidth className="relative flex flex-col lg:flex-row gap-8 lg:gap-8 lg:pt-10 pb-[2rem] lg:pb-16 px-5 lg:px-[5rem] 2xl:px-[8.25rem] items-center justify-center">
        <div className="text-dark dark:text-light flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 h-[60vh] sm:h-[70vh] md:h-[80vh] gap-4 lg:gap-7 ">
          <div className="flex gap-4 items-center">
            <div className="hidden lg:flex w-8 h-0 border-2 border-primary border-opacity-70" />
            <h3 className="text-lg font-semibold text-primary text-opacity-70">
              About Us
            </h3>
          </div>
          <CryptoHubHeading
            $styleAs="h2"
            $as="h2"
            $medium
            className="text-center lg:text-left"
          >
            Crypto Hub Agency
          </CryptoHubHeading>
          <CryptoHubParagraph
            $base
            className="max-w-[450px] sm:max-w-[500px] text-center lg:text-left lg:max-w-[500px]"
          >
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            }
          </CryptoHubParagraph>
        </div>

        <div className="hidden lg:block lg:relative w-full lg:w-[306px] lg:h-[204px] ">
          <Image src={aboutUsImage} alt="About us" fill />
        </div>
      </CryptoHubMaxWidth>
    </section>
  );
};

export default CryptoHubAboutUs;
