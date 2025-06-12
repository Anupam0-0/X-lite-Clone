// app/profile/[username]/page.tsx
import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";
// import type { Metadata } from "next";

// Example for generateMetadata
export async function generateMetadata({ params }){
  const resolvedParams = await params;
  const user = await getProfileByUsername(resolvedParams.username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

// ✅ Split async logic from default export function
async function getPageData(username) {
  const user = await getProfileByUsername(username);
  if (!user) return null;

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return { user, posts, likedPosts, isCurrentUserFollowing };
}

// ✅ Use a separate async inner function
// @ts-ignore: bypass Next.js type constraint error
export default async function Page({ params }) {
  const resolvedParams = await params;
  const data = await getPageData(resolvedParams.username);
  if (!data) notFound();

  const { user, posts, likedPosts, isCurrentUserFollowing } = data;

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
}
