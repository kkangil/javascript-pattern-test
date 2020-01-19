describe('createReservation(passenger, flight)', function () {
  it('주어진 passenger를 passengerInfo 프로퍼티에 할당한다.', function () {
    var testPassenger = {
      firstName: '길동',
      lastName: '홍'
    };

    var testFlight = {
      number: '3443',
      carrier: '대한항공',
      destination: '울신'
    };

    var reservation = createReservation(testPassenger, testFlight);
    expect(reservation.passengerInformation).toBe(testPassenger);
  })
});