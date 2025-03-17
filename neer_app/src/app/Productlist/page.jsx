import "../Productlist/Product.css"
import Products from "./Product"

async function Fetchget(){
    let datas = await fetch("https://dummyjson.com/products");
    datas = await datas.json();
    return datas.products
}

export default async function Product() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch("https://dummyjson.com/products");
    //             const data = await res.json();
    //             setData(data.products); 
    //             console.log("data", data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();

    // }, []);
    const data = await Fetchget();

    return (
        <div className="main-container">
            <h1>Products</h1>
            <ul className="items">
                {
                    data.map((curElem) => {
                        const { category, price, rating, stock, brand, weight, title, description, id , images,dimensions} = curElem;
                        return (
                            <li key={id} className="listed">
                                <div className="images">
                                    <img src={images}/>
                                </div>
                                {/* <h2>Name: {title}</h2> */}
                                <p>Category: {category}</p>
                                <p>Price: ${price}</p>
                                <p>Rating: {rating}</p>
                                <p>Stock: {stock}</p>
                                <p>Brand: {brand}</p>
                                <p>Weight: {weight}kg</p>
                                {/* <p>Description: {description}</p> */}
                                <p>Dimensipon: {dimensions.width}</p>
                                {/* <button>Click</button> */}
                                    <Products price={curElem.price}/>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
