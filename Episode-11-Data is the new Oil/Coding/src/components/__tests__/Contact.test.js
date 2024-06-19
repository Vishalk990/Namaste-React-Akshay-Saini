import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {

    test('Should load contact us component', () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });


    test('Should load button inside Contact component', () => {
        render(<Contact />);

        const button = screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    });
});
