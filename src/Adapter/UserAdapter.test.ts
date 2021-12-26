import { UserAdapter, adaptUserData } from './UserAdapter';
import faker from 'faker';

describe('UserAdapter', () => {
    describe('Class implementation', () => {
        it('should adapt the user correctly, containing all the fields', () => {
            const databaseUser = {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                image: faker.internet.avatar(),
            };

            const user = new UserAdapter(databaseUser);

            expect(user).toEqual({
                firstname: databaseUser.first_name,
                lastname: databaseUser.last_name,
                email: databaseUser.email,
                avatar: databaseUser.image,
            });
        });

        it('should adapt a null image as an undefined avatar', () => {
            const databaseUser = {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                image: null,
            };

            const user = new UserAdapter(databaseUser);

            expect(user).toEqual({
                firstname: databaseUser.first_name,
                lastname: databaseUser.last_name,
                email: databaseUser.email,
                avatar: undefined,
            });
        });
    });

    describe('Function implementation', () => {
        it('should adapt the user correctly, containing all the fields', () => {
            const databaseUser = {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                image: faker.internet.avatar(),
            };

            const user = adaptUserData(databaseUser);

            expect(user).toEqual({
                firstname: databaseUser.first_name,
                lastname: databaseUser.last_name,
                email: databaseUser.email,
                avatar: databaseUser.image,
            });
        });

        it('should adapt a null image as an undefined avatar', () => {
            const databaseUser = {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                image: null,
            };

            const user = adaptUserData(databaseUser);

            expect(user).toEqual({
                firstname: databaseUser.first_name,
                lastname: databaseUser.last_name,
                email: databaseUser.email,
                avatar: undefined,
            });
        });
    });
});
