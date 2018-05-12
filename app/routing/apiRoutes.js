var friendsArray = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friendslist", function (req, res) {
       res.json(friendsArray);
    });


    app.post("/api/friendslist", function (req, res) {
        console.log(req.body.scores)

        var newScores = req.body.scores;
        var scoresArray = [];
        var match = 0;

        //sort through the friends array
        for (var i = 0; i < friendsArray.length; i++) {
            var comparedScore = 0;
            //sort through and compare the scores for each potential match
            for(var j = 0; j < newScores.length; j++) {
                comparedScore += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newScores[j])));
            }

            scoresArray.push(comparedScore);
        }
        //see which comparedScore is the best match for the newFriend
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[match]){
                match = i;
            }
        }
        console.log(scoresArray);

        var newMatch = friendsArray[match];
        res.json(newMatch);

        friendsArray.push(req.body);

    });
};

