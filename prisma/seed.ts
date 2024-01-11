import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const user = await prisma.user.create({
    data: {
      email: "juan@gmail.com",
      fullname: "Juan De Dios Mendoza",
      admin: true,
    },
  });
  //hace una cuenat admin
  //   const user = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       admin: true,
  //     },
  //   });
  //   console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
