import React from "react";

const CardFaq = () => {
  return (
    <section id='faq' className="py-10 px-4 sm:px-8 lg:px-16 bg-slate-200">
      <div className="bg-transparent h-full rounded-none max-w-screen-lg mx-auto">
        <div className="collapse collapse-arrow bg-white rounded-t-lg">
          <input type="radio" name="my-accordion-2" id="faq1" defaultChecked />
          <label htmlFor="faq1" className="collapse-title text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600 cursor-pointer">
            Apa itu La Storage?
          </label>  
          <div className="collapse-content text-base sm:text-lg lg:text-xl text-gray-600">
            <p>
              La Storage adalah sebuah website yang dapat membantu kamu untuk mencatat makan frozen food yang ada di tempat penyimpanan kalian.
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
              Web ini dapat memberikan kamu pemberitahuan jika makanan kamu sudah seminggu lagi kadaluarsa, jika kamu sudah membuat storage, kamu dapat langsung menekan MyStorage dan melihat pemberitahuannya disana.
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
              Pastikan kamu sudah melakukan signup bagi kamu yang belum membuat akun, jika sudah membuat akun kalian hanya perlu login dan klik tombol create storage dan input data-data yang ada disana.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white rounded-b-lg">
          <input type="radio" name="my-accordion-2" id="faq4" />
          <label htmlFor="faq4" className="collapse-title text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600 cursor-pointer">
            Kenapa website ini sangat berguna?
          </label>
          <div className="collapse-content text-base sm:text-lg lg:text-xl text-gray-600">
            <p>
              Karena kamu dapat mencatat semua stock dari Frozen Food yang kamu punya, dan kamu dapat mengaksesnya dimana saja dan kapanpun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardFaq;
