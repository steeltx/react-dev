import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((props: unknown) => {
    return (
        <div
            data-testid="ItemCounter">
        </div>
    )
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => <div data-testid="ItemCounter"
//         name={props.name} quantity={props.quantity}> </div>
// }));

describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    });

    test('should render the corrent number of ItemCounter components', () => {
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(4);
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(4);
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Nintendo', quantity: 1 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Xbox', quantity: 2 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Play', quantity: 3 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'PC', quantity: 5 });
    });
});
