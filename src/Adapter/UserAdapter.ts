/**
 * This represents a project where the app's code uses the user interface declared at the top, but the database has a different interface.
 * This adapter allows the code to use the database's interface and not have to change.
 */

interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    avatar?: string;
}

interface IUserDatabase {
    first_name: string;
    last_name: string;
    email: string;
    image: string | null;
}

// Class implementation
export class UserAdapter implements IUser {
    public firstname: string;
    public lastname: string;
    public email: string;
    public avatar?: string;

    constructor({ first_name, last_name, email, image }: IUserDatabase) {
        this.firstname = first_name;
        this.lastname = last_name;
        this.email = email;
        this.avatar = image || undefined;
    }
}

// Function implementation
export const adaptUserData = ({
    first_name,
    last_name,
    email,
    image,
}: IUserDatabase): IUser => ({
    firstname: first_name,
    lastname: last_name,
    email,
    avatar: image || undefined,
});
