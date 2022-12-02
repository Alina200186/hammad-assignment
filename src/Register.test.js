import { screen, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter, Route } from "react-router-dom";
import Register from "./components/Register.jsx";
afterEach(() => {
  cleanup();
});


test("register", () => {
  render(
    <MemoryRouter>
    <Register/>
    </MemoryRouter>
  );
  const screenElement = screen.getByText("Update Routes");
  waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})
test("register button", () => {
    render(
      <MemoryRouter>
       <Register/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("rbtn");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
  })
  test("name", () => {
    render(
      <MemoryRouter>
        <Register/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("name");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })
  test("email", () => {
    render(
      <MemoryRouter>
         <Register/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("email");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })
  test("phone number", () => {
    render(
      <MemoryRouter>
        <Register/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("phoneNumber");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })
  test("Password", () => {
    render(
      <MemoryRouter>
         <Register/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("Password");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })
  test("R-password", () => {
    render(
      <MemoryRouter>
         <Register/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("ConfirmPasssword");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })
