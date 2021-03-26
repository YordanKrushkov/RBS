import { render } from '@testing-library/react';
import BathroomCount from '../Bathrooms';

test("Bathroom's count is rendering correctly", () => {
    const { getByTestId } = render(
        <BathroomCount>{{className:"options"}}</BathroomCount>
    );
      const bathroom = getByTestId('bathroom');
    expect(bathroom).toBeTruthy()
});
test("Bathroom's count is rendering correctly", () => {
    const { getByTestId } = render(
        <BathroomCount>{{className:"searchOptions"}}</BathroomCount>
    );
      const bathroom = getByTestId('bathroom');
    expect(bathroom).toBeTruthy()
});
test("Bathroom's count is rendering correctly", () => {
    const { getByTestId } = render(
        <BathroomCount>{{className:"optionMenu"}}</BathroomCount>
    );
      const bathroom = getByTestId('bathroom');
    expect(bathroom).toBeTruthy()
});