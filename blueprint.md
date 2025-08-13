**blueprint.md**

**Project Overview:**

This project is an Angular application featuring a wizard component. The wizard will display layered images in a top section, with interactive options below that control the image display. Navigation buttons for "Next" and "Previous" will allow users to cycle through sets of options. The styling will incorporate Neumorphism for interactive elements like buttons.

**Project Features:**

*   **Wizard Component:** A standalone Angular component to house the wizard functionality.
*   **Image Display Area:** A dedicated section within the wizard to display layered images.
*   **Layered Images:** The ability to layer multiple images on top of each other in the display area.
*   **Interactive Options:** A section below the display area with options that modify the layered images, now supporting projected content.
*   **Next/Previous Navigation:** Buttons to navigate through different sets of options (managed by the parent component).
*   **Stand Options Component:** A new standalone component to display options for selecting a stand, designed to be projected into the wizard.
*   **Welcome Board Wizard Page:** A new page component that will utilize the `wizard` component and project the `stand-options` component as the initial set of options.

- Implement a step progress indicator in the Welcome Board Wizard showing the steps: 'Choose your stand', 'Select your board shape', 'Pick your acrylic', 'Define layout', 'Add message', 'Confirm order'.
- Continue refining the `selectOption` logic in `/src/app/wizard/wizard.ts` to handle more sophisticated layering (e.g., z-index, specific positions).
- Add logic to handle deselection of options and remove the corresponding image layers.
- Explore more dynamic ways to load options based on the current step or selected options.

### Future Enhancements:

*   Handle deselection of options to remove image layers.
*   Implement more sophisticated layering logic (e.g., controlling z-index, positioning).
*   Implement more dynamic option loading based on the wizard's state.
*   Add actual image URLs for the stand options in the `handleStandSelection` method of the `WelcomeBoardWizard` component.
*   Create additional option components for other steps of the wizard.

**Current Plan:** The basic wizard component structure with display, options (using content projection), and navigation areas has been created and styled. The image layering setup in the display area is complete. The Stand Options Component has been created with options and event emission. The Next and Previous navigation has been implemented in the Welcome Board Wizard Page, controlling the displayed options based on the current step. Neumorphic styling has been applied to the buttons in the Stand Options component. A simple step indicator has been added and will be replaced with a step progress indicator with named steps, including numbers for each step and visual lines connecting them.
 Neumorphic styling has been applied to the buttons in the Stand Options component.