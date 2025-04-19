import api from './axiosConfig';

export const fetchProducts = async () => {
    try {
        const response = await api.get("/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error(`Failed to fetch products: ${error.message}`);
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error(`Failed to fetch products: ${error.message}`);
    }
};