// Trying to get multiple insert intos in one query
pool.query(`INSERT INTO Events (Event_Name, Event_Date, Event_Time, Age_Limit) VALUES ('${req.body.eventName}', '${req.body.eventDate}', '${req.body.eventTime}', '${req.body.eventAgeLimit}');`, function(error, results, fields){
    if (error) throw error;
    res.redirect("/");
});

pool.query(`INSERT INTO Event_Locations (Street_Address, City, State_Abvr, Zip_Code, Country) VALUES ('${req.body.eventStreetAddress}', '${req.body.eventCity}', '${req.body.eventState}', '${req.body.eventZipCode}', '${req.body.eventCountry}');`, function(error, results, fields){
    if (error) throw error;
    res.redirect("/");
});
