import Accordion from './Accordion'
import { render, screen, fireEvent, getByText } from '@testing-library/react'

describe("Accordion", () => {

    beforeEach(() => {
        render(
            <Accordion title='primero'>
                contenido
            </Accordion>
        );
    })

    test('el titulo siempre debe mostrarse', () => {
        expect(screen.getByText('primero')).toBeDefined()
    })
    test('el contenido no se debe mostrar todo el tiempo', () => {
        expect(screen.queryByText(/contenido/i)).toBeNull()
    })
    test('mostrar el contenido cuando se haga click en el boton', ()=> {
        const button = screen.getByText(/open/i);
        fireEvent.click(button)
        expect(screen.getByText(/contenido/i)).toBeDefined()
    })
    test('mostrar el contenido cuando se haga click en el boton', ()=> {
        const button = screen.getByText(/open/i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/contenido/i)).toBeNull()
    })
})