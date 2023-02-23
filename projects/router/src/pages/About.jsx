import Link from "../Link";

const i18n = {
    es: {
        title: "Sobre mí",
        description: "Creando un React Router.",
        anchor: "Ir a la home"
    },
    en: {
        title: "About me",
        description: "Creating a React Router.",
        anchor: "Go to home"
    }
};

const useI18n = (lang) => {
    return i18n[lang] || i18n.es;
};

function AboutPage({ routeParams }) {
    const i18n = useI18n(routeParams.lang);

    return (
        <section>
            <h1>{i18n.title}</h1>
            <div>
                <img src="https://avatars.githubusercontent.com/u/93843418?v=4" alt="jevmydev" />
            </div>
            <p>{i18n.description}</p>
            <Link to="/">{i18n.anchor}</Link>
        </section>
    );
}

export default AboutPage;
