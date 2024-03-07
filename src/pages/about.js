import Head from 'next/head'
import Image from 'next/image';

export default function About() {
    return (
        <div class='about'>
        <Head>
            <title>About</title>
        </Head>
            <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={32} />
            <h1>About</h1>
            <p>This is the about page</p>
            <Image src="/next.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
    )
    }