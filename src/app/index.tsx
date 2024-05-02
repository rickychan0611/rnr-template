import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Container from '~/components/Container';
import { ThemeToggle } from '~/components/ThemeToggle';
import { BlockQuote, Code, H1, H2, H3, H4, H5, Interact, Large, Lead, Muted, P, Small, Subtle } from '~/components/Typography';
import { useGetUserInfo } from '~/api/queryHooks/useUserQueries';
import Button from '~/components/Button';
import { Center, ColCenter, Row, RowBetween } from '~/components/FlexViews';
import { ArrowLeft, Info } from '~/components/Icons';
import AppBarContainer from '~/components/AppBarContainer';
import { LanguageToggle } from '~/components/LanguageToggle';
import AppBar from '~/components/AppBar';
import PressableOpacity from '~/components/PressableOpacity';
import Divider from '~/components/Divider';
import Card from '~/components/Card';

const TopBar = () => {
  return (
    <>
      <AppBarContainer>
        <View className='flex-1 py-sm'>
          <H3
            className="text-white"
            numberOfLines={1}
          >
            Ricky's shop ksd kfj ldskfj d;lk
          </H3>
        </View>
        <Button icon="Store" circle />
      </AppBarContainer >
      <View className='h-3 bg-primary-800 rounded-b-full' />
    </>
  )
}

export default function Home() {
  const userInfo = useGetUserInfo()

  return (
    <>
      <TopBar />
      <ScrollView className='flex-1'>
        <View className='px-2'>
          <Card className='mt-sm'>
            <RowBetween>
              <H5>Today's order</H5>
              <PressableOpacity>
                <Interact className="text-muted">All orders</Interact>
              </PressableOpacity>
            </RowBetween>
            <Divider className="my-sm" />

            <RowBetween className='flex-1 gap-4 w-full'>

              <ColCenter className='flex-1 h-full'>
                <Subtle className="text-primary-600 w-full text-center">Pending</Subtle>
                <ColCenter className='bg-primary-100 rounded p-sm mt-sm w-full'>
                  <P className='text-primary-600'>
                    1
                  </P>
                </ColCenter>
              </ColCenter>

              <ColCenter className='flex-1 h-full'>
                <Subtle className="text-neutral-900 w-full text-center">Delivering</Subtle>
                <ColCenter className='bg-neutral-50 rounded p-sm mt-sm w-full'>
                  <P className='text-primary-600'>
                    12
                  </P>
                </ColCenter>
              </ColCenter>

              <ColCenter className='flex-1 h-full'>
                <Subtle className="text-primary-900 w-full text-center">Finished</Subtle>
                <ColCenter className='bg-neutral-50 rounded p-sm mt-sm w-full'>
                  <P className='text-primary-600'>
                    1
                  </P>
                </ColCenter>
              </ColCenter>

            </RowBetween>
          </Card>

          <Card className='mt-sm'>
            <RowBetween>
              <H5>
                Settlements
              </H5>
              <PressableOpacity>
                <Interact className='text-muted'>
                  Details
                </Interact>
              </PressableOpacity>
            </RowBetween>
            <Divider className="my-sm" />
            <Divider className="my-sm" />
          </Card>

        </View>
      </ScrollView>
    </>
  );
}
