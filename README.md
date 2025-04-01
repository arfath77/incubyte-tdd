# Incubyte TDD - String Calculator

This project implements a string calculator function (`add`) using Test-Driven Development (TDD). The function is located in `src/app.js`.

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your system. You can download it from [Node.js Official Website](https://nodejs.org/).
2. **npm**: Node.js comes with npm (Node Package Manager). Verify installation by running:

```bash
node -v
npm -v
```

## Setup Instructions

1. **Clone the repository**:

```bash
git clone <repository-url>
cd incubyte-tdd
```

2. **Install dependencies**:

```bash
npm install
```

## Running Tests

**This project uses Jest as the testing framework.**

**Run the tests using the following command:**

```bash
npm test
```

## Example Test Command Output

```bash
 FAIL  src/app.test.js
  Add Function
    ✓ Return 0 for an empty string (2 ms)
    ✓ Return the number itself for a single value
    ✓ Add numbers separated by commas
    ✓ Add numbers separated by newlines and commas
    ✓ Handle custom delimiters
    ✕ Handle negative numbers correctly (1 ms)
    ✕ Handle multiple negative numbers correctly
    ✓ Numbers bigger than 1000 should be ignored (1 ms)
    ✓ Delimiters can be of any length
    ✓ Allow multiple delimiters
    ✓ Allow multiple delimiters of different lengths (1 ms)
```
