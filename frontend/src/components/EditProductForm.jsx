import { useState } from "react";

const EditProductForm = ({ product, onUpdate, onCancel }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...product, name, price, image });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Update Product</h2>
      <input
        className="rounded px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        className="rounded px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
        min="0"
        step="0.01"
        required
      />
      <input
        className="rounded px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="Image URL"
        required
      />
      <div className="flex flex-col sm:flex-row justify-end gap-2 mt-2">
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded transition-colors w-full sm:w-auto"
        >
          Update
        </button>
        <button
          type="button"
          className="text-gray-600 dark:text-gray-300 hover:underline px-4 py-2 w-full sm:w-auto"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
