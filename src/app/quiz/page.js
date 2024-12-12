import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Link href="./previousPage">
          <button className="p-2">
            <img
              src="/Assets/Images/Back_button.png"
              alt="Back Button"
              className="w-12 h-12"
            />
          </button>
        </Link>
      </div>

      {/* Centered Content */}
      <div className="flex flex-grow justify-center items-center">
        <div className="grid gap-4 max-w-4xl w-full px-4">
          {/* First Row - Three Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 flex justify-center items-center rounded shadow-md">
              Option 1
            </div>
            <div className="bg-white p-4 flex justify-center items-center rounded shadow-md">
              Option 2
            </div>
            <div className="bg-white p-4 flex justify-center items-center rounded shadow-md">
              Option 3
            </div>
          </div>

          {/* Second Row - Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 flex justify-center items-center rounded shadow-md">
              Option 4
            </div>
            <div className="bg-white p-4 flex justify-center items-center rounded shadow-md">
              Option 5
            </div>
          </div>

          {/* Third Row - Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 flex justify-center items-center rounded shadow-md">
              Option 6
            </div>
            <div className="bg-white p-4 flex justify-center items-center rounded shadow-md">
              Option 7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
