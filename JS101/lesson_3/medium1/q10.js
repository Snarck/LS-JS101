//Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
//What will the following function invocation return?
bar(foo());

// no.
/*
foo(param = "no") doesn't use the param in return, it returns "yes'"
bar('yes')
does yes === no?  No.
No.


*/