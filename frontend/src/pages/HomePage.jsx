import { useState, useEffect } from "react";
import Modal from "../components/Modal.jsx";
import EditProductForm from "../components/EditProductForm.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { useProductStore } from "../store/product.js";

function HomePage() {
  const { fetchProducts, products, deleteProduct, updateProduct } = useProductStore();

  // State to control modal visibility and selected product to edit
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open the edit modal for a specific product
  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  // Close the modal and reset selected product state
  const closeModal = () => {
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle deleting product
  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    const { success, message } = await deleteProduct(id);
    if (success) {
      console.log("Product deleted successfully:", message);
    } else {
      console.error("Failed to delete product:", message);
      alert(`Delete failed: ${message}`);
    }
  };

  // Handle updating a product from the edit form modal
  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const { success, message } = await updateProduct(updatedProduct._id, updatedProduct);
      if (success) {
        console.log("Product updated successfully:", message);
        closeModal();
      } else {
        alert(`Update failed: ${message}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-700 to-pink-500 mb-8 mt-4 text-center">
        Current Products <span role="img" aria-label="rocket">🚀</span>
      </h1>

      {products.length === 0 ? (
        <p className="text-xl text-gray-500 font-medium mb-1 text-center">
          No products found <span role="img" aria-label="sad">😕</span>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onDelete={() => handleDeleteProduct(product._id)}
              onEdit={() => openEditModal(product)}
              deleteTitle="Delete"
            />
          ))}
        </div>
      )}

      {/* Modal for editing product */}
      <Modal isOpen={isEditModalOpen} onClose={closeModal}>
        {selectedProduct && (
          <EditProductForm
            product={selectedProduct}
            onUpdate={handleUpdateProduct}
            onCancel={closeModal}
          />
        )}
      </Modal>
    </div>
  );
}

export default HomePage;
