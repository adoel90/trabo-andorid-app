// import Reactotron from 'reactotron-react-native'


// const { hostname } = url.parse(NativeModules.SourceCode.scriptURL)

// Reactotron
//   .configure({host: '192.168.43.91'}) // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .connect() // let's connect!

import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

// Reactotron
const reactotron = Reactotron
  .configure({
    name: "Trabo App",
    host: '192.168.43.91'
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: { // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
    .use(reactotronRedux())
    .use(sagaPlugin())
  .connect();

  export default reactotron