"use client";

import { FC, MouseEvent, useCallback, useEffect, useState } from "react";
import HomeView from "./Home.view";
import { Field } from "@/app/types/field";
import axios from "axios";
import { Employee } from "@/app/types/employee";

const Home: FC = () => {
    const [fieldsData, setFieldsData] = useState<Field[] | null>(null);
    const [employeesData, setEmployeesData] = useState<Employee[] | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number } | null>(null);

    const handleOnMouseEnterEmployeeCard = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setTooltipPosition({
            top: rect.top + window.scrollY - 10,
            left: rect.left + rect.width / 2,
        });
    }, []);

    const handleOnMouseLeaveEmployeeCard = useCallback(() => {
        setTooltipPosition(null);
    }, []);

    useEffect(() => {
        const fetchFields = async () => {
            const response = await axios.get('/api/fields');
            if (response.data.success) {
                setFieldsData(response.data.data);
            }
        };

        const fetchEmployees = async () => {
            const response = await axios.get('/api/employees');
            if (response.data.success) {
                setEmployeesData(response.data.data);
            }
        };

        fetchEmployees();
        fetchFields();
    }, []);

    return <HomeView
        fields={fieldsData}
        employees={employeesData}
        tooltipPosition={tooltipPosition}
        handleOnMouseEnterEmployeeCard={handleOnMouseEnterEmployeeCard}
        handleOnMouseLeaveEmployeeCard={handleOnMouseLeaveEmployeeCard}
    />;
};

export default Home;