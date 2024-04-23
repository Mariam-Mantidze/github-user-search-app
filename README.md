# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6).

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

### Screenshot

![](./preview.jpg)

### Links

- Live Site URL: [https://github-user-search-nj7o9zo9j-mariams-projects-33424897.vercel.app/]

## Features

- **Dynamic Theme Switching**: Users can toggle between light and dark themes, enhancing visual comfort and accessibility.
- **Live API Integration**: Fetches user data directly from the GitHub API as usernames are inputted, displaying user-specific information such as followers, following, repositories, and more.
- **Error Handling**: Gracefully handles errors such as non-existent usernames, displaying user-friendly error messages.
- **Responsive Design**: Ensures that the app looks good on both desktops and mobile devices.

## Technologies Used

- **React**: Leverages functional components with hooks for managing component lifecycle and state.
- **TypeScript**: Ensures type safety, enhancing code reliability and maintainability.
- **Styled-Components**: Facilitates component-specific styling and dynamic theming, using themes stored in context.
- **useEffect Hook**: Demonstrates effective use of React's useEffect to perform side effects in the application, including API calls on component mount.
- **GitHub API**: Integrates with the GitHub API to fetch user data based on usernames.

## Examples

### Search Functionality

Upon entering a username in the search bar, the application queries the GitHub API and displays relevant information about the user:

```jsx
<InputContainer
  getUser={getUser}
  status={status}
  setUserName={setUserName}
/>

<MainCard userData={userData} />
```

### Theme Switching

The theme can be toggled from light to dark mode using a simple switch, affecting all components dynamically:

```jsx
Copy code
<Header setMode={setMode} mode={mode} />
```

### Takeaways

- **React useEffect Hook**: I've become adept at using useEffect for handling side effects, such as API calls upon component mount or in response to state changes.
- **Dynamic Theming with Styled-Components**: Implementing theme switching taught me how to effectively use theming within styled-components, allowing for more flexible and maintainable styling.
- **TypeScript Proficiency**: I've become more proficient in using TypeScript in a React project, appreciating its power in providing type safety and helping prevent runtime errors before code execution.
- **API Integration**: The project solidified my ability to work with external APIs, understanding asynchronous operations and handling responses and errors gracefully.
