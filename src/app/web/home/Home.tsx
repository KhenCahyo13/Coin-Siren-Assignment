"use client";

import { FC, use, useEffect, useState } from "react";
import HomeView from "./Home.view";
import { Field } from "@/app/types/field";
import axios from "axios";
import { Employee } from "@/app/types/employee";

const Home: FC = () => {
    const [fieldsData, setFieldsData] = useState<Field[] | null>(null);
    const [employeesData, setEmployeesData] = useState<Employee[] | null>(null);

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
    />;
};

export default Home;