import React, { useState } from "react";
import Cart from "./components/Cart";

export const UserContext = React.createContext();

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description: "Your perfect pack for everyday use and walks in the forest Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 109.95,
      discountPercentage: 5.96,
      rating: "5.0",
      stock: 94,
      brand: "kenny",
      category: "Backpacks",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      image:
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      price: 22.3,
      discountPercentage: 0,
      rating: "4.0",
      stock: 34,
      brand: "Allen Solly",
      category: "men's clothing",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail. jpg",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    
      
    {
      id: 3,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: "4.0",
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      image:
        "https://i.pinimg.com/564x/2f/d9/90/2fd990d4805f640bae3572ec8ea43a94.jpg",
    },
    {
      id: 4,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: "5.0",
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      image:
        "https://i.pinimg.com/564x/da/c5/9f/dac59f48a77524ada600c068c0d273de.jpg",
    },
    {
      id: 5,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      price: 49,
      discountPercentage: 0,
      rating: "4.0",
      stock: 32,
      brand: "Huawei",
      category: "Electronics",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail. jpg",
      image:
        "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
  ]);

  return (
    <>
      <UserContext.Provider value={{ product, setProduct }}>
        <div className="container my-5">
          <Cart />
        </div>
      </UserContext.Provider>
    </>
  );
}
export default App;