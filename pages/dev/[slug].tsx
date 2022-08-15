import Header from "components/header";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Detail = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <>
      <Header></Header>
      <main>
        <h2>{post.title}</h2>
        <div>{post.date}</div>
        <MDXComponent />
      </main>
    </>
  );
};

export default Detail;

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return {
    props: {
      post,
    },
  };
}
