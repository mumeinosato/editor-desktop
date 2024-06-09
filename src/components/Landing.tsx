import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import { LanguageOption, languageOptions } from "../constants/languageOptions";
import Split from "react-split";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomInput from "./CustomInput";
import LanguagesDropdown from "./LanguagesDropdown";

import Tab from './Tab';
import TabContent from './TabContent';

import RunButton from "./RunButton";
import { handleRunClick } from "../utils/runcode";
import { Buffer } from "buffer";

const cppDefault = `#include <bits/stdc++.h>
using namespace std;

int main(){
  cout << "Hello World";
  return 0;
}`;

const Landing = () => {
  const [code, setCode] = useState<string>(cppDefault);
  const [customInput, setCustomInput] = useState<string>("");
  const [outputDetails, setOutputDetails] = useState("");
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[1]);
  const [activeTab, setActiveTab] = useState<string>("input");
  const [isRunning, setIsRunning] = useState<boolean>(false); 


  const onSelectChange = (sl: LanguageOption | null) => {
    if (sl !== null) { // nullでないことを確認
      console.log("selected Option...", sl);
      setLanguage(sl);
    }
  };

  const onChange = (action: string, data: string) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const updateOutput = (output: string) => {
    setOutputDetails(output)
  }

  useEffect(() => {
  }, [outputDetails]);

  const onRunClick = async () => {
    try {
      setIsRunning(true);
      updateOutput("実行中...");
      setActiveTab("output");
      const res = await handleRunClick(code, language?.id.toString(), customInput);
      if (res === false) {
        updateOutput("実行に失敗しました");
      } else if (res && res.output) {
        const temp = Buffer.from(res.output, 'base64').toString();
        updateOutput(temp);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      updateOutput("実行に失敗しました");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-col h-screen bg-[#1e1e1e]">
        <div className="flex-none flex flex-row bg-[#1e1e1e] border-b-2 border-[#232323]">
          <div>
            <RunButton onClick={onRunClick} isRunning={isRunning}></RunButton>
          </div>
          <div className="px-4 py-2">
            <LanguagesDropdown onSelectChange={onSelectChange} />
          </div>
        </div>
        <Split sizes={[75, 25]} minSize={200} className="flex h-full">
          <div className="w-full h-full">
            <CodeEditorWindow
              code={code}
              onChange={onChange}
              language={language?.value}
            />
          </div>
          <div className="w-full h-full flex flex-col">
            <Tab
              tabs={[
                { id: "input", label: "入力" },
                { id: "output", label: "出力" },
              ]}
              activeTab={activeTab}
              onTabClick={setActiveTab}
            >
              <TabContent id="input" activeTab={activeTab}>
                <div className="flex flex-col items-end px-2 mt-4">
                  <CustomInput
                    customInput={customInput}
                    setCustomInput={setCustomInput}
                  />
                </div>
              </TabContent>
              <TabContent id="output" activeTab={activeTab}>
                <div className="w-full border-2 border-[#232323] bg-[#1e1e1e] text-[#cccccc] p-2 h-56" style={{ whiteSpace: "pre-wrap" }}>
                  {outputDetails}
                </div>
              </TabContent>
            </Tab>
          </div>
        </Split>
      </div>
    </>
  );
};

export default Landing;
