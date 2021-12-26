import {
    IMAGE_DOMAIN,
    IProduct,
    IProductDatabase,
} from './ProductAdapter.interfaces';

export class ProductAdapter {
    public static fromProductToDatabase(product: IProduct): IProductDatabase {
        return {
            name: product.name,
            quantity: product.quantity,
            unit_price: product.totalPrice / product.quantity,
            description: product.description,
            image: product.image_url.replace(IMAGE_DOMAIN, ''),
        };
    }

    public static fromDatabaseToProduct(product: IProductDatabase): IProduct {
        return {
            name: product.name,
            quantity: product.quantity,
            totalPrice: product.unit_price * product.quantity,
            description: product.description,
            image_url: `${IMAGE_DOMAIN}${product.image}`,
        };
    }
}
