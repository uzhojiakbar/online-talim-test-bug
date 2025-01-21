import React from "react";

function Certificate() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Sersifikatni yuklab olish
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Sizning muvaffaqiyatli tugallangan kursingiz uchun sersifikat tayyor.
        </p>
        <div className="flex justify-center">
          <a
            href="/certificat.pdf"
            download
            className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600 transition duration-300">
            Sersifikatni yuklab olish
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificate;

