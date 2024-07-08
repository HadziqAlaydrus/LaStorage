import React from "react";

const CardFaq = () => {
  return (
    <section id='faq' className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-600">
      <div className="bg-transparent h-full rounded-none max-w-screen-lg mx-auto">
        <div className="collapse collapse-arrow bg-white rounded-t-lg">
          <input type="radio" name="my-accordion-2" id="faq1" defaultChecked />
          <label htmlFor="faq1" className="collapse-title text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600 cursor-pointer">
            Apa itu La Storage?
          </label>
          <div className="collapse-content text-base sm:text-lg lg:text-xl text-gray-600">
            <p>
              EcoQuest adalah aplikasi yang didedikasikan untuk mempromosikan
              praktik berkelanjutan dan kesadaran lingkungan. Platform ini
              menyediakan ruang kerja kolaboratif bagi pengguna untuk menangani
              dan memecahkan masalah lingkungan di dunia nyata.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" id="faq2" />
          <label htmlFor="faq2" className="collapse-title text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600 cursor-pointer">
            Bagaimana cara kerja La Storage?
          </label>
          <div className="collapse-content text-base sm:text-lg lg:text-xl text-gray-600">
            <p>
              Bank sampah di EcoQuest memungkinkan pengguna untuk mengumpulkan
              dan mengelola sampah secara bertanggung jawab. Pengguna dapat
              menyetor sampah yang dapat didaur ulang dan memperoleh poin yang
              dapat ditukar dengan berbagai hadiah atau manfaat.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white rounded-b-lg">
          <input type="radio" name="my-accordion-2" id="faq3" />
          <label htmlFor="faq3" className="collapse-title text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600 cursor-pointer">
            Bagaimana cara membuat storage untuk frozen food ?
          </label>
          <div className="collapse-content text-base sm:text-lg lg:text-xl text-gray-600">
            <p>
              Tidak, Anda tidak perlu mendaftar untuk menggunakan EcoQuest.
              Cukup isi formulir yang disediakan di situs web kami dengan
              informasi yang diperlukan, dan tim EcoQuest akan menghubungi Anda
              untuk konfirmasi.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white rounded-b-lg">
          <input type="radio" name="my-accordion-2" id="faq3" />
          <label htmlFor="faq3" className="collapse-title text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600 cursor-pointer">
            Kenapa website ini sangat berguna?
          </label>
          <div className="collapse-content text-base sm:text-lg lg:text-xl text-gray-600">
            <p>
              Tidak, Anda tidak perlu mendaftar untuk menggunakan EcoQuest.
              Cukup isi formulir yang disediakan di situs web kami dengan
              informasi yang diperlukan, dan tim EcoQuest akan menghubungi Anda
              untuk konfirmasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardFaq;
