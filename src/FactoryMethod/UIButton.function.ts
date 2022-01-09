import { UIButton } from './UIButton.interfaces';

export const makeButton = (message: string, onClick: () => void): UIButton => ({
    child: message,
    onClick,
});

export const makeIconButton = (
    iconURL: string,
    onClick: () => void,
): UIButton => ({
    child: iconURL,
    onClick,
});

export default function makeDialog(content: string, buttonText?: string) {
    const state = {
        isVisible: true,
    };
    const closeDialog = () => {
        state.isVisible = false;
    };

    const okButton = buttonText
        ? makeButton(buttonText, closeDialog)
        : makeIconButton('/images/ok.png', closeDialog);

    return {
        render: (): {
            type: string;
            isVisible: boolean;
            children: Array<any>;
        } => ({
            type: 'div',
            isVisible: state.isVisible,
            children: [content, okButton],
        }),
    };
}
