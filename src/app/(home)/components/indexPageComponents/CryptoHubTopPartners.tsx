import CryptoHubMaxWidth from "@/components/CryptoHubMaxWidth";
import {FC} from "react";

interface Props {}

const CryptoHubTopPartners: FC<Props> = (props): JSX.Element => {
  return (
    <section className="relative lg:overflow-hidden w-full h-full">
      <CryptoHubMaxWidth className="relative flex flex-col gap-4 lg:pb-8 pt-8 px-5 lg:px-[5rem] 2xl:px-[8.25rem]">
        <div className="flex items-center justify-between gap-6 w-full">
          <div className="border border-secondary-light dark:border-secondary-dark w-full" />
          <h1 className="text-nowrap text-lg font-semibold text-dark dark:text-light">
            OUR TOP PARTNERS
          </h1>
          <div className="border border-secondary-light dark:border-secondary-dark w-full" />
        </div>
      </CryptoHubMaxWidth>
    </section>
  );
};

export default CryptoHubTopPartners;
