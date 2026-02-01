/**
 * Form block view script - Interactivity API for form handling
 */
import { store } from "@wordpress/interactivity";

store("dsa/form", {
  state: {
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorText: "",
  },
  actions: {
    async submitForm(event) {
      event.preventDefault();
      const { state } = store("dsa/form");
      const form = event.target;

      // Reset state
      state.isSubmitting = true;
      state.isSuccess = false;
      state.isError = false;
      state.errorText = "";

      try {
        // Collect form data
        const formData = new FormData(form);
        formData.append("action", "dsa_form_submit");
        formData.append("nonce", form.dataset.nonce || "");
        formData.append("form_id", form.dataset.formId || "");

        // Submit via AJAX
        const response = await fetch(
          form.dataset.ajaxUrl || "/wp-admin/admin-ajax.php",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();

        if (result.success) {
          state.isSuccess = true;
          form.reset();

          // Show success message
          const successEl = form.querySelector(".dsa-form__success");
          if (successEl) {
            successEl.style.display = "block";
          }
        } else {
          state.isError = true;
          state.errorText = result.data?.message || "Something went wrong";

          // Show error message
          const errorEl = form.querySelector(".dsa-form__error");
          if (errorEl) {
            errorEl.style.display = "block";
            errorEl.textContent = state.errorText;
          }
        }
      } catch (error) {
        state.isError = true;
        state.errorText = "Network error. Please try again.";

        const errorEl = form.querySelector(".dsa-form__error");
        if (errorEl) {
          errorEl.style.display = "block";
          errorEl.textContent = state.errorText;
        }
      } finally {
        state.isSubmitting = false;
      }
    },
    clearMessages() {
      const { state } = store("dsa/form");
      state.isSuccess = false;
      state.isError = false;
      state.errorText = "";
    },
  },
  callbacks: {
    init() {
      // Add input validation styling
      const form = document.querySelector(".dsa-form form");
      if (!form) return;

      form.querySelectorAll("input, textarea, select").forEach((field) => {
        field.addEventListener("invalid", () => {
          field.classList.add("dsa-form-field--invalid");
        });

        field.addEventListener("input", () => {
          if (field.validity.valid) {
            field.classList.remove("dsa-form-field--invalid");
          }
        });
      });
    },
  },
});
