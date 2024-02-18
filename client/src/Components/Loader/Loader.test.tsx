import { fireEvent, render, screen } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Banner Component Unit Tests", () => {
  test("should render without crashing", () => {
    const { debug } = render(<Loader />);
    // debug();
    const component = screen.queryByTestId("loader-root");
    expect(component).toBeInTheDocument();
  });
});
