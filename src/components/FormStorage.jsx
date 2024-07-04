import React from 'react';

const FormStorage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">Form Storage</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Makanan:</label>
            <input
              type="text"
              id="namaMakanan"
              name="namaMakanan"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-700">Jenis Makanan:</label>
            <input
              type="text"
              id="jenisMakanan"
              name="jenisMakanan"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tanggal Dibuat/Dibeli:</label>
            <input
              type="date"
              id="tanggalDibuat"
              name="tanggalDibuat"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-700">Tanggal Kadaluarsa:</label>
            <input
              type="date"
              id="tanggalKadaluarsa"
              name="tanggalKadaluarsa"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Tempat Penyimpanan:</label>
            <select
              id="tempatPenyimpanan"
              name="tempatPenyimpanan"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="Kulkas">Kulkas</option>
              <option value="Freezer">Freezer</option>
            </select>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormStorage;
