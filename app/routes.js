var Patient = require('./models/patient');

function getPatients(res) {
    Patient.find(function (err, patients) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(patients); // return all patients in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all patient information
    app.get('/api/patients', function (req, res) {
        // use mongoose to get all patients information in the database
        getPatients(res);
    });

    // create patient
    app.post('/api/patient', function (req, res) {
        Patient.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob,
            gender: req.body.gender,
            telephone: req.body.telephone,
            details: req.body.details
        }, function (err, todo) {
            if (err)
                res.send(err);
            res.send({});
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
