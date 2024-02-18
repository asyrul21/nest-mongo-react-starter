import { fireEvent, render, screen } from "@testing-library/react";
import { Banner } from "./Banner";

describe("Banner Component Unit Tests", () => {
  test("should render without crashing", () => {
    const { debug } = render(<Banner type="info" text="Test" />);
    // debug();
    const component = screen.queryByTestId("banner-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Test");
  });
});
