export interface User {
    id:number;
    username: string;
    password:string;
    firstname: string;
    lastname: string;
    birthDate: string;
    gender: string;
    nameOfSchool: string;
    nameOfUni: string;
    degreeQual: string;
    codingSkill: boolean;
    socialSkill: boolean;
    langSkill: boolean;
    webDev: boolean;
    programDev: boolean;
    specialization: string;
}

export const DegreeQual = ['Software Engineering', 'Computer Science','Business Information Systems','Information Systems']
export const Gender = ['Male', 'Female','Other'];
export const Specialization =['Back-End Development', 'Front-End Development','Fullstack Development','Mobile Development', 'Web Development','UI/UX']
