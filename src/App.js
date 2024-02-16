import "./App.css";

function App() {
  const body = `## Describe the bug
  A clear and concise description of what the bug is.

  ## To Reproduce
  Steps to reproduce the behavior:
  1. Go to '...'
  2. Click on '....'
  3. Scroll down to '....'
  4. See error

  ## Expected behavior
  A clear and concise description of what you expected to happen.

  ## Acceptance Criteria
  - [ ] Please provide a markdown list of requirements that would consider this bug resolved

  ## Screenshots
  If applicable, add screenshots to help explain your problem.

  ## Additional context
  Add any other context about the problem here.

  ## Resolution
  To be filled in by the person working on the ticket - please provide a short summary of the resolution`;

  return <textarea>{body}</textarea>;
}

export default App;
