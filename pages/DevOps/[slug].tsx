import DevOpsDetail from "@components/devOpsDetailHeader/devOpsDetailHeader";
import Markdown from "@components/markdownStyling/markdown";
import { allPosts, Post } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

const Detail = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDX = useMDXComponent(post?.body.code as string);

  return (
    <main>
      <DevOpsDetail post={post as Post} />
      <Markdown>
        <MDX />
      </Markdown>
    </main>
  );
};

export default Detail;
