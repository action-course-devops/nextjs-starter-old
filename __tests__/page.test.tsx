import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import "@testing-library/jest-dom";

// jest.mock("../src/utils/flagsmith",() => {
//   return {
//     getEnvironmentFlags: jest.fn(() => 
//       Promise.resolve({
//          isFeatureEnabled: () => {
//           return true;
//          }
//       })),
//   };
// });

// jest.mock("../src/utils/flagsmith.ts", () => ({
//   getEnvironmentFlags: jest.fn(() => 
//     Promise.resolve({
//       isFeatureEnabled: jest.fn((feature) => {
//         return feature === 'search';
//       })
//     })
//   )
// }));

jest.mock('flagsmith-nodejs', () => ({
  Flagsmith: jest.fn().mockImplementation(() => ({
    getEnvironmentFlags: jest.fn(() => 
      Promise.resolve({
        isFeatureEnabled: jest.fn((feature) => feature === 'search')
      })
    )
  }))
}));

describe("Home", () => {
  it("renders a heading", async () => {
    render(await Home());

    const docH = screen.getByRole("heading", {
      name: "Hello World",
      level: 2,
    });

    expect(docH).toBeInTheDocument();
  });
});
