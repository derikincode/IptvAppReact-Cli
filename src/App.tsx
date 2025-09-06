import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  useEffect(() => {
    // Hide splash screen after app loads
    const timer = setTimeout(() => {
      // SplashScreen.hide(); // Uncomment when splash screen is implemented
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <AppNavigator />
    </>
  );
};

export default App;