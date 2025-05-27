import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/ResMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../../../src/utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Rolls(15)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  const HeaderBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(HeaderBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(16);
  const clearcartBtn = screen.getByRole("button", { name: "Clear Cart" });
  expect(clearcartBtn).toBeInTheDocument();
  fireEvent.click(clearcartBtn);
   expect(screen.getAllByTestId("foodItems").length).toBe(15);
});
