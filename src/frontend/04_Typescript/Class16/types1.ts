interface User {
  id: number;
  name: string;
}

interface User {
  email: string;
}

const user: User = {
  id: 101,
  name: "venkat",
  email: "venkat@gmail.com",
};
console.log(user);

// Product + discount using type intersection
// Combining 2 type

type Product = {
  id: number;
  name: string;
};

type Discount = {
  discount: number;
};

type ProductWithDiscount = Product & Discount;
const mobile: ProductWithDiscount = {
  id: 1,
  name: "iPhone",
  discount: 10,
};

console.log(mobile);

// interface
// eg. use for employee management
interface Employee {
  empId: number;
  empName: string;
}

const emp: Employee = {
  empId: 1,
  empName: "Ram",
};
console.log(emp);

// type
// eg. use for Payment Status
type PaymentStatus = "Pending" | "Success" | "Failed";
let payment: PaymentStatus = "Success";
console.log(payment);

// eg. login user role
type Role = "Admin" | "Manager" | "Employee";
let userRole: Role = "Admin";
console.log(userRole);

// interface + type
type OrderStatus = "Placed" | "Preparing" | "OutForDelivery" | "Delivered";

interface Customer {
  customerId: number;
  customerName: string;
}

interface Order {
  orderId: number;
  totalAmount: number;
  customer: Customer;
  status: OrderStatus;
}

const order: Order = {
  orderId: 5001,
  totalAmount: 799,
  customer: {
    customerId: 101,
    customerName: "ram",
  },
  status: "OutForDelivery",
};
console.log(order);

type ProjectStatus = "NotStarted" | "Inprogress" | "InProd";

interface TeamMember {
  memberId: number;
  memberName: string;
}

interface Project {
  projectId: number;
  projectName: string;
  status: ProjectStatus;
  teamMembers: TeamMember[];
}

interface Employee1 {
  empId: number;
  empName: string;
  projects: Project[];
}

const employee: Employee1 = {
  empId: 101,
  empName: "Ram",
  projects: [
    {
      projectId: 1,
      projectName: "Guvi learning Platform",
      status: "Inprogress",
      teamMembers: [
        {
          memberId: 1,
          memberName: "Raj",
        },
        {
          memberId: 2,
          memberName: "Ravi",
        },
      ],
    },
  ],
};
console.log(employee);