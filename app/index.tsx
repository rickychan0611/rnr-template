import { useFonts } from 'expo-font';
import { MessageCircleHeart } from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '~/components/Container';
import { ThemeToggle } from '~/components/ThemeToggle';
import { Button } from '~/components/ui/button';
// import { Text } from '~/components/ui/text';
import { BlockQuote, Code, H1, H2, H3, H4, Large, Lead, Muted, P, Small } from '~/components/ui/typography';

export default function Screen() {
  const insets = useSafeAreaInsets();

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp."
  return (
    <Container>
      <ScrollView className=''>
        <View className={`flex-col gap-4 pb-[100px] `}>
          <H1 className='border rounded-s border-fg'>H1 Header 1</H1>
          <H2 >H2 Header 2食屎狗</H2>
          <H3 >H3  Header 3食屎狗</H3>
          <H4 >H4  Header 4食屎狗</H4>
          <BlockQuote >BlockQuote食屎狗 - {text}</BlockQuote>
          <Code >Code食屎狗 - {text}</Code>
          <Large >Large食屎狗 - {text}</Large>
          <Lead >Lead 食屎狗- {text}</Lead>
          <Muted >Muted食屎狗 - {text}</Muted>
          <Small >Small食屎狗 - {text}</Small>
          <P className='text-fg leading-tight'>P食屎狗 - {text}</P>
          <Button>
            <ThemeToggle />
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}
