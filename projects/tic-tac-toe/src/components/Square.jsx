export const Square = ({ children, isSelected, updateBoard, index }) => {
    const squareClassName = `square ${isSelected ? "is-selected" : ""}`;

    const handleClick = () => {
        updateBoard(index);
    };

    return (
        <div className={squareClassName} onClick={handleClick}>
            {children}
        </div>
    );
};

export default Square;
