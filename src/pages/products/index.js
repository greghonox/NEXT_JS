import  NavBar from '../../components/navbar';


const randomNumber = Math.random();

const products = [
    { id: randomNumber, name: "Product 1" },
    { id: randomNumber, name: "Product 2" },
    { id: randomNumber, name: "Product 3" },
];

export default function Products() {
    var title = `Products Page`;
    return (
        <center>
            {title}
            {products.map((product) => (
                <div>
                    {product.name}
                </div>
            ))}
        <NavBar />
        </center>
    );
}