import { render, screen } from '@testing-library/react';
import Bmi from './Bmi';

test('renders web app BMI calculator', () => {
    render(<Bmi />);
    const linkElement = screen.getByText(/เว็บแอพคำนวณ BMI/i);
    expect(linkElement).toBeInTheDocument();
})