export interface EmployeeSkill {
    id: number;
    name: string;
}

export interface Employee {
    id: number;
    name: string;
    position: string;
    lengthOfExperience: number;
    salary: number;
    countryFlag: string;
    profileImage: string;
    skills: EmployeeSkill[];
}