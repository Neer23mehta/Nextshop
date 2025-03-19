import Products from "./Product"

async function Fetchget() {
    let datas = await fetch("https://dummyjson.com/products");
    datas = await datas.json();
    return datas.products;
}

export default async function Product() {
    const data = await Fetchget();

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-center mb-8">Products</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    data.map((curElem) => {
                        const { category, price, rating, stock, brand, weight, title, description, id, images, dimensions } = curElem;
                        return (
                            <li key={id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                <div className="w-full h-56 mb-4">
                                    <img src={images[0]} alt={title} className="w-full h-full object-cover rounded-md" />
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                                <p className="text-gray-700 mb-2">Category: {category}</p>
                                <p className="text-gray-700 mb-2">Price: ${price}</p>
                                <p className="text-gray-700 mb-2">Rating: {rating}</p>
                                <p className="text-gray-700 mb-2">Stock: {stock}</p>
                                <p className="text-gray-700 mb-2">Brand: {brand}</p>
                                <p className="text-gray-700 mb-2">Weight: {weight} kg</p>
                                <p className="text-gray-700 mb-4">Dimension: {dimensions.width} x {dimensions.height} x {dimensions.length} cm</p>
                                <Products price={price} />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
