import { useState } from 'react';
import TabNames from '../types/TabNames';

const useTabsRepo = () => {
    const [activeTab, setActiveTab] = useState<TabNames>(TabNames.projects);
    

    return { activeTab,setActiveTab };
};

export default useTabsRepo;
