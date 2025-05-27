import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/RestListMockData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should render the Body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});

it("Should search ResList for Sweets text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("ResId");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const inputBox = screen.getByTestId("searchInput");
  fireEvent.change(inputBox, { target: { value: "Sweets" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("ResId");
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should search top rated restaurant button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("ResId");
  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Resturants",
  });
  fireEvent.click(topRatedBtn)
  const cardsAfterFilter = screen.getAllByTestId("ResId");
  expect(cardsAfterFilter.length).toBe(5);
});
