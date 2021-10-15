var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    wrapperClassName: 'typeText',
    cursorClassName: 'typeCursor'
});

typewriter.typeString('<font size="+3">Mohammed@Al-Kalbani:~$ </font>')
    .typeString('<font size="+3">Penetration Tester</font>')
    .pauseFor(1000)
    .deleteChars(18)
    .typeString('<font size="+3">Red Team Operator</font>')
    .pauseFor(1000)
    .deleteChars(17)
    .typeString('<font size="+3">Guru @ HTB</font>')
    .pauseFor(1000)
    .start();
