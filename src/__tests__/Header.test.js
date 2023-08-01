import { render } from "@testing-library/react";
import Header from "../componant/Header";
import { Provider } from "react-redux";
import appstore from "../../utils/appstore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should load Header Componant with a login button", () => {
  render(
    <BrowserRouter>
  <Provider store={appstore}>
  <Header />
  </Provider>
  </BrowserRouter>
  );

  const loginButton = screen.getByRole("button")

  expect (loginButton).toBeInTheDocument()
});
