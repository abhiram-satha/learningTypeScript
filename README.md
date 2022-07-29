# typeScript
Learning TypeScript via Udemy course


Section 1: Getting Started
Section 2: TypeScript Basics & Basic Types
    - Objects 
    - Arrays
    - Enum
    - Union Types
    - Alias
    - Void
    - Function Types
    - Unknown Type


Section 3: Complier
    - tsc --init to create a tsconfig.json file which will convert all ts files to js and not just app.js
    - tsc -w in terminal will go into watch mode which will convert ts to js file when a change is detected
    - To prevent a file from auto-compiling you would need to add it on the tscong file after the closing brackets enter, works the came way for include 
        - can specify folders in addition to files
    
    ```
    "exclude": ["path to file name"],
    "include": ["path to file name"]
    ```

Section 4: TypeScript & Modern JavaScript