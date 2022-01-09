import DialogComponent, { Button, IconButton } from './UIButton.class';
import makeDialog from './UIButton.function';

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

    describe('function', () => {
        it('should render the dialog with a UIButton containing the button text', () => {
            const dialog = makeDialog('Hello World', 'OK');

            const renderResult = dialog.render();

            expect(renderResult).toMatchObject({
                type: 'div',
                isVisible: true,
            });
            const [content, button] = renderResult.children;
            expect(content).toBe('Hello World');
            expect(button).toHaveProperty('onClick');
        });

        it('should render the dialog with an IconButton component if theres no button text', () => {
            const dialog = makeDialog('Hello Dialog');

            const renderResult = dialog.render();

            expect(renderResult).toMatchObject({
                type: 'div',
                isVisible: true,
            });
            const [content, button] = renderResult.children;
            expect(content).toBe('Hello Dialog');
            expect(button).toHaveProperty('onClick');
        });

        it('should change the dialog visibility when clicking the button', () => {
            const dialog = makeDialog('Hello Dialog');

            const [, button] = dialog.render().children;

            button.onClick();
            expect(dialog.render()).toMatchObject({
                isVisible: false,
            });
        });
    });
});
