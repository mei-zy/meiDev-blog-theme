import { compareDesc } from "date-fns";
import { InferGetStaticPropsType } from "next";
import { allPosts } from "contentlayer/generated";
import DevOpsItems from "@components/devOpsItems/devOpsItems";
import DevOpsCategories from "@components/devOpsCategories/devOpsCategories";
import { useState } from "react";

export const getStaticProps = async () => {
  let categories = {
    All: 0,
  };
  let totalCount = 0;
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (categories[`${tag}`] === undefined) categories[`${tag}`] = 1;
      else categories[`${tag}`] += 1;
      totalCount++;
    });
  });

  categories["All"] = totalCount;

  return { props: { posts, categories } };
};

const DevOps = ({
  posts,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentCateogry, setCurrentCategory] = useState("All");

  return (
    <>
      <DevOpsCategories
        categories={categories}
        currentCategory={currentCateogry}
        setCurrentCategory={setCurrentCategory}
      />
      <main>
        <DevOpsItems
          posts={
            currentCateogry === "All"
              ? posts
              : posts.filter((post) => post.tags.includes(currentCateogry))
          }
        />
      </main>
    </>
  );
};

export default DevOps;
