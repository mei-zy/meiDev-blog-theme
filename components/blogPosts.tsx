import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import styled from "styled-components";
import AutoImageFormat from "./autoImageFormat";

interface IPosts {
  title: string;
  date: string;
  description: string;
  tags?: string;
  thumbnail?: string;
}

const StyledBlogPosts = styled.li`
  padding: 20px;

  * :hover {
    h3 {
      color: #d6a154;
    }
  }

  .itemWrapper {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .blogInfo {
    width: 70%;
  }

  .dateAndtagsWrapper {
    color: #4e5a55;
    font-size: 15px;
    margin-bottom: 15px;

    .bar {
      margin: 0 15px;
    }

    .tags {
      font-family: "S-CoreDream-5Medium";
    }
  }

  h3,
  .description {
    color: #0d1619;
    line-height: 1.2;
  }

  h3 {
    font-family: "S-CoreDream-6Bold";
    font-size: 30px;
    margin-bottom: 18px;
  }

  .description {
    font-size: 15px;
  }

  .imageWrapper {
    overflow: hidden;
    width: 200px;
    height: 186px;
    border-radius: 30px;
  }
`;

const StyledImageBackground = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

const BlogPosts = ({ title, date, description, tags, thumbnail }: IPosts) => {
  return (
    <StyledBlogPosts>
      <Link href="/">
        <a className="itemWrapper">
          <div className="blogInfo">
            <div className="dateAndtagsWrapper">
              <time dateTime={date}>
                {format(parseISO(date), "LLLL d, yyyy")}
              </time>
              <span className="bar">|</span>
              <span className="tags">{tags}</span>
            </div>
            <h3>{title}</h3>
            <div className="description">{description}</div>
          </div>
          <div className="imageWrapper">
            {thumbnail ? <StyledImageBackground image={thumbnail} /> : <></>}
          </div>
        </a>
      </Link>
    </StyledBlogPosts>
  );
};

export default BlogPosts;
