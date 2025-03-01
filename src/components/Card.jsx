import { Link } from "react-router-dom";
import styled from "styled-components";
import Video from "../pages/Video";

const Container = styled.div`
  width: ${({type})=>type!=='sm' && '360px'};

  margin-bottom: ${({type})=>type==='sm' ? '10px' :'45px'};
  cursor: pointer;
  display: ${({type})=>type==='sm' && 'flex'};
  gap: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: ${({type})=>type==='sm' ? '120px' :'202px'};
  background-color: #999;
  cursor: pointer;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top:${({type})=>type==='sm'?'0px':'16px'} ;
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
display:${({type})=>type==='sm' && 'none'};

  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src="https://i.ibb.co/T161Rts/h-SHOPX.png" />

        <Details>
          <ChannelImage type={type} src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>H_SHOPX</ChannelName>
            <Info>660,908 views . 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
