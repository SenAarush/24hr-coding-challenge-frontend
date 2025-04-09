import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import ProductForm from "./ProductForm";
import { useProducts } from "../hooks/useProducts";

const Navbar = () => {
  const { logout } = useAuth();
  const token = localStorage.getItem('token')
  const { addProduct } = useProducts(token);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(open)
  }, [open])

  return (
    <>
      <nav className="w-full text-white flex justify-end gap-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
          onClick={() => {
            // Navigate to add product page – optional, implement in your router
            console.log("Navigate to add product");
            setOpen(true)
          }}
        >
          Add a new product
        </button>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          Logout
        </button>
      </nav>
      {open && (
        <ProductForm
          onClose={() => setOpen(false)}
          onSubmit={addProduct}
        />
      )}
    </>
  );
};

export default Navbar;
