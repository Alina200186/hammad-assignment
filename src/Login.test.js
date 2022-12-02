import { screen, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
afterEach(() => {
  cleanup();
});


test("Login", () => {
  render(
    <MemoryRouter>
     <Login/>
    </MemoryRouter>
  );
  const screenElement = screen.getByText("Don't have an account?");
  waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})
test("Login button", () => {
    render(
      <MemoryRouter>
         <Login/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("lbtn");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
  })
  test("email textfield testcase", () => {
    render(
      <MemoryRouter>
        <Login/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("email");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })
  test("password textfield testcase", () => {
    render(
      <MemoryRouter>
        <Login/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("Password");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })