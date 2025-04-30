"use server";

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // Here you would typically send this data to your email service
    // For now, we'll just console log it
    console.log("Form submission:", data);

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false };
  }
}
