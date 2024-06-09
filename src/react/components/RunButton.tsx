import React from "react";

interface RunButtonProps {
    onClick: () => void;
    isRunning: boolean;

}

const RunButton: React.FC<RunButtonProps> = ({onClick, isRunning }) => {
    return (
        <button className="execute-button" onClick={onClick}  disabled={isRunning}>
        </button>
    );
};

export default RunButton;