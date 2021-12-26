/**
 * This is a two-way adapter. It allows the app's code to use the database's interface and not have to change, but also allows the database to use the app's interface as well.
 * It emulates a situation where both the codebase and the database exchange data, such as when creating a new product, or retrieving it from the database.
 * Different from the UserAdapter approach, this one allows for many different interfaces to be accessed from the same adapter (almost like a factory method) if needed.
 */

// The product comes with the total purchase price, but the user interface only needs the price per unit.
// It also uses the whole image url, but the user interface only needs the image's name.
export interface IProduct {
    name: string;
    quantity: number;
    totalPrice: number;
    description: string;
    image_url: string;
}

export interface IProductDatabase {
    name: string;
    unit_price: number;
    quantity: number;
    description: string;
    image: string | null;
}

export const IMAGE_DOMAIN = 'http://localhost:3000/images/';
