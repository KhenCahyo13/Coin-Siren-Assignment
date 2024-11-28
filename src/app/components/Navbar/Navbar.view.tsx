import { FC, memo } from 'react';
import { FaAlignRight, FaChevronDown, FaChevronUp, FaXmark } from 'react-icons/fa6';
import { NavbarViewProps } from './Navbar.type';
import Image from 'next/image';

const NavbarView: FC<NavbarViewProps> = ({ openNavbar, openDropdown, handleToggleDropdown, handleToggleNavbar }) => (
  <nav className="navbar">
    <div className="navbar-body">
      <Image src="/images/logo-white.png" alt="Nav Logo" className="navbar-brand-img" />
      <button className="navbar-button" onClick={handleToggleNavbar}>
        {openNavbar ? <FaXmark /> : <FaAlignRight />}
      </button>
      <div className={`${openNavbar ? 'flex' : 'hidden'} navbar-items`}>
        {/* Dropdown Button */}
        <div className="dropdown">
          <button className="dropdown-button" onClick={handleToggleDropdown}>
            <p className="text-sm font-semibold">채용</p>
            {openDropdown ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
          </button>

          {/* Dropdown Menu */}
          <div className={`dropdown-items ${openDropdown ? 'block' : 'hidden'}`}>
            <a href="#" className="dropdown-item dropdown-item-active">
              채용
            </a>
            <a href="#" className="dropdown-item">
              해외 개발자 원격 채용
            </a>
            <a href="#" className="dropdown-item">
              외국인 원격 채용 (비개발 직군)
            </a>
            <a href="#" className="dropdown-item dropdown-item-last">
              한국어 가능 외국인 채용
            </a>
          </div>
        </div>
        <a href="#" className="navbar-item font-semibold">
          해외 개발자 활용 서비스
        </a>
      </div>
      <div className={`mt-4 mx-auto ${openNavbar ? 'block' : 'hidden'} lg:block lg:mt-0 lg:mx-0`}>
        <button className="button button-light button-sm">문의하기</button>
      </div>
    </div>
  </nav>
);

export default memo(NavbarView);
