"use client";

import { FC, useEffect, useState } from "react";
import HomeView from "./Home.view";
import { Field } from "@/app/types/field";
import axios from "axios";

const Home: FC = () => {
    const [fieldsData, setFieldsData] = useState<Field[] | null>(null);

    useEffect(() => {
        const fetchFields = async () => {
            const response = await axios.get('/api/fields');
            if (response.data.success) {
                setFieldsData(response.data.data);
            }
        };

        fetchFields();
    }, []);

    return <HomeView
        fields={fieldsData}
    />;
};

export default Home;