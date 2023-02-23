import Link from "../Link";

function HomePage() {
    return (
        <section>
            <h1>Home</h1>
            <p>Página ejemplo para crear un React Router desde cero.</p>
            <Link to="/about">Ir a Sobre Nosotros</Link>
        </section>
    );
}

export default HomePage;
