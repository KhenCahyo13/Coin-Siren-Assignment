import { Employee } from "@/app/types/employee";
import { Field } from "@/app/types/field";

export interface HomeViewProps {
    fields: Field[] | null;
    employees: Employee[] | null;
}