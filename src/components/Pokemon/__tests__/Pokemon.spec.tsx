import { render } from '@testing-library/react';
import { Pokemon } from '..';
import { pokemons } from '../../../mocks';

it('renders', () => {
    const { container } = render(
        <Pokemon pokemon={pokemons[0]} />
    );
    expect(container).toMatchSnapshot();
});
