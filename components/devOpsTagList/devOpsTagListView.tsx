import { StyledTagList } from "./devOpsTagListStyled";

const DevOpsTagListView = ({ tagList, postTitle }: DevOpsTagListI) => (
  <StyledTagList>
    {tagList.map((tag) => (
      <li key={`${postTitle}${tag}`}>{tag}</li>
    ))}
  </StyledTagList>
);

export default DevOpsTagListView;
