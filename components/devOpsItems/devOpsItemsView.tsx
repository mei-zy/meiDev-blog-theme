import Link from "next/link";
import { format, parseISO } from "date-fns";
import { StyledDevOpsItems } from "./devOpsItemsStyled";

const DevOpsItemsView = ({ posts }) => (
  <StyledDevOpsItems>
    {posts.map((post) => (
      <li key={post._id}>
        <Link href={post.url}>
          <a>
            <span className="date">
              {format(parseISO(post.date), "Y.M.d (E)")}
            </span>
            <h3 className="title weight-black">{post.title}</h3>
            <ul className="tagList">
              {post.tags.map((tag) => (
                <li key={`${post.title}${tag}`}>{tag}</li>
              ))}
            </ul>
            <div className="content">{post.body.raw}</div>
          </a>
        </Link>
      </li>
    ))}
  </StyledDevOpsItems>
);

export default DevOpsItemsView;
