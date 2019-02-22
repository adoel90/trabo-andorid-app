# Use Node v10.15.1

# Partner Trabo Web Application
* https://partner.trabo.co/booking/new/A-09213790

# ADB Magic (https://stackoverflow.com/questions/7789826/adb-shell-input-events)
* To show Developer Menu in Android Device :

    - adb shell input keyevent 82

# Add react-native-restart 
* https://github.com/avishayil/react-native-restart#rn-040
* Setting "build.gradle" inside folder "/android/app/build.gradle"
* Don't forget "react-native link"

# Add styled-component to our React Component
* https://github.com/styled-components/awesome-styled-components#components

# Add input Text Field 
* https://github.com/n4kz/react-native-material-textfield

# Add Spinner 
* https://github.com/xinthink/react-native-material-kit


# Add input Phone Number
* https://github.com/thegamenicorus/react-native-phone-input

# Gradle Clean
* commands: 
    1.cd (path to project/android folder) 
    2.gradlew clean ==> ./gradlew clean
    3. cd .. 
    4.react-native run-android

* https://stackoverflow.com/questions/42570067/react-native-always-gradlew-clean-before-run-react-native-run-android

# Add Features from Ecosytem with "styled-component" - Layout In React Native
* https://www.styled-components.com/ecosystem
* https://medium.com/building-with-react-native

# Add Picker with "styled-component"
* https://github.com/agutoli/react-styled-select

# Normilized your "state" with :
* https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
* https://github.com/paularmstrong/normalizr

# Add responsive in React Native App
* https://github.com/marudy/react-native-responsive-screen
* https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c
* https://facebook.github.io/react-native/docs/layout-props.html


# Waiting List "Kerjaan":
* What the color for status name transaction ? 
* What ? Border bottom in React Native is hard !!!
* Benerin pantekan "Token" ente dul :
    - /middleware-saga/booking_calendar_available.js
    - /middleware/booking_product_date_available.js
* Icon in "Date Picker"
* Functional "Date Picker"
* Add border bottom in "BookingDateDetailScreen.js"
* In page "New Booking", buat list Additional Product interface yang DINAMIS / Normalized data Additional Product
* In page "New Booking", buat "NORMALIZED ALL DATA" 
* Font family TextField Form Booking saat pengisian di buat "Roboto"

* Add utils "Fungsi 'Rupiah'" ==> DONE
    - http://numeraljs.com/#format
* Normalized data "Available Product with Date" ==> DONE, Anwar has thrown those data.

     {/* 
        <Toolbar
          leftElement="menu"
          centerElement="Searchable"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          rightElement={{
              menu: {
                  icon: "more-vert",
                  labels: ["item 1", "item 2"]
              }
          }}
          onRightElementPress={ (label) => { console.log(label) }}
        />

        */}