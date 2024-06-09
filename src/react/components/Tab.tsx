import React from "react"
import classnames from "classnames"

interface TabProps {
    tabs: Array<{
        id: string;
        label: string;
    }>;
    activeTab: string;
    onTabClick: (id: string) => void;
    children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ tabs, activeTab, onTabClick, children }) => {
    return (
        <div className="tab-container w-full bg-[#1e1e1e] border-t-2 border-[#232323]">
            <ul className="tab">
                {tabs.map((tab) => (
                    <li key={tab.id}>
                        <button
                            type="button"
                            className={classnames(
                                { "active-tab": tab.id === activeTab },
                                "text-[#cccccc] p-2"
                            )}
                            onClick={() => {
                                onTabClick(tab.id)
                            }}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="tab-content">{children}</div>
        </div>
    );
};

export default Tab;