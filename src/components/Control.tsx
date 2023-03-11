import { Button } from "@chakra-ui/button";
import React from "react";

export const Control: React.FC<{ clickAction: () => void, buttonLabel: string }> = ({ clickAction, buttonLabel }) => {
    return <Button onClick={() => clickAction()}>
        {buttonLabel}
    </Button>
}