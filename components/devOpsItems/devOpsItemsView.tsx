import Link from "next/link";
import { format, parseISO } from "date-fns";
import { StyledDevOpsItems } from "./devOpsItemsStyled";
import DevOpsTagList from "@components/devOpsTagList/devOpsTagList";

const DevOpsItemsView = ({ posts }) => (
  <StyledDevOpsItems>
    {posts.map((post) => (
      <li key={post._id} className="item">
        <Link href={post.url}>
          <a>
            <span className="date">
              {format(parseISO(post.date), "Y.M.d (E)")}
            </span>
            <h3 className="title weight-black">{post.title}</h3>
            <div>
              <DevOpsTagList tagList={post.tags} postTitle={post.title} />
            </div>
            <div className="content">{post.body.raw}</div>
          </a>
        </Link>
      </li>
    ))}
  </StyledDevOpsItems>
);

export default DevOpsItemsView;
