import React, { createContext, useEffect, useState } from 'react';
import { Platform, Appearance, StyleSheet, ColorSchemeName } from 'react-native';
import FileInput from './src/FileInput/FileInput';

type RootProps = {
  applicationId: string;
  applicationVersionId: string;
  applicationName: string;
  recordId?: string;
  initialRouteName?: string;
};

type AppContextInterface = {
  rootProps: RootProps | {},
  appearance: {
    colorScheme: ColorSchemeName,
    toggleColorScheme(): void
  }
};


export const AppContext = createContext<AppContextInterface>({
  rootProps: {},
  appearance: {
    colorScheme: Appearance.getColorScheme(),
    toggleColorScheme: () => {}
  }
});

const App = (rootProps: RootProps) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());
  const toggleColorScheme = () => setColorScheme((prev: ColorSchemeName) => prev === 'dark' ? 'light' : 'dark' );


  return (
    <AppContext.Provider value={{ rootProps, appearance: {colorScheme, toggleColorScheme} }}>
      <FileInput onChange={()=>{}}/>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  }
});

export default App;
