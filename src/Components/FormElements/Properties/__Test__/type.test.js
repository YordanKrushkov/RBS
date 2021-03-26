import { render } from '@testing-library/react';
import TypeSelect from '../Type';

test("Type's count is rendering correctly", () => {
    const { getByTestId } = render(
        <TypeSelect>{{className:"options"}}</TypeSelect>
    );
      const type = getByTestId('type');
    expect(type).toBeTruthy()
});
test("Type's count is rendering correctly", () => {
    const { getByTestId } = render(
        <TypeSelect>{{className:"searchOptions"}}</TypeSelect>
    );
      const type = getByTestId('type');
    expect(type).toBeTruthy()
});
test("Type's count is rendering correctly", () => {
    const { getByTestId } = render(
        <TypeSelect>{{className:"optionMenu"}}</TypeSelect>
    );
      const type = getByTestId('type');
    expect(type).toBeTruthy()
});