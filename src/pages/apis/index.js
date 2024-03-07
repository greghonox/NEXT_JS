export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: { data },
    }

}

export default function Apis({data}) {
    return (
        <div>
            <h1>Post Senders</h1>
            <ul>
                {data.map(props => (
                    <li>
                        <p class='titleapi'>{props.title}</p>
                        <p class='descriptionapi'>{props.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}