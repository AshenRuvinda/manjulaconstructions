export function validateContactForm(data) {
  const errors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please provide your full name (at least 2 characters).";
  }

  const phoneValid = data.phone && /^[0-9+()-\s]{9,16}$/.test(data.phone.trim());
  const emailValid = data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());

  if (!data.phone && !data.email) {
    errors.contact = "Please provide either a phone number or an email address.";
  } else {
    if (data.phone && !phoneValid) {
      errors.phone = "Please enter a valid phone number (e.g. 077 123 4567).";
    }
    if (data.email && !emailValid) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please enter your message (at least 10 characters).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateEstimateForm(data) {
  const errors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!data.phone || !/^[0-9+()-\s]{9,16}$/.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number (e.g. 077 808 8058).";
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.projectType) {
    errors.projectType = "Please select a project type.";
  }

  if (!data.projectLocation || data.projectLocation.trim().length < 3) {
    errors.projectLocation = "Please enter your project location (e.g. Negombo, Kochchikade).";
  }

  if (!data.projectDescription || data.projectDescription.trim().length < 15) {
    errors.projectDescription = "Please provide a brief description of what you wish to build (min 15 chars).";
  }

  if (!data.consent) {
    errors.consent = "Please agree to allow Manjula Constructions to contact you regarding this inquiry.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
