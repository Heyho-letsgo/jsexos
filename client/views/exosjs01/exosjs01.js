var firstName = "Andy", lastName = "Baudin", completeName, x = 3, y = 3;

Template.hello.helpers({

    completeName: firstName + " " + lastName,
    fuckName: firstName,
    zobName: lastName,
    z: parseInt(x) + parseInt(y)

});
Template.hello.helpers({

    sayhello: function () {
        var ohai = "Hello world";
        alert(ohai)
    },

    affiche: function () {
        var firstName = "Paul", lastName = "ochon", completeName, x = 6, y = 10;
        return completeName = firstName + " " + " " + lastName + (z = parseInt(x) + parseInt(y)) + firstName
    },

    afficheFirstName: function () {
        var firstName = "Paul", lastName = "ochon", completeName, x = 6, y = 10;
        return firstName
    },

    retourneResult: function () {
        var arg01, arg02, result;
        arg01 = prompt("");
        arg02 = prompt("");
        result = parseInt(arg01) + parseInt(arg02);
        return parseInt(result)
    }




});


Template.hello.events({
    'click .afficheMessage': function showMsg() {
        alert('Et une première fonction, une !');
    },


    'click .afficheMessage2': function showMsg() {
        alert('Et une deuxieme fonctions, deux !');
    },


    'click .afficheMessage3': function showMsg() {
        alert('Et une troisième fonctions, trois !');
    },


    'click .afficheMessage4': function showMsg() {
        alert('Et une quatrième fonctions');
    }
});
