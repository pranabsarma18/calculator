# 🧮 Calculator App

A basic calculator built using **HTML, CSS, and JavaScript** as part of
the Odin Foundation Course.

------------------------------------------------------------------------

## 🚀 Features

-   Perform basic operations:
    -   Addition
    -   Subtraction
    -   Multiplication
    -   Division
-   Dynamic display updates based on user input
-   Supports chained calculations (e.g. `12 + 7 - 1`)
-   Prevents consecutive operator inputs
-   Clear button to reset calculator state
-   Automatically starts a new calculation after displaying a result
-   Rounds results up to 4 decimal places
-   Button press animation for better user experience

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   HTML
-   CSS (Flexbox for layout)
-   JavaScript (DOM manipulation & event handling)

------------------------------------------------------------------------

## 🧠 How It Works

The calculator is built using a **state-based approach**:

-   Stores:
    -   First number
    -   Second number
    -   Selected operator
    -   Result
-   Uses a central `operate()` function to perform calculations
-   Updates the display dynamically based on user actions
-   Manages input flow to mimic real calculator behavior

------------------------------------------------------------------------

## 📂 Project Structure

    project/
    │── index.html
    │── styles.css
    │── scripts.js

------------------------------------------------------------------------

## ⚠️ Limitations

-   Does not support decimal input yet
-   No keyboard input support
-   Not responsive (desktop-focused)

------------------------------------------------------------------------

## 📌 Future Improvements

-   Add decimal (`.`) support
-   Add backspace functionality
-   Add keyboard support
-   Improve UI styling

------------------------------------------------------------------------

## 🎯 Learning Outcome

This project helped in understanding:

-   DOM manipulation
-   Event handling
-   State management in JavaScript
-   Building interactive UI logic

------------------------------------------------------------------------

## 🙌 Acknowledgement

Built as part of **The Odin Project -- Foundations Course**
