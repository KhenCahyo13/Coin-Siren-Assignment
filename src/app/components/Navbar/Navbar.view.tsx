import { FC, memo } from "react";
import { FaAlignRight, FaChevronDown, FaXmark } from "react-icons/fa6";
import { NavbarViewProps } from "./Navbar.type";

const NavbarView: FC<NavbarViewProps> = ({ openNavbar, handleToggleNavbar }) => (
    <nav className="px-4 py-3 md:px-12 md:py-4 lg:px-24 lg:py-6">
        <div className="flex flex-wrap items-center justify-between lg:flex-none">
            <img src="/images/logo-white.png" alt="Nav Logo" className="w-28 lg:w-32" />
            <button className="block lg:hidden" onClick={handleToggleNavbar}>
                {openNavbar ? <FaXmark className="text-lg" /> : <FaAlignRight className="text-lg" />}
            </button>
            <div className={`w-full flex flex-col items-center gap-4 mt-4 ${openNavbar ? 'block' : 'hidden'} lg:flex lg:w-fit lg:mt-0 lg:flex-row lg:gap-12`}>
                <button className="flex items-center gap-2">
                    <p className="text-sm" style={{ fontWeight: 600 }}>채용</p>
                    <FaChevronDown className="text-xs" />
                </button>
                <a href="#" className="text-sm" style={{ fontWeight: 600 }}>해외 개발자 활용 서비스</a>
            </div>
            <button className={`bg-white mt-4 px-4 py-1 w-full text-[#4A77FF] text-sm rounded-md ${openNavbar ? 'block' : 'hidden'} lg:block lg:w-fit lg:mt-0`}>문의하기</button>
        </div>
    </nav>
);

export default memo(NavbarView);