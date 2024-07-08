import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthContext";

const Storage = () => {
  const { user } = useContext(AuthContext);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      if (!user || !user) {
        console.error("User or user.id is not defined");
        return;
      }

      try {
        const token = user ? `Bearer ${user.token}` : "";
        const response = await fetch(
          `http://localhost:3000/form/${user.user.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setForms(data);
        } else {
          const errorData = await response.json();
          console.error(
            "Failed to fetch forms:",
            errorData.message || errorData
          );
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
      const response = await fetch(`http://localhost:3000/form/${id}`, {
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

  return (
    <section className="h-full relative p-10">
      <div>
        <div className="card-actions  absolute right-0 top-0 p-2  ">
          <a href="/form" className="bg-gray-300  rounded-md p-2 border border-2 border-black">
            Create Storage
          </a>
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
                <p>Tanggal Dibuat/Dibeli : {form.tanggal_dibuat}</p>
                <p>Tempat Penyimpanan : {form.tempat_penyimpanan}</p>
              </div>
              <div className="flex justify-end p-3 gap-2">
                <button className="w-fit p-2 rounded-md border-black bg-gray-400">Update</button>
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
