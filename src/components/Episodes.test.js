import React from "react";
import { render } from "@testing-library/react";

import Episodes from "./Episodes";

// Testing component renders with no errors
test("Episodes renders with no errors", () => {
  render(<Episodes episodes={[]} />);
});

test("Render a list of episodes after a season is selected", () => {
  // render component with an empty array for the episodes prop
  // re-render component with episodes data (simulating that the user selected a season. For this test we will be using season 1.)
  const { rerender, debug, getAllByTestId } = render(
    <Episodes episodes={[]} />
  );
  debug();
});
