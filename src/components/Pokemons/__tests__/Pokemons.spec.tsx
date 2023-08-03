import { render } from "@testing-library/react";
import { pokemons } from "../../../mocks";
import Pokemons from "../Pokemons";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(pokemons),
  })
) as jest.Mock;

it.skip("renders", () => {
  const { container } = render(<Pokemons />);
  expect(container).toMatchSnapshot();
});
