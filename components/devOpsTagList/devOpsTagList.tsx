import { DevOpsTagListI } from "types";
import DevOpsTagListView from "./devOpsTagListView";

const DevOpsTagList = ({ tagList, postTitle }: DevOpsTagListI) => {
  const props = {
    tagList,
    postTitle,
  };

  return <DevOpsTagListView {...props} />;
};

export default DevOpsTagList;
