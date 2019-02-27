
Feature: Page Payment ?

    Page ini dari button "Proceed to payment" yang ada di page "New Booking - Fill"
    
    
Scenario: Berhasil menampilkan "Full Payment List"

Scenario: Berhasil menampilkan 3 option cara pembayaran sesuai : ("5b. Payment - Full Payment")
    Given you are near "Select Payment Status", you click "action Bottom Sheet/ Make full payment"
    When clicked text "Make full payment"
    Then suddenly muncul option type pembayaran secara "cash" & jumlah yang harus di bayar 
    And muncul juga option pembayaran secara "Bank Transfer & Retail Payment" 
    And muncul juga option pembayaran secara "Credit card"


Scenario: Berhasil menampilkan "Page special for Deposit Payment" dengan 3 option cara pembayaran sesuai : ("5e. Payment - Partial Payment Fill")
    Given you are near "Select Payment Status", you click "Make A deposit payment"
    When clicked "Make A deposit payment"
    Then suddenly muncul Page/Modal juga option type pembayaran secara "cash" & jumlah yang harus di bayar 
    And muncul juga option pembayaran secara "Bank Transfer & Retail Payment" 
    And muncul juga option pembayaran secara "Credit card"












Scenario: Berhasil melakukan Payment Credit-card

Scenario: Berhasil melakukan Payment VA "Invoice"

Scenario: Berhasil melakukan Payment cash

Scenario: Berhasil melakukan Payment VA Iframe "Invoice dari Web Iframe"

Scenario: Balance

Scenario: With draw

Scenario: Berhasil melakukan "Refund"

Scenario: Berhasil menampilkan list Credit Card Charge

Scenario: Berhasil melakukan "Refund Credit Card"

