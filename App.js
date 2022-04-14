import {StyleSheet, View} from 'react-native';
import React from 'react';
import Context from './Context';
import Elements from './src/Component/Elements';

const App = () => {
  return (
    
      <Context>
        <Elements />
      </Context>
  
  );
};

export default App;
