import "./App.css";
import { TwitterFollowCard } from "./TwitterFollow";

export function App() {
    const format = (userName) => `@${userName}`;

    return (
        <main className="Twitter">
            <TwitterFollowCard formatUserName={format} userName="midudev">
                Miguel Angel Durán
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={format} userName="jevmydev">
                Jeremy Díaz
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={format} userName="manzDev">
                manzDev
            </TwitterFollowCard>
        </main>
    );
}
