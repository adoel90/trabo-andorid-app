
Feature: Landing Page Booking ?

    Date-picker memiliki feature Active/ Non-Active days,
    Recent Order memiliki feature menampilkan order- order terbaru,
    Check-in memimiliki feature menampilkan detail of check-in customer

    Recent Order status "paid" berwarna : #1ea0b1
    Recent Order status "Deposit" berwarna : #f5a623

Scenario: Berhasil tampil component Date-picker 
    Given You are inside Landing Page - Booking
    When load/ inisiate page
    Then You get feature Date-picker

Scenario: Berhasil redirect ke page  "Sales Calendar - Results"
    Given After choosed product, then appear date available, and you choose one of date available
    When clicked 
    Then move to "Sales Calendar - Results"


Scenario: Berhasil tampil component Date-picker 
    Given You are inside Landing Page - Booking
    When load/ inisiate page
    Then You get feature Date-picker

Scenario: [Recent Order] - Berhasil muncul "Recent Orders" beserta button "See More"
    Given You are You are inside Landing Page - Booking
    When load/ inisiate page
    Then You get feature Recent Order
    And You get "3" list 

Scenario: [Recent Order] - Berhasil informasi menampilkan order- order terbaru 

    Given You click button "See More"
    When clicked button "See More"
    Then You move page to page of "Tab Manifest"
    And You get names of products

Scenario: List Customer Info

Scenario: [Check-in]s - Berhasil memunculkan detail Check-in
    Given You click row product
    When clicked one row
    Then You move to page Check-in detail

Scenario: [Component Dropdownlist] Berhasil memunculkan product 
    Given You click "Silahkan pilih :"
    When clicked
    Then You see list product available

#In here gw pake "TokenTest", in future ganti pake "getStorage()" Dul !!!
Scenario: [Component Dropdownlist - Technical] berhasil Date Picker sesuai dengan "Product Code" yang di pilih
    Given You choose product 
    When choosed
    Then Apps is appearing sales date available

Scenario: Berhasil menampilkan "New Booking - Fill"
    Given You clicked Button "Available" atau "Overbooking"
    




