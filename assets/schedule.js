const firebaseConfig = {
    apiKey: "AIzaSyA0xdeKZaJ64iDKVVj2gaKQU14gVN0AIXs",
    databaseURL: "https://train-scheduler-e1777.firebaseio.com",
    projectId: "train-scheduler-e1777",
  };
// could not get firebase to link with what i was typing in


  firebase.initializeApp(firebaseConfig);

var database = firebase.database;
var trainName = "";
var destination = "";
var nextArrivalTime = 0;
var frequency = 0;


$("#submit-button").on("click", function (event) {

    event.preventDefault();
    trainName = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    nextArrivalTime = $("#next-arrival-time-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    
    console.log(trainName);
    
    database.ref().push({
        trainName: trainName,
        destination: destination,
        nextArrivalTime: nextArrivalTime,
        frequency: frequency,  
    });

//Missing the collected input (above) and port it to firebase 


    database.ref.on("child_added", function (snapshot) {
        snapshotValue = snapshot.val();
        // console.log(snapshotValue.trainName)
    });
});

// (childSnapshot.val());

// console.log(name, number, destination, time, frequency);

//Missing time formatting

//Missing ("Current time: " + moment().format("HHmm"));

// Needed to append data to table

// was going to add a reset functionality