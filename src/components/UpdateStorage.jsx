import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateStorage = ({ id }) => {
  const [form, setForm] = useState({
    nama_makanan: "",
    tanggal_dibuat: "",
    tanggal_kadaluarsa: "",
    jumlah: "",
    tempat_penyimpanan: "",
  });

  useEffect(() => {
    // Fetch the existing data for the given ID
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lastorage-server.vercel.app/form/${id}`
        );
        setForm(response.data);
      } catch (error) {
        console.error("Error fetching storage data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  console.log(id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `https://lastorage-server.vercel.app/form/${id}`,
        form
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error updating storage:", error);
      alert("Error updating storage");
    }
  };

  return (
    <section className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Update Storage</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nama Makanan:</label>
          <input
            type="text"
            name="nama_makanan"
            value={form.nama_makanan}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tanggal Dibuat:</label>
          <input
            type="date"
            name="tanggal_dibuat"
            value={form.tanggal_dibuat}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tanggal Kadaluarsa:</label>
          <input
            type="date"
            name="tanggal_kadaluarsa"
            value={form.tanggal_kadaluarsa}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Jumlah:</label>
          <input
            type="text"
            name="jumlah"
            value={form.jumlah}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tempat Penyimpanan:</label>
          <select
            name="tempat_penyimpanan"
            value={form.tempat_penyimpanan}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          >
            <option value="">Pilih Tempat Penyimpanan</option>
            <option value="Kulkas">Kulkas</option>
            <option value="Freezer">Freezer</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update Storage
        </button>
      </form>
    </section>
  );
};

export default UpdateStorage;
