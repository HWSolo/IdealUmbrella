import { render, screen } from '@testing-library/react';
import ScoreBox from '../ScoreBox';


test("it renders without crashing", () => {
    render(<ScoreBox />);
})

test("it contains a supplied number value", () => {
    render(<ScoreBox value="7" />)
    const component = screen.queryByTestId("scorebox");
    expect(component).toHaveTextContent("7")
})

test("it contains a supplied number value", () => {
    render(<ScoreBox value="5" />)
    const component = screen.queryByTestId("scorebox");
    expect(component).toHaveTextContent("5")
})

test("it has the bordered class when specified", () => { 
    render(<ScoreBox value="7" withBorder="true" />)
    const component = screen.queryByTestId("scorebox");
    expect(component).toHaveClass('borederdScoreBox')

})

test("it creates multiple boxes", () => {
    render(<ScoreBox value="7" />)
    render(<ScoreBox value="5" />)
    const component = screen.queryAllByTestId("scorebox");
    expect(component[0]).toHaveTextContent("7");
    expect(component[1]).toHaveTextContent("5");
})

// test("it creates a button")
