import Link from "../Link";

export function Page404() {
    return (
        <section>
            <div>
                <h1>This is not fine</h1>
                <img src="https://midu.dev/images/this-is-fine-404.gif" />
            </div>
            <div>
                <Link to="/">Volver a la Home</Link>
            </div>
        </section>
    );
}

export default Page404;
