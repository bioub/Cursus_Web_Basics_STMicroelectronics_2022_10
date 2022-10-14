setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// pile d'appel
// ^
// |
// |
// |                             lg          lg      lg          lg
// |st - st - st - st - lg ..⟳.. taskB ..⟳.. taskA - taskD ..⟳.. taskC XXX
// +-----0-----------------------7-----------500-----501-------------------> temps
//                      E        B           A       D           C

// file d'attente de timers (0ms) : taskB
// file d'attente de timers (7ms) :
// file d'attente de timers (500ms) : taskA - taskD
// file d'attente de timers (501ms) : taskD
// file d'attente de timers (502ms) :
// file d'attente de timers (1000ms) : taskC
// file d'attente de timers (1001ms) :

// Coté C++ (Boucle d'événement)
// do {
//   executeJS()
// } while (theyAreTaskToExecute());

// Jake Archibald - In The Loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
