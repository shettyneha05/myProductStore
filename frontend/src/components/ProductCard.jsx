import { CiEdit } from "react-icons/ci";
import { TbHttpDelete } from "react-icons/tb";

const ProductCard = ({ product, onDelete, onEdit, deleteTitle = "Delete" }) => (
  <div className="bg-black text-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-stretch min-h-[340px] group relative">
    <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover object-center rounded-t-2xl transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
    <div className="flex-1 flex flex-col justify-end p-4 pb-2 relative">
      <h2 className="text-base md:text-lg font-bold mb-2 text-white text-center truncate">{product.name}</h2>
      <p className="text-lg md:text-xl text-indigo-400 font-semibold text-center mb-2 break-words">${product.price}</p>
      {/* Responsive icon buttons at bottom right */}
      <div className="flex justify-end gap-2 mt-1">
        <button
          onClick={onEdit}
          className="p-2 md:p-2.5 rounded-full bg-white/80 hover:bg-indigo-200 text-black hover:text-indigo-700 transition-colors shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
          title="Edit"
          type="button"
        >
          <CiEdit size={20} className="md:w-6 md:h-6 w-5 h-5" />
        </button>
        <button
          onClick={onDelete}
          className="p-2 md:p-2.5 rounded-full bg-white/80 hover:bg-red-200 text-black hover:text-red-700 transition-colors shadow focus:outline-none focus:ring-2 focus:ring-red-400"
          title={deleteTitle}
          type="button"
        >
          <TbHttpDelete size={20} className="md:w-6 md:h-6 w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;

