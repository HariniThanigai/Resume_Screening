import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Let's fetch all users from your User model
  const allUsers = await prisma.user.findMany(); 
  console.log("Users:", allUsers);

  // You can also fetch employers
  const allEmployers = await prisma.employer.findMany();
  console.log("Employers:", allEmployers);

  // And employees
  const allEmployees = await prisma.employee.findMany();
  console.log("Employees:", allEmployees);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());