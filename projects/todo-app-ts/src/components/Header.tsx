import CreateTodo from "./CreateTodo";

import { TodoTitle } from "../types";

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header className="header">
            <h1>
                Todo + <span style={{ color: "#007acc" }}>TS</span>
            </h1>

            <CreateTodo saveTodo={onAddTodo} />
        </header>
    );
};

export default Header;
