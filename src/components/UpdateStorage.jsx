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
    <div>
      <h2>Update Storage</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Makanan:</label>
          <input
            type="text"
            name="nama_makanan"
            value={form.nama_makanan}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tanggal Dibuat:</label>
          <input
            type="date"
            name="tanggal_dibuat"
            value={form.tanggal_dibuat}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tanggal Kadaluarsa:</label>
          <input
            type="date"
            name="tanggal_kadaluarsa"
            value={form.tanggal_kadaluarsa}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Jumlah:</label>
          <input
            type="number"
            name="jumlah"
            value={form.jumlah}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tempat Penyimpanan:</label>
          <input
            type="text"
            name="tempat_penyimpanan"
            value={form.tempat_penyimpanan}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Storage</button>
      </form>
    </div>
  );
};

export default UpdateStorage;
