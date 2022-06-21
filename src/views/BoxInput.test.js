import BoxInput from "./BoxInput";
import { fireEvent, render, screen } from "@testing-library/react";

test('Box input first appearance is correct', () => { 
    render(<BoxInput/>) 

    const weightInput = screen.getByPlaceholderText(/น้ำหนัก/);
    expect (weightInput).toBeInTheDocument();

    const heightInput = screen.getByPlaceholderText(/ส่วนสูง/);
    expect (heightInput).toBeInTheDocument();

    const calculateButton = screen.getByText(/คำนวณ/);
    expect (calculateButton).toBeInTheDocument();
})

test('Box input show error, if calculate empty values', () => {
    render(<BoxInput onCalculateBmi={() => {}}/>) 

    const calculateButton = screen.getByText(/คำนวณ/);
    fireEvent.click(calculateButton);

    const errorMessage = screen.getByText(/กรุณาใส่ข้อมูลให้ครบถ้วน/);
    expect (errorMessage).toBeInTheDocument();
})

test('Box input is not show error, if calculate valid values', () => {
    render(<BoxInput onCalculateBmi={() => {}}/>) 

    const weightInput = screen.getByPlaceholderText(/น้ำหนัก/);
    fireEvent.change(weightInput, {target: {value: '100'}});
    expect (weightInput.value).toBe('100');

    const heightInput = screen.getByPlaceholderText(/ส่วนสูง/);
    fireEvent.change(heightInput, {target: {value: '180'}});
    expect (heightInput.value).toBe('180');

    const calculateButton = screen.getByText(/คำนวณ/);
    fireEvent.click(calculateButton);

    const errorMessage = screen.queryByText(/กรุณาใส่ข้อมูลให้ครบถ้วน/);
    expect (errorMessage).not.toBeInTheDocument();
})