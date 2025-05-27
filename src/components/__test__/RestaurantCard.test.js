import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";
it("Should render RestaurantCard component with props", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
