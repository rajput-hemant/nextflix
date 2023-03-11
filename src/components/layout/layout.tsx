import Head from "next/head";
import { Roboto_Slab } from "next/font/google";
import { useEffect, useState } from "react";
import { magic } from "@/lib/magic-client";
import { useRouter } from "next/router";

const roboto = Roboto_Slab({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (magic) {
        const isLoggedIn = await magic.user.isLoggedIn();
        if (isLoggedIn) {
          router.push("/");
        } else {
          router.push("/login");
        }
      }
    })();
  }, []);

  useEffect(() => {
    const onRouteChange = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", onRouteChange);

    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
    };
  }, [router]);

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

      <div className={`${roboto.className} bg-black/90 text-white`}>
        {isLoading ? <div>Loading...</div> : <main>{children}</main>}
      </div>
    </>
  );
};

export default Layout;
