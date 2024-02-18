import { fireEvent, render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";

describe("Page Title Component Unit Tests", () => {
  test("should render without crashing", () => {
    const { debug } = render(<PageTitle>Test</PageTitle>);

    // debug();
    const component = screen.queryByTestId("page-title-root");
    expect(component).toBeInTheDocument();
  });

  test("should render correct text", () => {
    const sampleText = "This is title text";

    const { debug } = render(<PageTitle>{sampleText}</PageTitle>);

    // debug();
    const component = screen.queryByTestId("page-title-root");
    expect(component).toHaveTextContent(sampleText);
  });
});
