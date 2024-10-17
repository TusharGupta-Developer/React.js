# Password Generator

This is a simple password generator application built with React that allows users to generate random passwords with customizable options, such as the length of the password, inclusion of numbers, and special characters. The password can be copied to the clipboard with a single click.

## Features

- **Password Length**: Users can specify the desired password length using a slider (from 1 to 100 characters).
- **Number Inclusion**: Option to include numbers in the password.
- **Special Character Inclusion**: Option to include special characters in the password.
- **Copy to Clipboard**: One-click copy of the generated password to the clipboard.
- **Auto Password Generation**: The app automatically generates a new password when any option is changed.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript Hooks**:
  - `useState`: Manages state (password, length, options).
  - `useCallback`: Optimizes the password generation function.
  - `useEffect`: Automatically regenerates the password when the user changes the settings.
  - `useRef`: Used to reference the password input for clipboard interaction.

