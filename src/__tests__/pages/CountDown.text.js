import { render, screen } from "@testing-library/react"
import CountDown from "../../pages/CountDown"

describe('running test for Count time', () => {
    test('countdown page', async () => {
        render(<CountDown />);
        const linkElement = screen.getByText(/count down/i);
        expect(linkElement).toBeInTheDocument('Count Down')
    })
    test('buttons are present', async () => {
        render(<CountDown />);
        const linkElement = screen.getByText(/start/i);
        expect(linkElement).toBeInTheDocument('START')
    })
})