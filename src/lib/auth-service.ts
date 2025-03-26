// This is a mock authentication service for demonstration purposes
// In a real application, you would integrate with a proper authentication system

// Store token in localStorage
const setToken = (token: string, remember = false) => {
  localStorage.setItem("auth_token", token);

  // If remember me is checked, set a longer expiry
  if (remember) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30); // 30 days
    localStorage.setItem("auth_expiry", expiryDate.toISOString());
  } else {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 1); // 1 day
    localStorage.setItem("auth_expiry", expiryDate.toISOString());
  }
};

// Mock login function
export const loginUser = async (
  email: string,
  password: string,
  remember = false,
): Promise<void> => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For demo purposes, accept any email/password
      // In a real app, this would validate credentials against a backend

      // Generate a mock token
      const token = `mock_token_${Math.random().toString(36).substring(2)}`;

      // Store token
      setToken(token, remember);

      // Store user info
      localStorage.setItem("user_email", email);

      resolve();
    }, 1000); // Simulate network delay
  });
};

// Mock register function
export const registerUser = async (
  name: string,
  email: string,
  password: string,
): Promise<void> => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For demo purposes, always succeed
      // In a real app, this would create a user in the backend

      resolve();
    }, 1500); // Simulate network delay
  });
};

// Mock Google login function
export const loginWithGoogle = async (): Promise<void> => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For demo purposes, always succeed
      // In a real app, this would open Google OAuth flow

      // Generate a mock token
      const token = `google_mock_token_${Math.random().toString(36).substring(2)}`;

      // Store token
      setToken(token, true);

      // Store user info
      localStorage.setItem("user_email", "google.user@example.com");

      resolve();
    }, 1500); // Simulate network delay
  });
};

// Logout function
export const logoutUser = (): void => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("auth_expiry");
  localStorage.removeItem("user_email");
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("auth_token");
  const expiry = localStorage.getItem("auth_expiry");

  if (!token || !expiry) {
    return false;
  }

  // Check if token has expired
  const expiryDate = new Date(expiry);
  if (expiryDate < new Date()) {
    // Token expired, clear it
    logoutUser();
    return false;
  }

  return true;
};

// Get current user
export const getCurrentUser = (): { email: string } | null => {
  if (!isAuthenticated()) {
    return null;
  }

  const email = localStorage.getItem("user_email");

  if (!email) {
    return null;
  }

  return { email };
};
