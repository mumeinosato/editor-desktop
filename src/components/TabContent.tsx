import React from "react"
import classnames from "classnames"

interface TabContentProps {
    id: string;
    activeTab: string;
    children: React.ReactNode;
}

const TabcOntent: React.FC<TabContentProps> = ({id, activeTab, children}) => {
    return (
        <div
            id={id}
            className={classnames("tab-content-item", {
                "hidden": id !== activeTab,
            })}
        >
            {children}
        </div>
    );
};

export default TabcOntent;