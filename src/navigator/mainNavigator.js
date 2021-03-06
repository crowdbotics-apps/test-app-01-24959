import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import ArticleList213620Navigator from "../features/ArticleList213620/navigator"
import Maps213607Navigator from "../features/Maps213607/navigator"

/**
 * new navigators can be imported here
 */ import Onboarding118215843 from "../features/Onboarding118215843/navigator"
import Categories20215846 from "../features/Categories20215846/navigator"

const AppNavigator = {
  Categories20215846: { screen: Categories20215846 },
  Onboarding118215843: { screen: Onboarding118215843 },
  //@BlueprintNavigationInsertion
  ArticleList213620: { screen: ArticleList213620Navigator },
  Maps213607: { screen: Maps213607Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
