import Header from "../../components/header";
import { allPosts, Post } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import BlogPosts from "components/blogPosts";

const Dev = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header />
      <ul>
        {posts.map(({ title, date, description, tags, thumbnail, _id }) => (
          <BlogPosts
            title={title}
            date={date}
            description={description}
            tags={tags}
            thumbnail={thumbnail}
            key={_id}
          />
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const posts: Post[] = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Dev;
