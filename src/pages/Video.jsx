import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import Comments from "../components/Comments";
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color:${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
font-weight: 500;

`;
const ChannelCounter = styled.span`
margin-top:5px;

margin-bottom: 20px;
color:${({ theme }) => theme.textSoft};

`

const Description = styled.p`
font-size: 14px;

`;
const Subscribe = styled.button`
background-color:#cc1a00;
color: white;
font-weight: 500;
padding: 8px 20px;
border: none;
border-radius: 3px;
height: max-content;
cursor: pointer;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/4fndeDfaWCg?si=mwbNmNh2AgVj_MvN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,848,283 views . 12 may 2010 </Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined />
              123
            </Button>
            <Button>
              <ThumbDownAltOutlined />
              Dislike
            </Button>
            <Button>
              <ReplyOutlined />
              Share
            </Button>
            <Button>
              <AddTaskOutlined />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
            <ChannelDetail>
              <ChannelName>H_SHOPX</ChannelName>
              <ChannelCounter>200K Subscribers</ChannelCounter>
              <Description>BEST VIDEO PLATFORM FOR ALL YOUR NEEDS</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
      
      </Recommendation>
    </Container>
  );
};

export default Video;
