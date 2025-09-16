import { Content, Image, Name, SlideContainer, Subtitle, Title } from './SlideStyles';

export type SlideProps = {
  data: {
    section: 'profile' | 'content';
    title: string;
    subtitle?: string;
    image?: string;
    name?: string;
    content?: string;
    style?: 'dark' | 'light' | 'gradient';
  };
};

export default function Slide({ data }: SlideProps) {
  return (
    <SlideContainer
      styleType={data.style}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
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
      {data.section === 'content' && data.content && <Content>{data.content}</Content>}
    </SlideContainer>
  );
}
