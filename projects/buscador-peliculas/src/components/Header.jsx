export function FormHeader() {
    return (
        <form className="Header-Form Form">
            <input className="Form-input" type="text" placeholder="Avengers, Star Wars, The Matrix..." />
            <button className="Form-submit" type="submit">
                Buscar
            </button>
        </form>
    );
}

export function Header() {
    return (
        <header className="Header">
            <div className="Header-wrapper">
                <h1 className="Header-title">Buscador de películas</h1>
                <FormHeader />
            </div>
        </header>
    );
}

export default Header;
