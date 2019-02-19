Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

  Examples:
    | day | answer |
    | Friday | TGIF |
    | Sunday | Sorry, i think today is Friday |
    | anything else! | Sorry, i think today is Friday |


Feature: Cetak Stroke Laundry ?

Scenario: Berhasil cetak stroke
    Given Nama Customer adalah "Nina", pakaiannya 3 kg, total harga Rp "18000", di ambil pada tanggal "1 Februari 2019"
    When Nina laundry
    Then Nina get stroke 