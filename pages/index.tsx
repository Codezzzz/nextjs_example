import Header from "./components/header";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />

      <p>
        <Link href="/about">
          <a>about</a>
        </Link>
      </p>
    </div>
  );
}
