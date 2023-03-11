import React from "react";

export const Control: React.FC<{ clickAction: () => void, buttonLabel: string }> = ({ clickAction, buttonLabel }) => {
    return <button onClick={() => clickAction()}>
        {buttonLabel}
    </button>
}