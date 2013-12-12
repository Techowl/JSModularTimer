JSModularTimer
==============

I made this as a brief exercise in implementing JavaScript's modular design pattern. Because of their placement inside an immediately-invoked function expression, the four variables whose names are preceded by underscores are essentially private, while the four returned methods are public. This allows a user to make effective use of the timer while reducing risk that the user will accidentally overwrite an important aspect of the timer's implementation.
