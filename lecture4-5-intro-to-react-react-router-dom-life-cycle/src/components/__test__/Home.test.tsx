import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Home from "../Home";
import products from "../__mocks__/products";

describe("Home Test Scenario", () => {
  beforeEach(() => {
    // jest.mock(gloa)
    global.fetch = () => {
      return Promise.resolve({
        json: () => products.getProducts(),
      });
    };
  });
  afterEach(cleanup);
  it("Look for loading bar in the component", async () => {
    const { getByText, getByTestId, container } = render(<Home />);

    expect(getByText("Loader........")).toBeDefined();
    // waitFor(expect(get("input"));
    waitFor(() => expect(getByTestId("input")).toBeDefined);
    waitFor(() => expect(getByTestId(0)).toBeDefined);
    // removeDynamicAttirbutes();
    expect(container).toMatchSnapshot();
  });
});
