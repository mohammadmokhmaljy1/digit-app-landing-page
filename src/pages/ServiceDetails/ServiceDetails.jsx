import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "./../../services/productsServices";

const ServiceDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const getProductDetails = async () => {
            try{
                const data = await fetchProductById(id);
                setProduct(data);
                setMainImage(data.images[0]?.image);
            }
            catch(error){
                console.log(error);
            }
        }

        getProductDetails();
    }, [id]);

    if (!product) {
        return <p className="text-center text-gray-500">جاري تحميل البيانات...</p>;
    }

    return (
        <div className="container min-h-screen mx-auto p-6 pt-25">
            <h1 className="text-2xl font-bold text-red-600">{product.name}</h1>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                    <img src={mainImage} alt="Main Product" className="w-full rounded-lg aspect-video" />
                    <div className="flex gap-2 mt-4">
                        {product.images.map((img) => (
                            <img 
                                key={img.id} 
                                src={img.image} 
                                alt={`Thumbnail ${img.id}`} 
                                className="w-24 aspect-video rounded cursor-pointer hover:border transition-all duration-200"
                                onClick={() => setMainImage(img.image)}
                            />
                        ))}
                    </div>
                </div>

                <div className="bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-xl font-semibold">التفاصيل:</h2>
                    <div className="mt-4 space-y-2">
                        <p><strong>الآلة:</strong> {product.name}</p>
                        <p><strong>السنة:</strong> {product.relesed_date}</p>
                        <p><strong>السعر:</strong>{product.price} ر.س</p>
                        {/* <p><strong>Serial Number:</strong> {product.serialNumber}</p> */}
                        <p><strong>ساعات العمل:</strong> {product.working_hours} ساعة</p>
                        <p><strong>الفئة:</strong> {product.category?.name}</p>
                        <p><strong>متوفر منها:</strong> {product.stock} قطع</p>
                        <p><strong></strong> {product.description}</p>
                    </div>
                    <button className="mt-6 w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
                        طلب المعدة
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;