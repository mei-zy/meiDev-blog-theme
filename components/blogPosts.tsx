import Image from "next/image";
import Link from "next/link";

interface IPosts {
  title: string;
  date: string;
  description: string;
  tags?: string;
  thumbnail?: string;
}

const BlogPosts = ({ title, date, description, tags, thumbnail }: IPosts) => {
  return (
    <li>
      <Link href="/">
        <a>
          <div>
            <div>
              <span>{date}</span>
              <span>|</span>
              <span>{tags}</span>
            </div>
            <h3>{title}</h3>
            <div>{description}</div>
          </div>
          <div>
            {thumbnail ? (
              <Image src={thumbnail} alt={title} width="40px" height="40px" />
            ) : (
              <></>
            )}
          </div>
        </a>
      </Link>
    </li>
  );
};

export default BlogPosts;
