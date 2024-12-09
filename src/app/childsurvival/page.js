import react from "react";

export default function Page(){
    return (
        <div className="relative min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            <div className="absolute top-4 left-4">
                <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                    Back
                </button>
            </div>

            {/* Heading */}
            <div className="text-center mt-12 sm:mt-8">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                    Responsive Layout Example
                </h1>
            </div>

            <div className="flex-grow flex items-center justify-center">
                
            </div>

        </div>
    );
}