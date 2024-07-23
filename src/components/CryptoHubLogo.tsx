import {FC} from "react";
import Image from "next/image";
import cryptoHubLogo from "/public/cryptoHub.png";

interface Props {}

const CryptoHubLogo: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex gap-2 items-center ">
      <div className="relative w-12 aspect-square">
        <Image priority src={cryptoHubLogo} fill alt="ch logo" />
      </div>
      <h1 className="text-2xl font-bold text-black dark:text-white ">
        Crypto <span className="text-primary">Hub</span>
      </h1>
    </div>
  );
};

export default CryptoHubLogo;
