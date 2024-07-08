import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

const FormStorage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ // Menggunakan user.id dari konteks
    nama_makanan: "",
    tanggal_dibuat: "",
    tanggal_kadaluarsa: "",
    jumlah: "",
    tempat_penyimpanan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = user ? `Bearer ${user.token}` : ""; // Mengambil token dari konteks
      const response = await fetch("https://lastorage-server.vercel.app/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form successfully submitted:", result);
        navigate("/storage");
      } else {
        const errorData = await response.json();
        console.error("Failed to submit form:", errorData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">
          Form Storage
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Makanan</label>
            <input
              type="text"
              id="nama_makanan"
              name="nama_makanan"
              value={formData.nama_makanan}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tanggal Dibuat/Dibeli</label>
            <input
              type="date"
              id="tanggal_dibuat"
              name="tanggal_dibuat"
              value={formData.tanggal_dibuat}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tanggal Kadaluarsa</label>
            <input
              type="date"
              id="tanggal_kadaluarsa"
              name="tanggal_kadaluarsa"
              value={formData.tanggal_kadaluarsa}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Jumlah</label>
            <input
              type="text"
              id="jumlah"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Tempat Penyimpanan</label>
            <select
              id="tempat_penyimpanan"
              name="tempat_penyimpanan"
              value={formData.tempat_penyimpanan}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Pilih Tempat Penyimpanan</option>
              <option value="Kulkas">Kulkas</option>
              <option value="Freezer">Freezer</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormStorage;
