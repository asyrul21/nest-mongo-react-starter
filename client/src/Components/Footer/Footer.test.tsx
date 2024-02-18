import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component Unit Tests", () => {
  test("should render without crashing", () => {
    const { debug } = render(<Footer />);

    // debug();
    const component = screen.queryByTestId("footer-root");
    expect(component).toBeInTheDocument();
  });
});
