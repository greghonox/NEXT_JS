import Image from 'next/image';


export default function Navbar() {
    return (
        <center class='navbar'>
            <a class='title' href="/">Home</a><br/>
            <a class='title' href="/products">Products</a><br/>
            <a class='title' href="/products/shirt">shirt</a><br/>
            <a class='title' href="/products/shirt/shirt_red">shirt red</a>
            <a class='title' href="/products/legs">legs</a>
            <a class='title' href="/about">About</a>
            <Image src="/mario.png" alt="Vercel Logo" width={72} height={16} />
        </center>
    );
}