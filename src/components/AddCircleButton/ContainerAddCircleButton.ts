import styled from 'styled-components'

export const ContainerAddCircleButton = styled.button<{position?: string, bottom?: string, right?: string}>`
    height: 3.5rem;
    width: 3.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};

    border: none;
    border-radius: 50px;

    position: ${(props) => props.position};
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};

    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transition: 0.1s ease all;
    }
`
