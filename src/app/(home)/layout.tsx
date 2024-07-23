import {ReactNode} from "react";
import CryptoHubHeaderNav from "./components/layoutComponents/CryptoHubHeaderNav";
import CryptoHubFooter from "./components/layoutComponents/CryptoHubFooter";

export default function HomeLayout({children}: {children: ReactNode}) {
  return (
    <>
      <main className="bg-light dark:bg-dark">
        {/*Header*/}
        <CryptoHubHeaderNav />
        {/*children*/}
        {children}
        {/*Footer*/}
        <CryptoHubFooter />
      </main>
    </>
  );
}
