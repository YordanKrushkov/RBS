import { render } from '@testing-library/react';
import RentingPrice from '../RentingPrice';
import SelingPrice from '../SellingPrice';

test("Renting price is rendering correctly", () => {
    const { getByTestId } = render(
        <RentingPrice>{{className:"options"}}</RentingPrice>
    );
    const rentingPrice = getByTestId('rentingPrice');
    expect(rentingPrice).toBeTruthy()
});
test("Renting price is rendering correctly", () => {
    const { getByTestId } = render(
        <RentingPrice>{{className:"searchOptions"}}</RentingPrice>
    );
    const rentingPrice = getByTestId('rentingPrice');
    expect(rentingPrice).toBeTruthy()
});
test("Renting price is rendering correctly", () => {
    const { getByTestId } = render(
        <RentingPrice>{{className:"optionMenu"}}</RentingPrice>
    );
    const rentingPrice = getByTestId('rentingPrice');
    expect(rentingPrice).toBeTruthy()
});

// SELLING
test("Selling Price is rendering correctly", () => {
    const { getByTestId } = render(
        <SelingPrice>{{className:"options"}}</SelingPrice>
    );
    const sellingPrice = getByTestId('sellingPrice');
    expect(sellingPrice).toBeTruthy()
});
test("Selling Price is rendering correctly", () => {
    const { getByTestId } = render(
        <SelingPrice>{{className:"searchOptions"}}</SelingPrice>
    );
    const sellingPrice = getByTestId('sellingPrice');
    expect(sellingPrice).toBeTruthy()
});
test("Selling Price is rendering correctly", () => {
    const { getByTestId } = render(
        <SelingPrice>{{className:"optionMenu"}}</SelingPrice>
    );
    const sellingPrice = getByTestId('sellingPrice');
    expect(sellingPrice).toBeTruthy()
});