  import type { CapacitorConfig } from '@capacitor/cli';

  const config: CapacitorConfig = {
    appId: 'io.ionic.starter',
    appName: 'UTNFRA',
    webDir: 'www',
    plugins: {
      SplashScreen: {
        launchShowDuration: 0,
        launchAutoHide: false,
        backgroundColor: "#ffffffff",
        androidSplashResourceName: "splash",
        androidScaleType: "FIT_CENTER",
        showSpinner: false,
        androidSpinnerStyle: "large",
        iosSpinnerStyle: "small",
        spinnerColor: "#999999",
        splashFullScreen: false,
        splashImmersive: false,
        layoutName: "launch_screen",
        useDialog: false,
      },
    },
  };

  export default config;
