import { render } from '@testing-library/react';
import BedroomCount from '../Bedrooms';

test("Bedroom's count is rendering correctly", () => {
    const { getByTestId } = render(
        <BedroomCount>{{className:"options"}}</BedroomCount>
    );
      const bedroom = getByTestId('bedroom');
    expect(bedroom).toBeTruthy()
});
test("Bedroom's count is rendering correctly", () => {
    const { getByTestId } = render(
        <BedroomCount>{{className:"searchOptions"}}</BedroomCount>
    );
      const bedroom = getByTestId('bedroom');
    expect(bedroom).toBeTruthy()
});
test("Bedroom's count is rendering correctly", () => {
    const { getByTestId } = render(
        <BedroomCount>{{className:"optionMenu"}}</BedroomCount>
    );
      const bedroom = getByTestId('bedroom');
    expect(bedroom).toBeTruthy()
});