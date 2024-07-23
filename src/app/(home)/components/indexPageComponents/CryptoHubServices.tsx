import CryptoHubHeading from "@/app/components/CryptoHubHeading";
import CryptoHubMaxWidth from "@/components/CryptoHubMaxWidth";
import {ComponentType, FC} from "react";
import {
  FaCubes,
  FaCartShopping,
  FaClover,
  FaGlobe,
  FaGamepad,
  FaHandshake,
  FaGears,
} from "react-icons/fa6";

interface Props {}

const services = [
  {
    header: "Defi",
    icon: FaCubes,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ratione quibusdam dolores? Maxime, nulla voluptatum nihil magnam placeat iste. Natus.",
  },
  {
    header: "Marketplaces & Exchanges",
    icon: FaCartShopping,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ratione quibusdam dolores? Maxime, nulla voluptatum nihil magnam placeat iste. Natus.",
  },
  {
    header: "NFTs",
    icon: FaClover,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ratione quibusdam dolores? Maxime, nulla voluptatum nihil magnam placeat iste. Natus.",
  },
  {
    header: "Transition web2.0 into web3.0",
    icon: FaGlobe,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ratione quibusdam dolores? Maxime, nulla voluptatum nihil magnam placeat iste. Natus.",
  },
  {
    header: "GamFi & Play2Earn",
    icon: FaGamepad,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ratione quibusdam dolores? Maxime, nulla voluptatum nihil magnam placeat iste. Natus.",
  },
  {
    header: "DAO’s",
    icon: FaHandshake,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ratione quibusdam dolores? Maxime, nulla voluptatum nihil magnam placeat iste. Natus.",
  },
  {
    header: "Infrastructure",
    icon: FaGears,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ratione quibusdam dolores? Maxime, nulla voluptatum nihil magnam placeat iste. Natus.",
  },
];

const CryptoHubServices: FC<Props> = (props): JSX.Element => {
  return (
    <section className="relative lg:overflow-hidden w-full h-full border-b-0 border-primary border-opacity-25">
      <CryptoHubMaxWidth className="relative flex flex-col lg:flex-row gap-8 lg:gap-8 lg:pt-10 pb-[2rem] lg:pb-16 px-5 lg:px-[5rem] 2xl:px-[8.25rem] items-center justify-center">
        <div className="flex flex-col gap-8 md:gap-10 py-8 px-4 md:px-0 w-full md:w-[70%] mx-auto ">
          <div className="w-full">
            <h2 className="text-center text-3xl font-semibold text-primary text-opacity-70 mb-3">
              Our Services
            </h2>
          </div>
          <ul className="list-none flex flex-col gap-8 md:gap-12 relative">
            {services.map((item, index) => (
              <ServiceItem
                key={index}
                header={item.header}
                text={item.text}
                icon={item.icon}
                isLeft={index % 2 === 0}
              />
            ))}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-secondary-light dark:bg-secondary-dark bg-opacity-30 dark:bg-opacity-30 transform -translate-x-1/2"></div>
          </ul>
        </div>
      </CryptoHubMaxWidth>
    </section>
  );
};

export default CryptoHubServices;

interface ServiceItemProps {
  icon: ComponentType<any>;
  header: string;
  text: string;
  isLeft: boolean;
}

const ServiceItem: FC<ServiceItemProps> = ({
  icon: Icon,
  header,
  text,
  isLeft,
}) => {
  return (
    <li
      className={`relative flex ${
        isLeft ? "md:justify-start" : "md:justify-end"
      } w-full`}
    >
      <div
        className={`flex items-center gap-4 w-full md:w-80 aspect-video rounded-xl p-4 bg-secondary-light dark:bg-secondary-dark bg-opacity-20 dark:bg-opacity-20`}
      >
        <Icon className="text-9xl text-dark dark:text-light" />
        <div className="text-dark dark:text-light">
          <h2 className="text-xl font-semibold">{header}</h2>
          <p className="text-sm">{text}</p>
        </div>
      </div>
      <div
        className={`hidden md:block absolute ${
          isLeft ? "left-[calc(50%-0.5rem)]" : "right-[calc(50%-0.5rem)]"
        } top-1/2 transform -translate-y-1/2 w-4 h-4 bg-secondary-light dark:bg-secondary-dark rounded-full border-2 border-white dark:border-gray-600`}
      ></div>
    </li>
  );
};
