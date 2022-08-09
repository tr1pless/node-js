import ansi from 'ansi';

const cursor = ansi(process.stdout);

cursor
.beep()
.red()
.bg.blue()
.write("Hello world!")
.bg.reset()

.write('\n')