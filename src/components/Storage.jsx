import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Storage = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  const handleCreateStorageClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/form");
    }
  };

  useEffect(() => {
    const fetchForms = async () => {
      if (!user || !user.user.id) {
        console.error("User or user.id is not defined");
        return;
      }

      try {
        const token = user ? `Bearer ${user.token}` : "";
        const response = await fetch(`https://lastorage-server.vercel.app/form/${user.user.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched forms:", data); // Debugging log
          setForms(data);
          checkExpirationDates(data);
        } else {
          const errorData = await response.json();
          console.error("Failed to fetch forms:", errorData.message || errorData);
        }
      } catch (error) {
        console.error("Error fetching forms:", error.message || error);
      }
    };

    if (user) {
      fetchForms();
    }
  }, [user]);

  const handleDelete = async (id) => {
    try {
      const token = user ? `Bearer ${user.token}` : "";
      const response = await fetch(`https://lastorage-server.vercel.app/form/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (response.ok) {
        setForms(forms.filter((form) => form.id !== id));
        console.log("Delete Successful");
      } else {
        console.error("Failed to delete form");
      }
    } catch (error) {
      console.error("Error deleting form:", error.message || error);
    }
  };

  const checkExpirationDates = (forms) => {
    const today = new Date();
    console.log("Checking expiration dates for forms:", forms); // Debugging log
    forms.forEach((form) => {
      const expirationDate = new Date(form.tanggal_kadaluarsa);
      const diffDays = (expirationDate - today) / (1000 * 60 * 60 * 24);
      console.log(`Form ${form.nama_makanan} expires in ${Math.ceil(diffDays)} days`); // Debugging log
      if (diffDays <= 7) {
        toast.warning(
          <div className="flex items-center">
            <div className="mr-2">
              <i className="fas fa-exclamation-triangle text-yellow-500"></i>
            </div>
            <div>
              <strong>{form.nama_makanan}</strong> akan kadaluarsa dalam {Math.ceil(diffDays)} hari!
            </div>
          </div>,
          {
            className: "bg-white text-black rounded-lg shadow-md p-4",
          }
        );
      }
    });
  };

  return (
    <section className="h-full relative p-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        className="w-full max-w-xs"
      />
      <div>
        <div className="card-actions absolute right-0 top-0 p-2">
          <button
            onClick={handleCreateStorageClick}
            className="bg-gray-300 rounded-md p-2 border border-black"
          >
            Create Storage
          </button>
        </div>
      </div>

      {forms.length > 0 && (
        <div className="grid grid-cols-3 items-center justify-center mx-auto my-10 gap-5 w-fit">
          {forms.map((form) => (
            <div key={form.id} className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{form.nama_makanan}</h2>

                <p>Jumlah: {form.jumlah}</p>
                <p>Tanggal Kadaluarsa: {form.tanggal_kadaluarsa}</p>
                <p>Tanggal Dibuat/Dibeli: {form.tanggal_dibuat}</p>
                <p>Tempat Penyimpanan: {form.tempat_penyimpanan}</p>
              </div>
              <div className="flex justify-end p-3 gap-2">
                <a href={`/${form.id}/update`} className="w-fit p-2 rounded-md border-black bg-gray-400">
                  Update
                </a>
                <button
                  className="w-fit p-2 rounded-md border-black bg-red-500"
                  onClick={() => handleDelete(form.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Storage;
