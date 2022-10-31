const idMakerAud = idGenerator();
const idMakerBtn = idGenerator();
const audioSrcs = [
  "./project-source-folder/Cymbal 14.wav",
  "./project-source-folder/Hat 11.wav",
  "./project-source-folder/Kick 7.wav",
  "./project-source-folder/Percussion 12.wav",
  "./project-source-folder/Shakers_StayOnBeat (34).wav",
  "./project-source-folder/Snare 13.wav",
  "./project-source-folder/Tom 10.wav",
  "./project-source-folder/Shakers_StayOnBeat (25).wav",
  "./project-source-folder/Kick 16.wav",
];

const buttonsArr = document.getElementsByTagName("button");

Array.from(buttonsArr).map(function (button) {
  button.setAttribute("id", idMakerBtn.next().value);
});

audioSrcs.map(function (audio) {
  const aud = document.createElement("audio");

  aud.setAttribute("src", audio);
  aud.setAttribute("autoplay", "false");
  aud.setAttribute("id", "a" + idMakerAud.next().value);

  document.body.append(aud);
});

document.addEventListener("click", audioPlayClick);
document.addEventListener("keypress", audioPlayKey);

function audioPlayClick(event) {
  let target = event.target.closest("button");

  if (target) {
    let audio = document.getElementById("a" + target.id);
    audio.play();
  }
}

function audioPlayKey(event) {
  const key = event.code.slice(-1, 4);

  Array.from(buttonsArr).map(function (button) {
    if (key == button.firstChild.textContent) {
      let audio = document.getElementById("a" + button.id);
			button.focus();
      audio.play();
    }
  });
}

function* idGenerator() {
  let start = 0;
  while (start <= 9) {
    ++start;
    yield start;
  }
}
