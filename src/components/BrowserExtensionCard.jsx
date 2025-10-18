import { useState } from "react"

const BrowserExtensionCard = ({extensionLogo, extensionName, extensionDescription, isActive}) => {

    const [isActiveButton, setIsActiveButton] = useState(isActive);

    const toggleButton = () => {
        setIsActiveButton((prev) => !prev);
    }

    const extensionLogoUrlSrc = extensionLogo.split(".")[1];

    return (
        <div className="flex flex-col justify-between bg-[var(--neutral-800)] border-1 border-neutral-500 rounded-md lg:rounded-xl p-2 min-h-45">

            {/* BROWSER EXTENSION : NAME AND DESCRIPTION */}

            <div className="flex gap-4 items-center w-full" id="cards-header">
                <img src={`/src${extensionLogoUrlSrc}.svg`} alt="Extension Logo" className="w-14" />
                <div>
                    <h2 className="text-[var(--neutral-0)] text-[18px] font-semibold">{extensionName}</h2>
                    <p className="text-[var(--neutral-300)] text-sm">{extensionDescription}</p>
                </div>
            </div>

            {/* CARDS FILTERING PARTS : REMOVE AND TOGGLE BTN */}

            <div className="flex justify-between items-center mb-2" id="cards-footer">

                {/* REMOVE BUTTON  */}
                <button
                    className="rounded-full border-1 outline-0 border-neutral-500 cursor-pointer hover:bg-[var(--neutral-600)] text-white px-4 py-1"
                >
                    Remove
                </button>

                {/* TOGGLE BUTTON  */}
                <div className={`w-16 h-8 flex transition-all duration-50 ease-in
                   ${isActiveButton === true
                        ? " bg-[var(--red-500)] justify-end"
                        : " bg-[var(--neutral-700)] justify-start"
                    }
                    rounded-full p-1 cursor-pointer`}
                    onClick={() => toggleButton()}
                >
                    <div
                        className={`w-6 h-full bg-[var(--neutral-0)] rounded-full transition-all duration-600 ease-in-out`}
                    ></div>
                </div>

            </div>

        </div>
    )
}

export default BrowserExtensionCard