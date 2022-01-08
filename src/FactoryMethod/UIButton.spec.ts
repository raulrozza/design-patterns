import DialogComponent, { Button, IconButton } from './UIButton.class';

describe('UIButton', () => {
    describe('class', () => {
        it('should render the dialog with a Button component if theres a button text', () => {
            const dialogComponent = new DialogComponent('Hello World', 'OK');

            const renderResult = dialogComponent.render();

            expect(renderResult).toMatchObject({
                type: 'div',
                isVisible: true,
            });
            const [content, button] = renderResult.children;
            expect(content).toBe('Hello World');
            expect(button).toBeInstanceOf(Button);
        });

        it('should render the dialog with an IconButton component if theres no button text', () => {
            const dialogComponent = new DialogComponent('Hello Dialog');

            const renderResult = dialogComponent.render();

            expect(renderResult).toMatchObject({
                type: 'div',
                isVisible: true,
            });
            const [content, button] = renderResult.children;
            expect(content).toBe('Hello Dialog');
            expect(button).toBeInstanceOf(IconButton);
        });

        it('should change the dialog visibility when clicking the button', () => {
            const dialogComponent = new DialogComponent('Hello World', 'OK');

            const [, button] = dialogComponent.render().children;

            button.onClick();
            expect(dialogComponent.render()).toMatchObject({
                isVisible: false,
            });
        });
    });
});
