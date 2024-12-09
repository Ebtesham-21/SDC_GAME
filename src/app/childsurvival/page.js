import react from "react";

export default function Page(){
    return (
        <div className="relative min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            <div className="absolute top-4 left-4">
            <button className="p-2">
              <Image
                width={50}
                height={50}
                alt="home_Button"
                src="/Assets/Images/Home_button.png"
              />
            </button>
            </div>

            {/* Heading */}
            <div className="text-center mt-12 sm:mt-8">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                    Responsive Layout Example
                </h1>
            </div>

            <div className="flex-grow flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl px-4">
                    <div className="p-4 bg-white rounded-md flex items-center justify-center">
                        <p>Column 1</p>
                    </div>
                    <div className="p-4 bg-white rounded-md flex items-center justify-center">
                        <p>Column 2</p>
                    </div>
                    <div className="p-4 bg-white rounded-md flex items-center justify-center">
                        <p>Column 3</p>
                    </div>
                </div>

            </div>

        </div>
    );
}