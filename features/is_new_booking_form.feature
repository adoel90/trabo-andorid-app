
Feature: Form New Booking Page ?

    

Scenario: Berhasil dapat response product detail & appear page of Form New Booking
    Given You was clicked product detail
    When clicked
    Then You get response json, and appear page of "Form New Booking"


Scenario: Berhasil melakukan pengisian Form New Booking dan tampil page "Payment"
    Given You finished fill the Form
    When clicked button "Proceed to Payment"
    Then application appears page of "Payment" ???



