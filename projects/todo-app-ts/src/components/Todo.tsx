import { type TodoId, type Todo as TodoTypes } from "../types";

interface Props extends TodoTypes {
    onRemoveTodo: ({ id }: TodoId) => void;
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoTypes, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        onToggleCompleteTodo({ id, completed: e.target.checked });
    };

    return (
        <div className="view">
            <input type="checkbox" className="toggle" checked={completed} onChange={handleChangeCheckbox} />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                    onRemoveTodo({ id });
                }}
            />
        </div>
    );
};

export default Todo;
