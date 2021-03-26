import { render } from '@testing-library/react';
import CheckboxContainer from '../index';

test("Checkbox renders correctly", () => {
    const { getByTestId } = render(
        <CheckboxContainer />
    );
    const checkbox = getByTestId('checbox');
    expect(checkbox).toBeTruthy()
});