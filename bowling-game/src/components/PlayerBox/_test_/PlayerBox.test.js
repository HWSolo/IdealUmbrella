import { render, screen } from '@testing-library/react';
import PlayerBox from '../PlayerBox';

test("it renders without crashing", () => {
    render(<PlayerBox />);
})

test("it contains a 10 frameboxes",() => {
    render(<PlayerBox />)
    const component = screen.queryAllByTestId("framebox");
    expect(component.length).toEqual(10);  
})

