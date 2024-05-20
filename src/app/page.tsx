import { log } from "console";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  'https://utfs.io/f/c2cb6e17-9d26-41e6-90d5-b1f151b2e68f-2oy3zh.png',
  'https://utfs.io/f/c4114f69-7bea-4555-b1ab-c260fc1474ad-58p3xr.png'
]


const mockImages = mockUrls.map((url,index) => ({
  id : index + 1,
  url 
}))

export default async function HomePage() {

  const  posts = await db.query.posts.findMany();
  console.log(posts);
  
  return (
    <main className=''>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages,...mockImages].map((image , index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
