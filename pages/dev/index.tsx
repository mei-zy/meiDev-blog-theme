import { allPosts, Post } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import BlogPosts from "components/blogPosts";
import styled from "styled-components";
import LeftSideTags from "components/leftSideTags";
import Header from "components/header";
import { useState } from "react";

const StyledBlogWrapper = styled.ul`
  width: 80%;
  margin: 40px 0 20px 0;
  padding-right: 80px;
  box-sizing: border-box;
  float: right;

  li {
    border-bottom: 1px solid #eeeeee;
  }

  li:last-of-type {
    border-bottom: 0px solid #eeeeee;
  }
`;

const Dev = ({
  posts,
  tagsList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentTag, setCurrentTag] = useState("All");

  return (
    <>
      <Header />
      <LeftSideTags tags={tagsList} onChangeTag={setCurrentTag} />

      <StyledBlogWrapper>
        {posts
          .filter((post) =>
            currentTag !== "All" ? post.tags === currentTag : post
          )
          .map((post) => (
            <BlogPosts
              title={post.title}
              date={post.date}
              description={post.description}
              tags={post.tags}
              thumbnail={post.thumbnail}
              key={post._id}
              link={post._raw.flattenedPath}
            />
          ))}
      </StyledBlogWrapper>
    </>
  );
};

export const getStaticProps = async () => {
  type ObjType = {
    [index: string]: number;
  };

  const posts: Post[] = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  let size = 0;
  const map = new Map();
  allPosts.forEach(({ tags }) => {
    map.set(tags, (map.get(tags) || 0) + 1);
    size++;
  });

  let tagsList: ObjType = { All: size };
  map.forEach((value, key) => {
    tagsList[key] = value;
  });

  return {
    props: {
      posts,
      tagsList,
    },
  };
};

export default Dev;
