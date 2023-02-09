import { useState } from "react";

export function TwitterFollowCard({ formatUserName, userName = "unknown", children }) {
    const [isFollowing, setIsFollowing] = useState(false);

    const imageSrc = `https://unavatar.io/${userName}`;
    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "Follow-button is-following" : "Follow-button";
    const isFollowYouClassName = isFollowing ? "Follow-you is-following" : "Follow-you is-notFollowing";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className="Follow">
            <div className="Follor-wrapper">
                <header className="Follow-header">
                    <img className="Follow-perfil" src={imageSrc} alt={`Avatar de ${userName}`} decoding="async" />
                </header>
                <section className="Follow-section">
                    <h2 className="Follow-name">{children}</h2>
                    <span className="Follow-user">{formatUserName(userName)}</span>
                    <span className={isFollowYouClassName}>{text}</span>
                </section>
            </div>
            <aside className="Follow-aside">
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}
