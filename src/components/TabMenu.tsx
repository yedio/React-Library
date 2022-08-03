import React from 'react';
import styled from 'styled-components';

interface Props {
  TITLE: string[];
  selectedMenu: string;
  handleTabMenuSelect: (type: string) => void;
}

export default function TabMenu({
  TITLE,
  selectedMenu,
  handleTabMenuSelect,
}: Props) {
  return (
    <Wrapper menuLength={TITLE.length}>
      {TITLE.map((title: string, idx: number) => (
        <li
          key={idx}
          onClick={() => handleTabMenuSelect(title)}
          className={selectedMenu === title ? 'active' : ''}
        >
          <TabLink className={selectedMenu === title ? 'active' : ''}>
            {title}
          </TabLink>
        </li>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul<{ menuLength: number }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 5px;

  li {
    width: 20%;
    width: ${props => (100 / props.menuLength).toString() + '%'};

    &.active {
      cursor: default;
      pointer-events: none;
    }
  }
`;

const TabLink = styled.a`
  display: block;
  padding: 5px 20px 6px;
  width: 100%;
  color: ${({ theme }) => theme.subColor};
  border-radius: 3px;
  text-align: center;
  line-height: 1.4;
  word-break: keep-all;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #f4f4f4;
    color: #333;
    transition: all 0.3s ease;
  }

  &.active {
    color: ${({ theme }) => theme.whiteColor};
    background: ${({ theme }) => theme.mainColor};
    transition: all 0.3s ease;
  }
`;
