$(document).ready(function () {



    var infinityCollectorGame = {
        // stones to be chosen

        stonesToClick: {

            powerStone: {
                picture: "power.png",
                value: 0
            },
            mindStone: {
                picture: "mind.png",
                value: 0
            },
            soulStone: {
                picture: "soul.png",
                value: 0
            },
            realityStone: {
                picture: "reality.png",
                value: 0
            },
        },

        // variables

        numberInPlay: 1,
        userScore: 0,
        wins: 0,
        losses: 0,

        // game initializers $
        setupGame: function () {
            this.userScore = 0;
            //here we pick a random number from our values property in our stone objects
            for (item in this.stonesToClick) {
                this.stonesToClick[item].value = randNum(1, 12);
            }
            // generate random number in play
            this.numberInPlay = randNum(19, 120)

            function randNum(min, max) {
                var x = Math.floor(Math.random() * (max - min + 1)) + min;
                return x;
            }
            $("#number-in-play").text(this.numberInPlay)

            $("#powerStone").on("click", function () {
                infinityCollectorGame.userScore = infinityCollectorGame.userScore + infinityCollectorGame.stonesToClick.powerStone.value
                $("#user-score").text(infinityCollectorGame.userScore)
                infinityCollectorGame.updatePage()
            })

            $("#mindStone").on("click", function () {
                infinityCollectorGame.userScore = infinityCollectorGame.userScore + infinityCollectorGame.stonesToClick.mindStone.value
                $("#user-score").text(infinityCollectorGame.userScore)
                infinityCollectorGame.updatePage()
            })

            $("#realityStone").on("click", function () {
                infinityCollectorGame.userScore = infinityCollectorGame.userScore + infinityCollectorGame.stonesToClick.realityStone.value
                $("#user-score").text(infinityCollectorGame.userScore)
                infinityCollectorGame.updatePage()
            })

            $("#soulStone").on("click", function () {
                infinityCollectorGame.userScore = infinityCollectorGame.userScore + infinityCollectorGame.stonesToClick.soulStone.value
                $("#user-score").text(infinityCollectorGame.userScore)
                infinityCollectorGame.updatePage()
            })

        },
        updatePage: function () {
            if (this.userScore > this.numberInPlay) {
                alert("you lose")
                this.setupGame()
                this.losses++
                $(".loss-number-item").text(this.losses)
            }
            else if (this.userScore === this.numberInPlay) {
                alert("You win")
                this.setupGame()
                this.wins++
                $(".win-number-item").text(this.wins)
            }

        },

    }

    // get html put together and link jquery library 

    // user score to update every time (stone) is clicked on.

    // number in play updated on page load



    // document.ready

    // 

    infinityCollectorGame.setupGame();
});