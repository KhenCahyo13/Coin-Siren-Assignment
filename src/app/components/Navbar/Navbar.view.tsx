import { FC, memo } from "react";
import { FaAlignRight, FaChevronDown, FaXmark } from "react-icons/fa6";
import { NavbarViewProps } from "./Navbar.type";

const NavbarView: FC<NavbarViewProps> = ({ openNavbar, handleToggleNavbar }) => (
    <nav className="navbar">
        <div className="navbar-body">
            <img src="/images/logo-white.png" alt="Nav Logo" className="navbar-brand-img" />
            <button className="navbar-button" onClick={handleToggleNavbar}>
                {openNavbar ? <FaXmark /> : <FaAlignRight />}
            </button>
            <div className={`${openNavbar ? 'flex' : 'hidden'} navbar-items`}>
                <button className="flex items-center gap-2">
                    <p className="text-sm font-semibold">채용</p>
                    <FaChevronDown className="text-xs" />
                </button>
                <a href="#" className="navbar-item font-semibold">해외 개발자 활용 서비스</a>
            </div>
            <div className={`mt-4 mx-auto ${openNavbar ? 'block' : 'hidden'} lg:block lg:mt-0 lg:mx-0`}>
                <button className="button button-light button-sm">문의하기</button>
            </div>
        </div>
    </nav>
);

export default memo(NavbarView);