/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

true && console.log("moo"); // the left side is true, so the right side gets executed
false && console.log("moo moo?"); // the left side is false, so the right side is skipped
true || console.log("hello friend"); // the left side is true, so the right side is not executed
false || console.log("bye friend"); // the left side is false, so the right side is executed

// AND stops evaluating if the left side is true and OR only continues evaluating if the left side is false
