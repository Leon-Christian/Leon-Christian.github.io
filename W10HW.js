let nextButton = document.querySelector("button.next");
let theTxt = document.querySelector('section');

let x = 0
function next() {
    x = x + 1
    if (x === 1) {
        theTxt.textContent = "The Medium is the message by Marshall McLuhan, a Canadian Philosopher explains and explores the difference between mediums and media. And how these differences create and catalyze change in the technological realm"
    } else if (x === 2) {
        theTxt.textContent = "For example a ~medium~ such as a phone host multiple different forms of ~media~ such as songs, photos, videos, etc. McLuhan says that"
    } else if (x === 3) {
        theTxt.textContent = "'...All media work us over completely. They are so pervasive in their personal, political, economic, aesthetic, psychological, moral, ethical, and social consequences that they leave no part of us un- touched, unaffected, unaltered. The medium is the massage. Any understanding of social and cultural change is impossible without a knowledge of the way media work as environments.' Thus media does not exist outside of the effects of the medium that it is presented in but rather the effect the media has on us in intrinsically tied to the medium through which it is presented"
        nextButton.textContent = "Done"
    } 
}

nextButton.addEventListener('click', next);


theTxt.addEventListener('mouseover' color);

function color() {
theTxt.textContent.style.color = 'green';

}






