# sentry-test

The project reproduces the sentry error since the imports of sentry packages:
- Clone the repo
- Run "npm i"
- Run "ng serve"

> Compiling the project as it is with "ng serve", the project compiles well. ⚠️ Since I didn't included the back-end of the project, it might result some errors if you try to navigate in the browser, but it shouldn't be a problem for our concers since the error is right from the imports at "ng serve".

❌ To reproduce the error, simply uncomment import lines 13 and 14 in the main.ts file and run again "ng serve", you will find the error:
  
"Error: error TS2318: Cannot find global type 'BigInt'."

Then in the browser I got "Failed to compile", and in the browser console:
"\x1B[91merror\x1B[0m\x1B[90m TS2318: \x1B[0mCannot find global type 'BigInt'.\r\n"

> ⚠️⚠️ I tried to start a fresh new project with all the same npm packages from package.json, compilation doesn't make any error ! So, in some way, this is my code that makes the sentry imports crach the compilation, even if I don't encounter any error without sentry imports. Here are some of the features I implement in the project
- Angular material CDK
- Angular material
- Lazy loading
- NGRX
- JWT
