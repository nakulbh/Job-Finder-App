import { useState } from "react";
import { SafeAreaView, Text, ScrollSafeAreaView, SafeAreaSaf, SafeAreaVieweAreaView } from "react-native";
//SafeAreaView is like a <div> tag and <Text> i s like <p> tag

import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';
import {
    NearbyJobCard, Popularjobs, ScreenHeaderBtn,Welcome
} from '../components'



const Home = () => {
    const router = useRouter();



    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor:COLORS.lightWhite
        }}>
          <Stack.Screen

          options={{
            headerStyle: {backgroundColor:COLORS.lightWhite},
            headerShadowVisible :false,
            headerLeft: () => {
                <ScreenHeaderBtn iconurl={icons.menu} dimensions="60%" />
            },

            headerRight: () => {
                <ScreenHeaderBtn iconurl={icons.profile} dimensions="100%" />
            }
          }
          }
          
          />
        </SafeAreaView>
    )
}

export default Home;