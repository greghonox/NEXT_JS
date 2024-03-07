import Head from 'next/head';


export default function Home() {
  return (
    <main>
      <Head>
        <title>First Page</title>
        <meta name="keyworkds" content="learn,next,js" />
        <meta name="description" content="My first page in the Next.js" />
      </Head>

      <center>
        <p font-size="2px">My first page in the Next.js!</p>
      </center>      
    </main>
  );
}
