import Link from "next/link";
import Head from "next/head";
export interface aboutProps {}

function about({}: aboutProps) {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
}

export default about;
