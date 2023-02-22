import { useState } from 'react';
import Share from 'react-native-share';
import { hello } from '@acme/expo-settings';
import { Button, CheckListScreen, JSONTree } from '../../src';

export default function ExpoSettingsScreen() {
  const [result, setResult] = useState<any>(() => hello());

  return (
    <CheckListScreen checkId="EXPO-SETTINGS">
      <JSONTree data={{ result }} />
    </CheckListScreen>
  );
}
