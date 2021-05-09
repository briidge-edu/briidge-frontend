export default interface ITutorSignup {
    // Step 1 - LoginDetailsForm
    email: string,
    password: string,
    password_confirmation: string,
    // Step 2 - TutorPDForm
    name: string,
    gender: string,
    education: string,
    languages: string[],
    bio: string,
    // Step 3 - LocationForm
    locations: string[],
    // Step 4 - TuitionPreferences
    lessonMode: string,
    subjects: string[],
    priceRange: number | null,
}