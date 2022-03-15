import { render, screen } from '@testing-library/react';
import GameBox from '../GameBox'

test("it renders without crashing", () => {
    render(<GameBox />);
})

test("it contains a 2 playerboxes",() => {
    render(<GameBox />)
    const component = screen.queryAllByTestId("playerbox");
    expect(component.length).toEqual(2);  
})