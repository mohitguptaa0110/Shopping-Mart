import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe("Contact Us page test cases", () => {
  // beforeAll(() => {
  //   console.log("beforeAll");
  // });
  // beforeEach(() => {
  //   console.log("beforeEach");
  // });
  // afterAll(() => {
  //   console.log("afterAll");
  // });
  // afterEach(() => {
  //   console.log("afterEach");
  // });
  it("should load Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  // it means test they are same
  test("should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("should load 2 inputbox inside Contact component", () => {
    render(<Contact />);

    const inputBox = screen.getAllByRole("textbox");
    // this inputBox is an object
    expect(inputBox.length).toBe(2);
  });
});
