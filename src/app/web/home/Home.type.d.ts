import { Employee } from "@/app/types/employee";
import { Field } from "@/app/types/field";

export interface HomeViewProps {
    fields: Field[] | null;
    employees: Employee[] | null;
    tooltipPosition: { top: number; left: number } | null;
    handleOnMouseEnterEmployeeCard: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleOnMouseLeaveEmployeeCard: () => void;
}