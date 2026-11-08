
const flights = [];

function addFlight(flightNumber, destination, departureTime, capacity) {
    if (flights.find(flight => flight.flightNumber === flightNumber)) {
        console.log("Flight already exists");
        return;
    }

    if (!Number.isInteger(capacity) || capacity <= 0) {
        console.log("Invalid capacity");
        return;
    }

    const flight = {
        flightNumber,
        destination,
        departureTime,
        capacity,
        passengers: []
    };

    flights.push(flight);
    console.log(`Flight ${flightNumber} added successfully`);
}

function cancelFlight(flightNumber) {
    const index = flights.findIndex(flight => flight.flightNumber === flightNumber);

    if (index === -1) {
        console.log("Flight not found");
        return;
    }

    flights.splice(index, 1);
    console.log(`Flight ${flightNumber} cancelled`);
}

function registerPassenger(flightNumber, passengerName) {
    const flight = flights.find(flight => flight.flightNumber === flightNumber);

    if (!flight) {
        console.log("Flight not found");
        return;
    }

    if (flight.passengers.length >= flight.capacity) {
        console.log("Flight is full");
        return;
    }

    if (flight.passengers.includes(passengerName)) {
        console.log("Passenger already registered");
        return;
    }

    flight.passengers.push(passengerName);
    console.log(`Passenger ${passengerName} registered on flight ${flightNumber}`);
}

function findFlightByNumber(flightNumber) {
    const flight = flights.find(flight => flight.flightNumber === flightNumber);

    if (!flight) {
        console.log("Flight not found");
        return;
    }

    console.log(flight);
}

function showAllFlights() {
    if (flights.length === 0) {
        console.log("No flights available");
        return;
    }

    console.log("All flights:");
    console.log(flights);
}

function showFlightPassengers(flightNumber) {
    const flight = flights.find(flight => flight.flightNumber === flightNumber);

    if (!flight) {
        console.log("Flight not found");
        return;
    }

    console.log(`Passengers on flight ${flightNumber}:`);
    console.log(flight.passengers);
}

console.log("=== Add Flights ===");

addFlight("LO123", "Warsaw", "14:30", 2);
addFlight("FR456", "London", "18:00", 3);
addFlight("LO123", "Warsaw", "14:30", 2);

console.log("=== Register Passengers ===");

registerPassenger("LO123", "Alex");
registerPassenger("LO123", "John");
registerPassenger("LO123", "Mike");
registerPassenger("LO123", "Alex");

console.log("=== Find Flight ===");

findFlightByNumber("LO123");
findFlightByNumber("XX999");

console.log("=== Show Flight Passengers ===");

showFlightPassengers("LO123");

console.log("=== Show All Flights ===");

showAllFlights();

console.log("=== Cancel Flight ===");

cancelFlight("FR456");
cancelFlight("XX999");

console.log("=== Flights After Cancellation ===");

showAllFlights();
