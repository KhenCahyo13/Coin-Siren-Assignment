import { Achievement } from '@/app/types/achievement';
import { Benefit } from '@/app/types/benefit';
import { Employee } from '@/app/types/employee';
import { Field } from '@/app/types/field';

export interface HomeViewProps {
  fields: Field[] | null;
  employees: Employee[] | null;
  achievements: Achievement[] | null;
  benefits: Benefit[] | null;
  tooltipPosition: { top: number; left: number } | null;
  handleOnMouseEnterEmployeeCard: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleOnMouseLeaveEmployeeCard: () => void;
}
