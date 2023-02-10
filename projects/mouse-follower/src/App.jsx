import { useEffect, useState } from "react";

const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const textButtonEnabled = enabled ? "Desactivar puntero" : "Activar puntero";

    const handleClick = () => {
        setEnabled(!enabled);
    };

    // Toggle cursor
    useEffect(() => {
        const handleMove = ({ clientX, clientY }) => setPosition({ x: clientX, y: clientY });

        if (enabled) window.addEventListener("pointermove", handleMove);

        return () => window.removeEventListener("pointermove", handleMove);
    }, [enabled]);

    // Toggle body cursor
    useEffect(() => {
        document.body.classList.toggle("no-cursor", enabled);

        return () => document.body.classList.remove("no-cursor");
    }, [enabled]);

    return (
        <>
            <div className="mouse" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} hidden={!enabled} />
            <button onClick={handleClick}>{textButtonEnabled}</button>
        </>
    );
};

function App() {
    return (
        <main>
            <FollowMouse />
        </main>
    );
}

export default App;
