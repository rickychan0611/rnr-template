import * as React from 'react';
import { ScrollView, View } from 'react-native';
import Container from '~/components/Container';
import { ThemeToggle } from '~/components/ThemeToggle';
import { BlockQuote, Code, H1, H2, H3, H4, Large, Lead, Muted, P, Small } from '~/components/ui/typography';
import { useGetUserInfo } from '~/api/queryHooks/useUserQueries';
import { Text } from '~/components/ui/text';
import Button_Primary from '~/components/Button_Primary';
import Button from '~/components/Button_Primary';
import { Row } from '~/components/FlexViews';

export default function Screen() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp."

  const userInfo = useGetUserInfo()

  return (
    <>
      <Container>
        <ScrollView className='p-4'>
          <Row className='gap-4 mb-4'>
            <Button>
              Primary
            </Button>
            <Button varient='secondary'>
              Secondary
            </Button>
            <Button varient='outline'>
              outline
            </Button>
          </Row>
          <View className={`flex-col gap-4 pb-[100px] `}>
            <H1 className=''>H1 Continue</H1>
            <H2>H2 Continue</H2>
            <H3>H3 Continue</H3>
            <H4>H4  Header 4</H4>
            <BlockQuote>BlockQuote - {text}</BlockQuote>
            <Code>Code - {text}</Code>
            <Large>Large - {text}</Large>
            <Lead>Lead - {text}</Lead>
            <Muted>Muted - {text}</Muted>
            <Small>Small - {JSON.stringify(userInfo.data || {})}</Small>
            <P className='text-foreground leading-tight'>P - {text}</P>
            <Button>
              <ThemeToggle />
            </Button>
          </View>
        </ScrollView>
      </Container>
    </>
  );
}
