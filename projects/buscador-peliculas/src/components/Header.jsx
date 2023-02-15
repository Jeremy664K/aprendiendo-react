export function FormHeader({ search, error, handleSubmit, handleChange, handleSort, sort }) {
    return (
        <form className="Header-form Form" onSubmit={handleSubmit}>
            <div className="Form-inputs">
                <input className="Form-input" name="search" value={search} onChange={handleChange} type="text" placeholder="Avengers, Star Wars, The Matrix..." />
                <input className="Form-checkbox" name="checkbox" onChange={handleSort} checked={sort} type="checkbox" />
            </div>
            <button className="Form-submit" type="submit">
                Buscar
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export function Header({ children }) {
    return (
        <header className="Header">
            <div className="Header-wrapper">
                <h1 className="Header-title">Buscador de películas</h1>
                {children}
            </div>
        </header>
    );
}

export default Header;
