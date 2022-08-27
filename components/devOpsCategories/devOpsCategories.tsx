import { useState } from "react";
import DevOpsCategoriesView from "./devOpsCategoriesViews";

const DevOpsCategories = ({
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  const [isOpenCategories, setIsOpenCategories] = useState(false);

  const onClickOpenCategories = () => {
    setIsOpenCategories(!isOpenCategories);
  };

  const onChangeCategories = (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    if (!e.target.dataset.id) return;

    setCurrentCategory(e.target.dataset.id);
  };

  const props = {
    isOpenCategories,
    currentCategory,
    categories,
    onClickOpenCategories,
    onChangeCategories,
  };

  return <DevOpsCategoriesView {...props} />;
};

export default DevOpsCategories;
