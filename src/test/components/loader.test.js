import { render } from "@testing-library/react";
import { Loader } from "../../components/Loader";

describe("PRUEBA <Loader />.", () => {
  test("Los título del formulario debe existir el documento ", () => {
    const { getByText } = render(<Loader />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
