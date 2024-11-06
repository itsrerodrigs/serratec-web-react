import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const FotoMembro = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 40px;
  margin-left: 10%;
  
    @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 0; 
    padding: 20px; 
  }
`;
export const Membro = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;

  @media (max-width: 600px) {
    gap: 10px; 
  }
`;

export const ImagemMembro = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover{
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }

`;

export const Descricao = styled.div`
  font-size: 0.9rem;
  color: #555;
  font-size: larger;
  font-family: Arvo, serif;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Nome = styled.span`
  font-family: Arvo, serif;
  font-weight: bold;
  color: #555;
`

export const GithubIcon  = styled(FontAwesomeIcon) `
    color: #333;
    font-size: 1.5em;
    display: block;
    text-align: center;
    margin-top: 10px;
    transition: color 0.3s ease;
    &:hover{
        color: #000;
    }
    @media (max-width: 600px) {
        font-size: 1.2em;
  }
`;
