import {
  Content,
  Image,
  ImgWithTextContainer,
  LeftImg,
  LeftImgsContainer,
  Name,
  SlideContainer,
  Subtitle,
  TextRightImg,
  Title,
} from './SlideStyles';

export type SlideProps = {
  data: {
    section: 'profile' | 'content';
    title: string;
    subtitle?: string;
    image?: string;
    coverImages?: string[];
    name?: string;
    content?: string;
    contents?: string[];
    style?: 'dark' | 'light' | 'gradient';
  };
};

export default function Slide({ data }: SlideProps) {
  return (
    <SlideContainer
      styleType={data.style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title>{data.title}</Title>
      {data.subtitle && <Subtitle>{data.subtitle}</Subtitle>}
      {data.section === 'profile' && (
        <>
          {data.image && <Image src={data.image} alt={data.name} />}
          {data.name && <Name>{data.name}</Name>}
        </>
      )}
      {data.coverImages?.length ? (
        <ImgWithTextContainer>
          <LeftImgsContainer>
            {data.coverImages.map((image, index) => (
              <LeftImg
                key={index}
                src={image}
                alt={data.title}
                cover={data.coverImages?.length < 1}
              />
            ))}
          </LeftImgsContainer>
          <TextRightImg>
            {data.contents?.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </TextRightImg>
        </ImgWithTextContainer>
      ) : (
        data.section === 'content' && data.content && <Content>{data.content}</Content>
      )}
    </SlideContainer>
  );
}
