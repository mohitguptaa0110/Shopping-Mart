const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("should load Header component with login button", () => {
  //for Link tags - BrowserRouter,   Redux - Provider
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", {name : "Login"});
  expect(button).toBeInTheDocument();
});

it("should load Header component with Cart 0 item", () => {
  //for Link tags - BrowserRouter,   Redux - Provider
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("should load Header component with Cart", () => {
  //for Link tags - BrowserRouter,   Redux - Provider
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("should change login button with logout button on click", () => {
  //for Link tags - BrowserRouter,   Redux - Provider
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Loginbutton = screen.getByRole("button", {name : "Login"});
  fireEvent.click(Loginbutton)
  const Logoutbutton = screen.getByRole("button", {name : "Logout"});
  expect(Logoutbutton).toBeInTheDocument();
});
