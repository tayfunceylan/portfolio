let sectionCounter = 1;

export const getSectionCounter = () => `${(sectionCounter++).toString().padStart(2, '0')}.`;
