import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [userMssg, setUserMssg] = useState("");

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target!.value;
    setUserMssg("");
    setEmail(email);
  };

  const loginHandler = () => {
    console.log("login");
    if (email) {
      if (email.includes("@")) {
        router.push("/");
      } else {
        setUserMssg("Something went wrong logging you in!");
      }
    } else {
      // ...
      setUserMssg("Enter a valid email address!");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start"
      style={{
        backgroundImage:
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/images/signin-bg.jpg)",
      }}
    >
      <Head>
        <title>Nextflix SignIn</title>
      </Head>
      <header className="flex justify-between w-full py-8 pl-8">
        {/* logo link */}
        <Link href="/" className="flex font-medium items-center mb-4 md:mb-0">
          {/* logo wrapper */}
          <div className="text-red-700 w-32">
            <Image
              src="/images/netflix.svg"
              width={128}
              height={32}
              alt="Netflix Logo"
            />
          </div>
        </Link>
      </header>
      <main className="relative z-10 justify-center md:mt-28">
        <div className="flex flex-col p-12 bg-black/60 rounded-md min-w-[240px]">
          <h1 className="text-white font-bold text-3xl mb-8">Sign In</h1>
          <input
            type="email"
            placeholder="Email Address"
            onChange={onEmailChangeHandler}
            className="p-2 text-black w-full h-12 min-w-[240px] text-lg"
          />
          <p className="my-2 text-white/80">{userMssg}</p>
          <button
            onClick={loginHandler}
            className="bg-red-600 px-12 py-2 text-xl text-white font-bold rounded-md mt-6"
          >
            Sign In
          </button>
          <p className="flex justify-center gap-3 pt-6">
            Secured by
            <Image
              src="/images/magic_white.svg"
              height={60}
              width={60}
              alt="Magic Link Logo"
            />
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
