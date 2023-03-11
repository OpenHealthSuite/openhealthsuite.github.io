import { Control } from "./Control";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Test Example", () => {
    test("Render", () => {
        const testLabel = "Some Button Label";
        render(<Control clickAction={jest.fn()} buttonLabel={testLabel}/>);

        expect(screen.getByText(testLabel)).toBeInTheDocument();
    });
    test("Interaction", async () => {
        const testLabel = "Some Button Label";
        const user = userEvent.setup();
        const clickAction = jest.fn();
        render(<Control clickAction={clickAction} buttonLabel={testLabel}/>);
        await user.click(screen.getByText(testLabel));

        expect(clickAction).toBeCalledTimes(1);
    });
});