import { useFonts } from 'expo-font';
import { MessageCircleHeart } from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '~/components/Container';
import { API } from '~/api/supabaseAPI';
import { ThemeToggle } from '~/components/ThemeToggle';
import { Button } from '~/components/ui/button';
// import { Text } from '~/components/ui/text';
import { BlockQuote, Code, H1, H2, H3, H4, Large, Lead, Muted, P, Small } from '~/components/ui/typography';

export default function Screen() {
  const insets = useSafeAreaInsets();

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp."

  // React.useEffect(() => {
  //   (async () => {
  //     const res = await API.getCountries()
  //   })()
  // }, [])

  return (
    <Container>
      <ScrollView className=''>
        <View className={`flex-col gap-4 pb-[100px] `}>
          <H1 className='border rounded-s border-foreground'>Continue</H1>
          <H2>Continue</H2>
          <H3>Continue</H3>
          <H4>H4  Header 4</H4>
          <BlockQuote>BlockQuote - {text}</BlockQuote>
          <Code>Code - {text}</Code>
          <Large>Large - {text}</Large>
          <Lead>Lead - {text}</Lead>
          <Muted>Muted - {text}</Muted>
          <Small>Small - {text}</Small>
          <P className='text-foreground leading-tight'>P - {text}</P>
          <Button>
            <ThemeToggle />
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}
