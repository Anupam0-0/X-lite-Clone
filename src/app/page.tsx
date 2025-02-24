import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { CreatePost } from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";
import { getPosts } from "@/actions/post.action";
import PostCard from "@/components/PostCard";
import { getDbUserId } from "@/actions/user.action";

const page = async () => {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();

  console.log({posts});

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} dbUserId={dbUserId} />
        ))}
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-24">
        <WhoToFollow />
      </div>
    </div>
  );
};

export default page;
