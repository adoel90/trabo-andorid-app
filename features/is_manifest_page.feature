Feature: Page Manifest ?


Scenario: Berhasil menampilkan List Tanggal di bawah Component Toolbar Search
    Given You have choosen & clicked "Product" in page Manifest List
    When you inside page Search & choosen product
    Then apps run api : {{url}}/manifest/operation-dates/A-0921014
    And get all of list dates
    And component dropdownlist save these dates with default date is "first date in Array", so list data "time" can got it & appear
    And components button/border-radius view can appear with data "time"
    And apps run api : ../manifest/A-09229850?date=2018-08-20&time=12:00 AM {date: "first date in Array data", time: "first time in Array data" }  
    And component Card "Manifest List" Detail can appear 






















Scenario: Berhasil menampilkan list of Manifest based on "user_code"

Scenario: Berhasil menampilkan list of Manifest

Scenario: Berhasil melakukan transaction detail 

Scenario: [Component Date Picker ] Berhasil dapat activity/operational based on product & date


