export function ConflictError(message) {
    return {
      name: "ConflictError",
      message: `Conflict: ${message}`,
    };
  }
  
  export function DuplicatedEmailError() {
    return {
      name: "DuplicatedEmailError",
      message: "This email is already in use",
    };
  }
  
  export function UnauthorizedError() {
    return {
      name: "UnauthorizedError",
      message: "You need to be logged in to access this resource",
    };
  }
  
  export function NotFoundError() {
    return {
      name: "NotFoundError",
      message: "No results found",
    };
  }
  
  export function InvalidCredentialsError() {
    return {
      name: "InvalidCredentialsError",
      message: "Invalid email or password",
    };
  }
  