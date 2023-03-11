import React from 'react';
import styled from 'styled-components';

// Props 타입 정의
interface Props {
    title: string;
    url: string;
    margin?: string; // margin props 추가
}

// 스타일드 컴포넌트 생성
const StyledTitle = styled.a<Props>`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -5%;
    text-decoration: none; // a tag의 기본 밑줄 스타일 해제
    color: inherit; // a tag의 기본 색상 상속
    margin: ${props => props.margin}; // margin props 적용
`;

// Props를 받아와서 title을 보여주는 컴포넌트 생성
const CustomTitle: React.FC<Props> = ({ title, url, margin }) => {
    // title을 클릭하면 url로 이동하는 함수
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // 기본 동작 방지
        window.location.href = url; // url로 이동
    };

    return (
        <StyledTitle onClick={handleClick} margin={margin}>
            {title}
        </StyledTitle>
    );
};

export default CustomTitle;
