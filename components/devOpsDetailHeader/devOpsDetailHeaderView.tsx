import DevOpsTagList from "@components/devOpsTagList/devOpsTagList";
import { format, parseISO } from "date-fns";
import { PostI } from "types";
import { StyledHeader } from "./devOpsDetailHeaderStyled";

const DevOpsDetailView = ({ post }: PostI) => (
  <StyledHeader>
    <span className="date">{format(parseISO(post.date), "Y.M.d (E)")}</span>
    <h2 className="title weight-black">{post.title}</h2>

    <DevOpsTagList
      tagList={post.tags as Array<string>}
      postTitle={post.title}
    />
  </StyledHeader>
);
export default DevOpsDetailView;
