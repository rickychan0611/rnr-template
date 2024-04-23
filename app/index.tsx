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
          <View className='border rounded-s border-foreground'>
            <Text
              className='font-[mi-800] text-5xl text-primary-foreground leading-normal'>H1 Header 1</Text>
          </View>
          <H2 className='text-primary-foreground'>H2 Header 2食屎狗</H2>
          <H3 className='text-primary-foreground'>H3  Header 3食屎狗</H3>
          <H4 className='text-primary-foreground'>H4  Header 4食屎狗</H4>
          <BlockQuote className='text-primary-foreground'>BlockQuote食屎狗 - {text}</BlockQuote>
          <Code className='text-primary-foreground'>Code食屎狗 - {text}</Code>
          <Large className='text-primary-foreground'>Large食屎狗 - {text}</Large>
          <Lead className='text-primary-foreground'>Lead 食屎狗- {text}</Lead>
          <Muted className='text-primary-foreground'>Muted食屎狗 - {text}</Muted>
          <Small className='text-primary-foreground'>Small食屎狗 - {text}</Small>
          <P className='text-primary-foreground leading-tight'>P食屎狗 - {text}</P>
          <Button>
            <ThemeToggle />
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}
