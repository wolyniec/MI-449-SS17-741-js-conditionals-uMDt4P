window.alert(
  'Okay so we\'re going to try something a little different tonight,' +
  'Can I have a volunteer from the audience?'
)
var name = window.prompt('You! What\'s your name?')
name = name.toLowerCase().trim()
var rando = Math.random()
if (rando > 0.5) {
  if (name === null || name === '') {
    window.alert('The silent type, eh? We can work with that I suppose')
  } else if (name === 'stuart') {
    window.alert('Stuart! Very nice. Now come up to the stage! I have something in my hand, and you\'ll have to pick one.')
    var handnum = window.prompt('1 for left, 2 for right')
    handnum = parseInt(handnum)
    if (handnum === null || isNaN(handnum)) {
      window.alert('Nothing, eh? A computer once told me the only winning move was not to play.')
    } else if (handnum === 1) {
      var newvar = window.confirm('You\'ve picked the right hand! Well, you picked the left hand but it\'s the right one for the situation. are you happy?')
      if (newvar === true) {
        window.alert('I\'m overjoyed to hear it. Now get back to your seat.')
      } else {
        window.alert('I don\'t know if you\'ll ever be happy with an attitude like that.')
      }
    } else if (handnum === 2) {
      var secnewvar = window.confirm('Do you consent to a magic trick?')
      if (secnewvar === true) {
        window.alert('It\'s a great success! You finally know what it feels like to be sawed in half (in a fun way of course!)')
      } else {
        window.alert('Why did you even stand up if you didn\'t. ah well, we\'ll just have to pull someone else from the audience')
      }
    } else if (handnum === 3) {
      window.alert('I\'m not even sure what that would correspond to here but I like your moxie!')
      window.alert('Have a lollipop, you\'ve earned it!')
    } else {
      window.alert('A crowd of ghosts overruns the theater')
    }
  } else {
    window.alert('I think we\'ll cutting the show a little short tonight')
  }
} else {
  window.alert('*big shrug*')
}
