import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                if (res.status === 200) {
                    setData(res.data);
                } else {
                    throw new Error("Failed to fetch products");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            padding: "20px"
        }}>
            {data.map((item) => (
                <div key={item.id} style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    width: "250px",
                    textAlign: "center",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}>
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "contain"
                        }} 
                    />
                    <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{item.title}</h3>
                    <p style={{ fontWeight: "bold" }}>${item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default FetchData;
