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
    .typeString('<font size="+3">CTF Player</font>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<font size="+3">Bug Hunter</font>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<font size="+3">A HTB Player</font>')
    .pauseFor(1500)
    .start();
