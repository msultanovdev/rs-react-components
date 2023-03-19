import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card/Card';

test('Card title test', () => {
    render(<Card title='Card' description='Card desc' img='url' />);
    const cardTitle = screen.getByTestId('card-title');
    expect(cardTitle).toHaveTextContent('Card');
});

test('Card rendering test', () => {
    render(<Card title='Card' description='Card desc' img='url' />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
});

test('Card description test', () => {
    render(<Card title='Card' description='Card desc' img='url' />);
    const cardDesc = screen.getByTestId('card-description');
    expect(cardDesc).toHaveTextContent('Card desc');
    const altText = screen.getByTestId('card-image');
    expect(altText).toBeInTheDocument();
});
