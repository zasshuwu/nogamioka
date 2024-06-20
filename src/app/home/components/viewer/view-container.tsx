import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import RequestCode from "./request-code";

import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/github-dark.css';

export default function ViewContainer({ title, children }: { title: string, children: React.ReactNode }) {
  const fullpath = usePathname();
  const pathnames = fullpath.split('/').filter(path => path)
  const [code, setCode] = useState('')

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
      <FaReact></FaReact>&nbsp;{title}.tsx
    </h1>
    <div className="p-1 flex items-center text-primary/50">
      <span>{pathnames.map((path) => path + (title.length > 0 ? ' > ' : null))}&nbsp;</span>
      <span className="flex items-center"><FaReact></FaReact>&nbsp;{title}.tsx</span>
    </div>
    <RequestCode title={title} setCode={setCode}></RequestCode>
    <div className="p-4 overflow-auto">
      <pre>
        <code className="language-typescript">
          <HighlightedCode></HighlightedCode>
        </code>
      </pre>
    </div>
    {code.length < 1 ? children : null}
  </div>
}