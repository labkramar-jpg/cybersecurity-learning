
const flights = [];

function addFlight(flightNumber, destination, departureTime, capacity) {
    if (
        typeof flightNumber !== "string" || !flightNumber.trim() ||
        typeof destination !== "string" || !destination.trim() ||
        typeof departureTime !== "string" || !departureTime.trim()
    ) {
        console.log("Invalid flight data");
        return;
    }

    if (!Number.isInteger(capacity) || capacity <= 0) {
        console.log("Invalid capacity");
        return;
    }

    if (flights.find(flight => flight.flightNumber === flightNumber)) {
        console.log("Flight already exists");
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

    if (typeof passengerName !== "string" || !passengerName.trim()) {
        console.log("Invalid passenger name");
        return;
    }

    if (flight.passengers.includes(passengerName)) {
        console.log("Passenger already registered");
        return;
    }

    if (flight.passengers.length >= flight.capacity) {
        console.log("Flight is full");
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
registerPassenger("XX999", "Kate");

console.log("=== Find Flight ===");

findFlightByNumber("LO123");
findFlightByNumber("XX999");

console.log("=== Show Flight Passengers ===");

showFlightPassengers("LO123");
showFlightPassengers("XX999");

console.log("=== Show All Flights ===");

showAllFlights();

console.log("=== Cancel Flight ===");

cancelFlight("FR456");
cancelFlight("XX999");

console.log("=== Verify Cancelled Flight ===");

findFlightByNumber("FR456");

console.log("=== Flights After Cancellation ===");

showAllFlights();

console.log("=== Invalid Data Tests ===");

addFlight("AB123", "Paris", "12:00", 0);
addFlight("AB124", "Paris", "12:00", -5);
addFlight("", "Paris", "12:00", 100);
addFlight("AB125", "", "12:00", 100);
addFlight("AB126", "Rome", "", 100);

registerPassenger("LO123", "");
