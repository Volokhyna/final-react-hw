import {ProductService} from "./product-service";
import {httpClient} from "./http-client";

export const services = {
    productService: new ProductService(httpClient),
};

export const useServices = () => {
    return services;
};
