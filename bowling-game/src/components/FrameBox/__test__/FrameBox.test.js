import { render, screen } from '@testing-library/react';
import FrameBox from '../FrameBox';

test("it renders without crashing", () => {
    render(<FrameBox />);
})

test("it contains a two scoreboxes",() => {
    render(<FrameBox />)
    const component = screen.queryAllByTestId("scorebox");
    expect(component.length).toEqual(2);  
})