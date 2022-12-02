import { screen, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter, Route } from "react-router-dom";
import updateRoute from "./components/UpdateRoute.js";
afterEach(() => {
  cleanup();
});




  test("origin", () => {
    render(
      <MemoryRouter>
       <updateRoute/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("Origin");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })
  test("Destination", () => {
    render(
      <MemoryRouter>
       <updateRoute/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("Destination");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })
  test("Destination", () => {
    render(
      <MemoryRouter>
        <updateRoute/>
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("Destination");
    waitFor(() => expect(getByTestId(dietFormElement)).toBeInTheDocument());
  })