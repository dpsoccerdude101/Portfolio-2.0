const TabNames = {
    projects: 'projects',
    skills: 'skills',
} as const;

type TabNames = typeof TabNames[keyof typeof TabNames];

export default TabNames;
