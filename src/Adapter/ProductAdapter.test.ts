import { ProductAdapter } from './ProductAdapter.class';
import faker from 'faker';
import {
    adaptDatabaseToProduct,
    adaptProductToDatabase,
} from './ProductAdapter.function';

describe('ProductAdapter', () => {
    describe('Class implementation', () => {
        it('should adapt the product in the correct format for the database, and then back from it', () => {
            const product = {
                name: faker.commerce.productName(),
                quantity: 4,
                totalPrice: 20,
                description: faker.lorem.paragraph(),
                image_url: 'http://localhost:3000/images/product.jpg',
            };

            const databaseProduct =
                ProductAdapter.fromProductToDatabase(product);

            expect(databaseProduct).toEqual({
                name: product.name,
                quantity: product.quantity,
                unit_price: 5,
                description: product.description,
                image: 'product.jpg',
            });

            const productFromDatabase =
                ProductAdapter.fromDatabaseToProduct(databaseProduct);

            expect(productFromDatabase).toEqual(product);
        });
    });

    describe('Function implementation', () => {
        it('should adapt the product in the correct format for the database, and then back from it', () => {
            const product = {
                name: faker.commerce.productName(),
                quantity: 4,
                totalPrice: 20,
                description: faker.lorem.paragraph(),
                image_url: 'http://localhost:3000/images/product.jpg',
            };

            const databaseProduct = adaptProductToDatabase(product);

            expect(databaseProduct).toEqual({
                name: product.name,
                quantity: product.quantity,
                unit_price: 5,
                description: product.description,
                image: 'product.jpg',
            });

            const productFromDatabase = adaptDatabaseToProduct(databaseProduct);

            expect(productFromDatabase).toEqual(product);
        });
    });
});
