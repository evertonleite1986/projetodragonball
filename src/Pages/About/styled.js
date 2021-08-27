import styled from 'styled-components';

export const Img = styled.img`
  width: 16rem;
  height: 16rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;


export const SocialBlock = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  & a {
    color: #e76a24;

    & i {
      padding: 0 0.5rem;
      font-size: 2.5em;
      transition: 200ms;

      &:hover {
        color: #b15019;
      }
    }
  }
`;
