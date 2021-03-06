import React from "react";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import App from "../../components/App";

describe("test for <App /> component", () => {
  test("full app rendering", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(
      screen.getByText(/find info about movies, tv shows/i)
    ).toBeInTheDocument();
  });
});
