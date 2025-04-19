import api from './axiosConfig';

export const fetchCategories = async () => {
    try {
        const response = await api.get("/categories/");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error); // أثناء التطوير
        throw new Error(`Failed to fetch categories: ${error.message}`);
    }
};