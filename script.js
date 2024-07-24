document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Show the command line
    document.getElementById('command-line').style.display = 'block';

    // Start the hacking sequence
    startHackingSequence(); 
});

function startHackingSequence() {
    var commandLine = document.getElementById('command-line');
    var lines = [
        'run mainframe...',
        'execute firewall...',
        'delete database...',
        'copy network...',
        'paste server...',
        'hack password...',
        'bypass security...',
        'access protocol...',
        'download data...',
        'upload file...',
        'Mainframe hacked!'
    ];

    var typewriter = new Typewriter(commandLine, {
        loop: false,
        delay: 50,
        cursor: '▮'
    });

    lines.forEach((line, index) => {
        typewriter.typeString(line)
            .pauseFor(500);
        if (index < lines.length - 1) {
            typewriter.deleteAll()
                .pauseFor(500);
        }
    });

    typewriter.start();
}