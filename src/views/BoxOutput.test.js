import BoxOutput from "./BoxOutput";
import { fireEvent, render, screen } from "@testing-library/react";

test("Box output first appearance is correct", () => {
    render(<BoxOutput bmi={null}/>);

    const outputDiv = screen.getByText(/---/);
    expect(outputDiv).toBeInTheDocument();
})
