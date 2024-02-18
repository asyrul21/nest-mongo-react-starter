import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Loader Component Unit Tests", () => {
  const TestChildComponent = (props: any) => {
    return (
      <div data-testid="modal-test-child">
        <p>This is a test child component</p>
      </div>
    );
  };

  test("should render without crashing", () => {
    const { debug } = render(
      <Modal isOpen={true} onClose={jest.fn()} title="Test Modal">
        <TestChildComponent />
      </Modal>,
    );
    // debug();
    const component = screen.queryByTestId("modal-root");
    expect(component).toBeInTheDocument();

    const titleComponent = screen.queryByTestId("modal-title");
    expect(titleComponent).toBeInTheDocument();
    expect(titleComponent).toHaveTextContent("Test Modal");

    const childComponent = screen.queryByTestId("modal-test-child");
    expect(childComponent).toBeInTheDocument();
  });
});
