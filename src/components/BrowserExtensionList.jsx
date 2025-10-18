import { useEffect, useState } from "react"
import BrowserExtensionCard from "./BrowserExtensionCard";

const BrowserExtensionList = () => {

    const [activeButton, setActiveButton] = useState("All");

    const [extension, setExtension] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((result) => {
                setExtension(result);
            }).catch((err) => {
                console.log("Error: " + err)
            })
    }, []);

    return (

        // BROWSER EXTENSION MAIN UI 
        <>
            <div className="flex justify-between text-[var(--neutral-100)] py-12">

                <h1 className="text-xl sm:text-2xl xl:text-3xl font-[600]">Extension List</h1>

                {/* FILTER BUTTONS */}

                <div className="flex gap-4 items-center">
                    <button
                        className={`rounded-full border-1 outline-0 border-white cursor-pointer hover:bg-[var(--neutral-600)]
                        ${activeButton === "All"
                                ? "bg-[var(--red-500)] text-[var(--neutral-900)] hover:bg-[var(--red-400)]"
                                : "bg-[var(--neutral-700)]"}  py-1 px-4`}
                        onClick={() => setActiveButton("All")}
                    >
                        All
                    </button>

                    <button
                        className={`rounded-full border-1 outline-0 border-white cursor-pointer hover:bg-[var(--neutral-600)]
                        ${activeButton === "Active"
                                ? "bg-[var(--red-500)] text-[var(--neutral-900)] hover:bg-[var(--red-400)]"
                                : "bg-[var(--neutral-700)]"}  py-1 px-4`}
                        onClick={() => setActiveButton("Active")}
                    >
                        Active
                    </button>

                    <button
                        className={`rounded-full border-1 outline-0 border-white cursor-pointer hover:bg-[var(--neutral-600)]
                        ${activeButton === "Inactive"
                                ? "bg-[var(--red-500)] text-[var(--neutral-900)] hover:bg-[var(--red-400)]"
                                : "bg-[var(--neutral-700)]"}  py-1 px-4`}
                        onClick={() => setActiveButton("Inactive")}
                    >
                        Inactive
                    </button>

                </div>

                {/* BROWSER EXTENSION CARDS LIST  */}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    extension.map(({ logo, name, description, isActive }, id) => {
                        return <BrowserExtensionCard key={id} extensionLogo={logo} extensionName={name} extensionDescription={description} isActive={isActive} />
                    })
                }
            </div>

        </>
    )
}

export default BrowserExtensionList