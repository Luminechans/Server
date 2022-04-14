// export const saveCart  = async (id) => {
//     const response = await axiosInstance.post('/api/carts',data);
//     return response;
// }
import axiosInstance from '../../utils/axios';
import constants from '../../utils/constants';

export const getProducts = async () =>{
    const res = axiosInstance.get(constants.API_PRODUCTS);
    return res;
}

export const getProductById = async (id) =>{
    const res = axiosInstance.get(`/api/products/${id}/detail`);
    return res;
}