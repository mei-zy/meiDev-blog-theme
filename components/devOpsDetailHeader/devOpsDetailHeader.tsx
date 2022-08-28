import DevOpsDetailView from "./devOpsDetailHeaderView";
import { PostI } from "types";

const DevOpsDetail = ({ post }: PostI) => {
  return <DevOpsDetailView post={post} />;
};

export default DevOpsDetail;
