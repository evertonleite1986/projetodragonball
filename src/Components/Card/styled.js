import styled from 'styled-components';

export const CardArea = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: 200ms;
  height: 23rem;
  overflow: hidden;
  transition: all 0.5s;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-filter: drop-shadow(20px 15px 10px rgba(0,0,0,.5));
    filter: drop-shadow(20px 15px 10px rgba(0,0,0,.5));
    
  }
`;

export const CardImg = styled.img`
  width: 15rem;
  height: 18rem;
  object-fit: cover;
`;

export const Name = styled.h3`
  color: #e76a24;
  text-align: center;
  padding: 0.5rem;
  background-color: #ffffff;
  font-size: 1.3em;
`;
