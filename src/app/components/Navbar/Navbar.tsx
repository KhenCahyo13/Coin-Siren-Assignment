"use client";

import { FC, useCallback, useState } from "react";
import NavbarView from "./Navbar.view";

const Navbar: FC = () => {
    const [openNavbar, setOpenNavbar] = useState<boolean>(false);

    const handleToggleNavbar = useCallback(() => {
        setOpenNavbar(!openNavbar);
    }, [openNavbar]);

    return <NavbarView
        openNavbar={openNavbar}
        handleToggleNavbar={handleToggleNavbar}
    />;
};

export default Navbar;