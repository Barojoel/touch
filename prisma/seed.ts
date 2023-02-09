import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // await prisma.owner.deleteMany();
  const user = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      profile: {
        create: {
          name: faker.name.fullName(),
          password: 'admin@123',
          mobile: '+254705400000',
        },
      },
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
