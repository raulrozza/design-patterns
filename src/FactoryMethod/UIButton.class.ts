import { UIButton } from './UIButton.interfaces';

export class Button implements UIButton {
    child: string;

    constructor(message: string, public onClick: () => void) {
        this.child = message;
    }
}

export class IconButton implements UIButton {
    child: string;

    constructor(iconURL: string, public onClick: () => void) {
        this.child = iconURL;
    }
}

export default class DialogComponent {
    private isVisible: boolean;
    private okButton: UIButton;

    constructor(private content: string, buttonText?: string) {
        this.isVisible = true;

        this.okButton = buttonText
            ? new Button(buttonText, this.closeDialog.bind(this))
            : new IconButton('/images/ok.png', this.closeDialog.bind(this));
    }

    private closeDialog() {
        this.isVisible = false;
    }

    public render(): {
        type: string;
        isVisible: boolean;
        children: Array<any>;
    } {
        return {
            type: 'div',
            isVisible: this.isVisible,
            children: [this.content, this.okButton],
        };
    }
}
