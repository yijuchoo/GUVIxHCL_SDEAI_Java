// company -> departments -> employees -> projects -> team members

interface TeamMember {
  memberId: number;
  memberName: string;
  skill: string;
}

interface Project {
  projectId: number;
  projectName: string;
  budget: number;
  teamMembers: TeamMember[];
}

interface Employee {
  empId: number;
  empName: string;
  designation: string;
  salary: number;
  projects: Project[];
}

interface Department {
  deptId: number;
  deptName: string;
  employees: Employee[];
}

interface Company {
  companyId: number;
  companyName: string;
  departments: Department[];
}

const company: Company = {
  companyId: 1,
  companyName: "GUVI",
  departments: [
    {
      deptId: 101,
      deptName: "Engineering",
      employees: [
        {
          empId: 1,
          empName: "RAM",
          designation: "Senior Developer",
          salary: 90000,

          projects: [
            {
              projectId: 10001,
              projectName: "Employee Management System",
              budget: 5000000,

              teamMembers: [
                {
                  memberId: 1,
                  memberName: "Ravi",
                  skill: "React",
                },
                {
                  memberId: 2,
                  memberName: "Shyam",
                  skill: "Angular",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

console.log(company);