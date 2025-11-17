/*
  === Client Script: login.js ===
  Purpose:
    - Handles basic interactivity on the login page.
    - Enables login button only when both fields are filled.
    - Provides placeholder alerts for login-related actions.
    - Drives the temporary test login dropdown and navigation to /dashboard.
*/

document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("usernameInput");
  const passwordInput = document.getElementById("passwordInput");
  const primaryLoginBtn = document.getElementById("primaryLoginBtn");

  const forgotUsernameBtn = document.getElementById("forgotUsernameBtn");
  const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
  const createAccountBtn = document.getElementById("createAccountBtn");

  const userSelect = document.getElementById("userSelect");
  const selectedUserInfo = document.getElementById("selectedUserInfo");
  const tempLoginBtn = document.getElementById("tempLoginBtn");

  // Enable/disable main login button based on both fields filled
  function updatePrimaryLoginState() {
    if (usernameInput.value.trim() && passwordInput.value.trim()) {
      primaryLoginBtn.disabled = false;
    } else {
      primaryLoginBtn.disabled = true;
    }
  }

  usernameInput?.addEventListener("input", updatePrimaryLoginState);
  passwordInput?.addEventListener("input", updatePrimaryLoginState);

  // Placeholder: main login button behavior
  primaryLoginBtn?.addEventListener("click", () => {
    alert("Login is a placeholder. Authentication logic will be added later.");
  });

  // Placeholder links
  forgotUsernameBtn?.addEventListener("click", () => {
    alert("Forgot username is a placeholder. Recovery flow will be added later.");
  });

  forgotPasswordBtn?.addEventListener("click", () => {
    alert("Forgot password is a placeholder. Recovery flow will be added later.");
  });

  createAccountBtn?.addEventListener("click", () => {
    alert("Create account is a placeholder. Registration flow will be added later.");
  });

  // Temporary login: update info box and enable temp login button
  userSelect?.addEventListener("change", () => {
    const option = userSelect.selectedOptions[0];

    if (!option || !option.value) {
      selectedUserInfo.innerHTML = "";
      tempLoginBtn.disabled = true;
      return;
    }

    const username = option.dataset.username;
    const password = option.dataset.password;
    const role = option.dataset.role;

    selectedUserInfo.innerHTML = `
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p><strong>Role:</strong> ${role}</p>
    `;

    tempLoginBtn.disabled = false;
  });

  // Temporary login button: just route to dashboard for now
  tempLoginBtn?.addEventListener("click", () => {
    // In a real app, this would set auth state / session first.
    window.location.href = "/dashboard";
  });
});
