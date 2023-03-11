import Head from "next/head";
import { Roboto_Slab } from "next/font/google";

import Navbar from "components/navbar/navbar";

const roboto = Roboto_Slab({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Nextflix</title>
        <meta
          name="description"
          content="Practice project for Next.js course  by Zero To Mastery (ZTM)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${roboto.className} bg-black/90 text-white h-full`}>
        <Navbar username="nextflix@domain.com" />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
