import NavBar from "./navbar";


export default function MainContainers({children}) {
    return (
        <center>
            <NavBar />
            <div>{children}</div>
        </center>
    );
}