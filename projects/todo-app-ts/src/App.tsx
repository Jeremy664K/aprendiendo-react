import { useState } from "react";

import mocksTodos from "./mocks/mocksTodos.json";

import { type TodoId, type Todo as TodoTypes, type FilterValue, type TodoTitle } from "./types";
import { TODO_FILTERS } from "./const";

import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

const App = (): JSX.Element => {
    const [todos, setTodos] = useState(mocksTodos);
    const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

    const handleRemove = ({ id }: TodoId) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const handleCompleted = ({ id, completed }: Pick<TodoTypes, "id" | "completed">) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed
                };
            }

            return todo;
        });

        setTodos(newTodos);
    };

    const handleClearCompleted = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    const handleFilterChange = (filter: FilterValue) => {
        setFilterSelected(filter);
    };

    const activeCount = todos.filter((todo) => !todo.completed).length;
    const completedCount = todos.length - activeCount;

    const filteredTodos = todos.filter((todo) => {
        if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
        if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;

        return todo;
    });

    const handleAddTodo = ({ title }: TodoTitle) => {
        const newTodo = {
            title,
            id: crypto.randomUUID(),
            completed: false
        };

        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
    };

    return (
        <div className="todoapp">
            <Header onAddTodo={handleAddTodo} />
            <Todos todos={filteredTodos} onRemoveTodo={handleRemove} onToggleCompleteTodo={handleCompleted} />
            <Footer activeCount={activeCount} completedCount={completedCount} filterSelected={filterSelected} onClearCompleted={handleClearCompleted} handleFilterChange={handleFilterChange} />
        </div>
    );
};

export default App;
