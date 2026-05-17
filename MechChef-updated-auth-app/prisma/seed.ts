import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("mechchef-demo", 10);

  const cookUser = await prisma.user.upsert({
    where: { email: "amara@mechchef.co.uk" },
    update: {},
    create: {
      name: "Amara Thomas",
      email: "amara@mechchef.co.uk",
      password,
      role: Role.COOK,
      address: "Newham, London"
    }
  });

  const cook = await prisma.cook.upsert({
    where: { userId: cookUser.id },
    update: {},
    create: {
      userId: cookUser.id,
      bio: "Home cook sharing Caribbean comfort food from a verified Newham kitchen.",
      cuisine: "Caribbean",
      rating: 4.9,
      totalOrders: 184,
      isVerified: true
    }
  });

  await prisma.meal.createMany({
    data: [
      {
        cookId: cook.id,
        name: "Jerk Chicken with Rice and Peas",
        description: "Scotch bonnet, allspice, thyme, coconut rice, kidney beans, and crisp slaw.",
        price: 9.5,
        category: "Dinner",
        cuisine: "Caribbean",
        dietaryTags: ["Halal", "Gluten Free"],
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=600&fit=crop",
        portionSize: "Generous single portion",
        deliveryTime: "45-60 min"
      },
      {
        cookId: cook.id,
        name: "Plantain Bowl",
        description: "Sweet fried plantain, black beans, spiced rice, pepper sauce, and greens.",
        price: 7.75,
        category: "Lunch",
        cuisine: "Caribbean",
        dietaryTags: ["Vegan", "Gluten Free"],
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&h=600&fit=crop",
        portionSize: "1 bowl",
        deliveryTime: "35-50 min"
      }
    ],
    skipDuplicates: true
  });
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
