import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import RequestCode from "./request-code";

import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/github-dark.css';
import { VscLoading } from "react-icons/vsc";
import Logo from "@/components/logo";

export default function ViewContainer({ title, children }: { title: string, children: React.ReactNode }) {
  const fullpath = usePathname();
  const pathnames = fullpath.split('/').filter(path => path)
  const [code, setCode] = useState('')
  const [isLoadingCode, setIsLoadingCode] = useState(false)

  useEffect(() => {
    setCode('')
  }, [title])

  const HighlightedCode = () => {
    useEffect(() => {
      hljs.configure({ languages: ['typescript'] });
      hljs.registerLanguage('typescript', typescript)
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: hljs.highlight(code, { language: 'typescript' }).value }} />;
  };

  return <div>
    <h1 className="p-2 text-lg bg-white/10 w-fit flex items-center text-green-500">
      <Logo className="w-4 h-4"></Logo>&nbsp;{title}.tsx
    </h1>
    <div className="p-1 flex items-center text-primary/50">
      <span>{pathnames.map((path) => path + (title.length > 0 ? ' > ' : null))}&nbsp;</span>
      <span className="flex items-center"><Logo className="w-4 h-4"></Logo>&nbsp;{title}.tsx</span>
    </div>
    <RequestCode isLoadingCode={isLoadingCode} setIsLoadingCode={setIsLoadingCode} title={title} setCode={setCode}></RequestCode>
    <div className="p-4 overflow-auto">
      {isLoadingCode ? <VscLoading className="animate-spin text-green-500" size={200} /> : <pre>
        <code className="language-typescript">
          <HighlightedCode></HighlightedCode>
        </code>
      </pre>}

    </div>
    {code.length < 1 ? children : null}
  </div>
}