import * as React from "react";

import { BackHandler } from "react-native";

import { WebView } from "react-native-webview";

export default function App() {
  const webview = React.useRef(null);

  const onAndroidBackPress = () => {
    if (webview.current) {
      webview.current.goBack();
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", onAndroidBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onAndroidBackPress);
    };
  }, []);

  return (
    <WebView
      source={{ uri: "https://google.com" }}
      style={{ marginTop: 20 }}
      ref={webview}
    />
  );
}
