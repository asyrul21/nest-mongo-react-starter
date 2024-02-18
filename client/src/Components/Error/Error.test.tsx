import { fireEvent, render, screen } from "@testing-library/react";
import { ErrorComponent } from "./Error";

describe("Error Component Unit Tests", () => {
  test("should render without crashing", () => {
    const { debug } = render(<ErrorComponent />);
    // debug();
    const component = screen.queryByTestId("error-root");
    expect(component).toBeInTheDocument();
  });

  test("should show correct error message", () => {
    const testErrorMessage = "This is a test";

    const { debug } = render(<ErrorComponent error={testErrorMessage} />);
    // debug();
    const component = screen.queryByTestId("error-text");
    expect(component).toHaveTextContent(testErrorMessage);
  });
});
