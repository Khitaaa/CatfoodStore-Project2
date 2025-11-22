import React from "react";
import { Link } from "react-router-dom";

const breeds = [
  {
    name: "เปอร์เซีย",
    image: "/catfood/breeds/persian.webp",
    filter: "เปอร์เซีย",
  },
  {
    name: "บริติชช็อตแฮร์",
    image: "/catfood/breeds/british.webp",
    filter: "บริติชช็อตแฮร์",
  },
  {
    name: "เมนคูน",
    image: "/catfood/breeds/mainecoon.webp",
    filter: "เมนคูน",
  },
  {
    name: "สยาม",
    image: "/catfood/breeds/siamese.webp",
    filter: "สยาม",
  },
  {
    name: "แร็กดอลล์ (Ragdoll)",
    image: "/catfood/breeds/ragdoll.webp",
    filter: "ragdoll",
  },
  {
    name: "ทุกสายพันธุ์",
    image: "/catfood/breeds/all.webp",
    filter: "all",
  },
];

export default function BreedsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        เลือกสูตรอาหารตามสายพันธุ์แมว
      </h1>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        อาหารแมว Royal Canin ถูกออกแบบให้เหมาะกับแต่ละสายพันธุ์ 
        เพื่อสุขภาพที่ดีที่สุดของน้องแมวของคุณ ❤️
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {breeds.map((breed) => (
          <Link
            key={breed.name}
            to={`/products?breed=${breed.filter}`}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition transform"
          >
            <img
              src={breed.image}
              alt={breed.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="font-semibold text-lg text-gray-800">
                {breed.name}
              </h3>

              <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                ดูสูตรอาหาร
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
