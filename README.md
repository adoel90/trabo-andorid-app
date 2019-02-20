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


# Waiting List "Kerjaan":
* What the color for status name transaction ? 
* What ? Border bottom in React Native is hard !!!
* Normalized data "Available Product with Date" ==> DONE, Anwar has thrown those data.
* Benerin pantekan "Token" ente dul :
    - /middleware-saga/booking_calendar_available.js
    - /middleware/booking_product_date_available.js
* Icon in "Date Picker"
* Functional "Date Picker"
* Add border bottom in "BookingDateDetailScreen.js"
* Add utils "Fungsi 'Rupiah'"
    - http://numeraljs.com/#format



    /* Fungsi formatRupiah */
		function formatRupiah(angka, prefix){
			var number_string = angka.replace(/[^,\d]/g, '').toString(),
			split   		= number_string.split(','),
			sisa     		= split[0].length % 3,
			rupiah     		= split[0].substr(0, sisa),
			ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
			// tambahkan titik jika yang di input sudah menjadi angka ribuan
			if(ribuan){
				separator = sisa ? '.' : '';
				rupiah += separator + ribuan.join('.');
			}
 
			rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
			return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
		}


        ==> rupiah.value = formatRupiah(this.value, 'Rp. ');

    **************************8

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