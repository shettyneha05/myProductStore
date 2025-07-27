// src/pages/CreateProduct.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useProductStore } from "../store/product";

function CreatePage() {
  const [newproduct, setnewProduct] = useState({ name: "", price: "", image: "" });

  const {createProduct}=useProductStore();


  const handleSubmit = async(e) => {
    e.preventDefault();
    const {success,message} = await createProduct(newproduct);

    // TODO: Add submission logic
    console.log(success,message);

    if(success) {
      // Reset form fields
      setnewProduct({ name: "", price: "", image: "" });
      //alert("Product created successfully!");
    }
  };

  return (
    <>
      {/* Navbar is shared across pages */}
      {/* <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> */}

      <div className="px-4 mt-6 sm:mt-10 mb-10 flex justify-center">
  <form
    onSubmit={handleSubmit}
    className="
      w-full max-w-lg sm:max-w-md
      rounded-2xl shadow-2xl
      p-6 sm:p-8
      bg-white/90 dark:bg-gradient-to-bl dark:from-gray-800 dark:via-gray-900 dark:to-black
      backdrop-blur-md transition-all duration-300
      flex flex-col space-y-5
    "
  >
    <h2
      className="text-2xl sm:text-3xl font-extrabold text-center
      text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400"
    >
      Create Product
    </h2>

    {/* Product Name */}
    <input
      type="text"
      placeholder="Product Name"
      value={newproduct.name}
      onChange={(e) => setnewProduct({ ...newproduct, name: e.target.value })}
      className="
        w-full px-4 py-3 rounded-lg border
        border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-900
        text-gray-800 dark:text-gray-100
        placeholder-gray-400 dark:placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-pink-400
        transition
      "
      required
    />

    {/* Product Price */}
    <input
      type="number"
      placeholder="Product Price"
      value={newproduct.price}
      onChange={(e) => setnewProduct({ ...newproduct, price: e.target.value })}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                 bg-white dark:bg-gray-900
                 text-gray-800 dark:text-gray-100
                 placeholder-gray-400 dark:placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      required
    />

    {/* Product Image URL */}
    <input
      type="text"
      placeholder="Product Image URL"
      value={newproduct.image}
      onChange={(e) => setnewProduct({ ...newproduct, image: e.target.value })}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                 bg-white dark:bg-gray-900
                 text-gray-800 dark:text-gray-100
                 placeholder-gray-400 dark:placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      required
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 rounded-lg font-bold text-white
                 bg-gradient-to-r from-pink-500 to-orange-400
                 hover:from-pink-600 hover:to-yellow-400
                 transition-all duration-200 shadow-lg"
    >
      Create Product
    </button>
  </form>
</div>

    </>
  );
}

export default CreatePage;

