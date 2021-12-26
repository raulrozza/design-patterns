import {
    IMAGE_DOMAIN,
    IProduct,
    IProductDatabase,
} from './ProductAdapter.interfaces';

export const adaptProductToDatabase = (
    product: IProduct,
): IProductDatabase => ({
    name: product.name,
    quantity: product.quantity,
    unit_price: product.totalPrice / product.quantity,
    description: product.description,
    image: product.image_url.replace(IMAGE_DOMAIN, ''),
});

export const adaptDatabaseToProduct = (
    product: IProductDatabase,
): IProduct => ({
    name: product.name,
    quantity: product.quantity,
    totalPrice: product.unit_price * product.quantity,
    description: product.description,
    image_url: `${IMAGE_DOMAIN}${product.image}`,
});
