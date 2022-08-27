import { compareDesc } from "date-fns";
import { InferGetStaticPropsType } from "next";
import { allPosts } from "contentlayer/generated";
import DevOpsItems from "@components/devOpsItems/devOpsItems";

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
};

const DevOps = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <DevOpsItems posts={posts} />
    </main>
  );
};

export default DevOps;
