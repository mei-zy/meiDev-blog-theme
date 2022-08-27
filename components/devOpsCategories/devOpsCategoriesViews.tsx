import { DevOpsCategoriesViewI } from "types";
import { StyledDevOpsCategories } from "./devOpsCategoriesStyled";

const DevOpsCategoriesView = ({
  isOpenCategories,
  currentCategory,
  categories,
  onClickOpenCategories,
  onChangeCategories,
}: DevOpsCategoriesViewI) => (
  <StyledDevOpsCategories>
    <div className="categoryWrapper">
      <h2 onClick={onClickOpenCategories}>
        <span>Categories</span>
        {isOpenCategories ? <span> 닫아</span> : <span> 열어</span>}
      </h2>
      {isOpenCategories ? (
        <ul className="categoryList">
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={currentCategory === category ? "current" : ""}
              onClick={onChangeCategories}
            >
              <button data-id={category} onClick={onChangeCategories}>
                {category} ({categories[category]})
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  </StyledDevOpsCategories>
);

export default DevOpsCategoriesView;
