import { render } from '@testing-library/react';
import AllCities from '../index';

test("Checkbox renders correctly", () => {
    const { getByTestId } = render(
        <AllCities>{{className:"options"}}</AllCities>
    );
    const city = getByTestId('city');
    expect(city).toBeTruthy()
});
test("Checkbox renders correctly", () => {
    const { getByTestId } = render(
        <AllCities>{{className:"searchOptions"}}</AllCities>
    );
    const city = getByTestId('city');
    expect(city).toBeTruthy()
});
test("Checkbox renders correctly", () => {
    const { getByTestId } = render(
        <AllCities>{{className:"optionMenu"}}</AllCities>
    );
    const city = getByTestId('city');
    expect(city).toBeTruthy()
});