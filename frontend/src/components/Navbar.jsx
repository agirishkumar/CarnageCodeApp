import React from 'react';

const Navbar = () => {
    const scrollTo = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="bg-[#0B0C10] text-white w-full fixed top-0 left-0 z-10">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-lg font-bold">CarnageCode</div>
                <div className="flex">
                    {["Home", "About", "Skills", "Blogs", "Projects", "Resume", "Contact"].map((item) => (
                        <a href={`#${item.toLowerCase()}`}
                           onClick={(e) => {
                               e.preventDefault(); // Prevent the default anchor link behavior
                               scrollTo(`#${item.toLowerCase()}`);
                           }}
                           className="mx-2 hover:text-turquoise relative cursor-pointer"
                           key={item}>
                            {item}
                            <span className="block h-0.5 bg-transparent hover:bg-turquoise transition-all duration-300 ease-in-out absolute w-full left-0"></span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
