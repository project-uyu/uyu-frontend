import styled from 'styled-components';

// border component의 props 타입 정의
interface BorderProps {
    height: string;
    margin?: string; // margin 값을 설정할 수 있도록 props에 추가
}

// styled-components를 활용한 border component 생성
const Border = styled.div<BorderProps>`
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 0;
    height: ${(props: BorderProps) => props.height}; // props로 전달받은 height 값으로 height 설정
    margin: ${(props: BorderProps) =>
        props.margin || '0'}; // props로 전달받은 margin 값이 있으면 해당 값으로 설정하고, 없으면 0으로 설정
`;

export default Border; // 다른 파일에서 import해서 사용할 수 있도록 export
