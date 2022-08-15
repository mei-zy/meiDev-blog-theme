import { Dispatch } from "react";
import styled from "styled-components";

interface ObjType {
  [index: string]: number;
}

interface ITags {
  tags: ObjType;
  onChangeTag: Dispatch<string>;
}

const StyledAside = styled.aside`
  position: fixed;
  top: 138px;
  left: 2%;

  h2 {
    color: #d6a154;
    font-family: "S-CoreDream-6Bold";
    margin-bottom: 15px;
  }

  li {
    cursor: pointer;
    color: #22312a;
    font-size: 15px;
    margin-bottom: 10px;

    span {
      pointer-events: none;
    }
  }

  li:hover {
    color: #d6a154;
  }
`;

const LeftSideTags = ({ tags, onChangeTag }: ITags) => {
  const onClickChangeTag = (target: EventTarget) => {
    if (!(target instanceof HTMLLIElement)) return;

    const id = target.dataset.id;
    onChangeTag(id as string);
  };

  return (
    <StyledAside>
      <h2>Tags</h2>
      <ul>
        {Object.keys(tags).map((key) => (
          <li
            key={key}
            data-id={key}
            onClick={({ target }) => onClickChangeTag(target)}
          >
            <span>{key}</span>
            <span> </span>
            <span>({tags[key]})</span>
          </li>
        ))}
      </ul>
    </StyledAside>
  );
};

export default LeftSideTags;
