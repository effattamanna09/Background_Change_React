import React from "react";

export default function BgButton({ btnColor, onClick }) {
    return (
            <div className="flex w-full h-screen bottom-12 inset-x-0 px-2">
                <div className=" gap-3 mt-6 px-3 py-2 rounded-3xl">
                    <button
                        onClick={() => onClick(btnColor)}
                        className="px-4 py-2 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: btnColor }}
                    >
                        {btnColor}
                    </button>
                </div>
            </div>
    );
}
