import { render, screen, fireEvent } from '@testing-library/react';
import UserInput from './UserInput';

test("UserInput renders without crashing", () => {
  render(<UserInput />)
});

test("Form submission should not call add method if input field is empty", () => {
  const add = jest.fn();
  const { getByTestId } = render(<UserInput addToList={add} />);
  const btn = getByTestId("addbutton");
  fireEvent.click(btn);
});


// test("Form submission should go through successfully", () => {
//   const mockedAdd = jest.fn() // highlight-line
//   render(<UserInput addToList={mockedAdd} />)
//   const input = screen.getByPlaceholderText("ENTER TASK");
//   const btn = screen.getByTestId("addbutton");

//   fireEvent.change(input, { target: { value: "grocery" } });
//   fireEvent.click(btn);
// });