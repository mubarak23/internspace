import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

dispatch({
  type: PRODUCT_DETAILS_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.response.message,
});

dispatch({
  type: ORDER_LIST_MY_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.response.message,
});
