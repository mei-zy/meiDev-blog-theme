import { Post } from "contentlayer/generated";
import { Dispatch } from "react";

interface LanguageI {
  currentLan: string;
}

interface HeaderNavI {
  onClickModal: () => void;
  mobileIsOpenModal: boolean;
}

interface TagsI {
  tagList: Array<string>;
}

interface DevOpsTagListI extends TagsI {
  postTitle: string;
}

interface CategoriesI {
  [key: string]: number;
}

interface DevOpsCategoriesI {
  categories: CategoriesI;
  currentCategory: string;
}

interface DevOpsCategoriesPropsI extends DevOpsCategoriesI {
  setCurrentCategory: Dispatch<string>;
}

interface DevOpsCategoriesViewI extends DevOpsCategoriesI {
  isOpenCategories: boolean;
  onClickOpenCategories: (e: SyntheticEvent<Element, Event>) => void;
  onChangeCategories: (e: SyntheticEvent<Element, Event>) => void;
}

interface PostI {
  post: Post;
}
