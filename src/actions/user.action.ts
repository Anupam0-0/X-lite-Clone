"use server"
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function syncUser() {
    try {

        const {userId} = await auth();
        const user = await currentUser();
        if (!user || !userId) return;

        // * check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                clerkId: userId,
            }
        })

        if (existingUser) return existingUser;
        
        const dbUser = await prisma.user.create({
            data: {
                clerkId : userId,
                name: `${user.firstName || "" } ${user.lastName || ""}`,
                //john@gmail.com -> john
                username : user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
                email: user.emailAddresses[0].emailAddress,
                image: user.imageUrl,
            }
        })

        return dbUser;

        
    } catch (error) {
        console.error("Error in SyncUser", error);
        
    }
}