import { useState } from "react";
import vihcle2 from "./../../assets/images/vihcle-2.jpg";
import vihcle3 from "./../../assets/images/service-bg.jpg";
import vihcle4 from "./../../assets/images/vihcle-4.jpg";

const ServiceDetails = () => {
    const product = {
        title: "سيارة 773E للبيع",
        images: [vihcle2, vihcle3, vihcle4],
        machine: "Rigid Truck",
        year: 2013,
        price: 15000,
        serialNumber: "CAT 773E",
        hours: 17000
    };

    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
        <div className="container min-h-screen mx-auto p-6 pt-25">
            <h1 className="text-2xl font-bold text-red-600">{product.title}</h1>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                    <img src={mainImage} alt="Main Product" className="w-full rounded-lg aspect-video" />
                    <div className="flex gap-2 mt-4">
                        {product.images.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt={`Thumbnail ${index}`} 
                                className="w-24 aspect-video rounded cursor-pointer hover:border transition-all duration-200"
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>

                <div className="bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-xl font-semibold">Overview</h2>
                    <div className="mt-4 space-y-2">
                        <p><strong>Machine:</strong> {product.machine}</p>
                        <p><strong>Year:</strong> {product.year}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Serial Number:</strong> {product.serialNumber}</p>
                        <p><strong>Hours:</strong> {product.hours}</p>
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