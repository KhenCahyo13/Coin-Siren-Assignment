"use client";

import { FC, useCallback, useState } from "react";
import NavbarView from "./Navbar.view";

const Navbar: FC = () => {
    const [openNavbar, setOpenNavbar] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);

    const handleToggleDropdown = useCallback(() => {
        setOpenDropdown(!openDropdown);
    }, [openDropdown]);

    const handleToggleNavbar = useCallback(() => {
        setOpenNavbar(!openNavbar);
    }, [openNavbar]);

    return <NavbarView
        openNavbar={openNavbar}
        openDropdown={openDropdown}
        handleToggleDropdown={handleToggleDropdown}
        handleToggleNavbar={handleToggleNavbar}
    />;
};

export default Navbar;