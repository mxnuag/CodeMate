import React, { useCallback, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Result from './components/Result';
import Preloader from './components/Preloder';  // Adjust the path if necessary

function App() {
  const [loading, setLoading] = useState(true);
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Duration of the preloader
    const preloaderDuration = 5000;
    // Duration for fading out the preloader
    const fadeOutDuration = 1000;
    // Total duration before showing the content
    const totalDuration = preloaderDuration + fadeOutDuration;

    const timer = setTimeout(() => {
      setLoading(false);
      // Delay the show content transition to ensure preloader fades out
      setTimeout(() => setShowContent(true), fadeOutDuration);
    }, preloaderDuration);

    return () => clearTimeout(timer);
  }, []);

  const onChangeHtml = useCallback((value) => setHtml_Edit(value), []);
  const onChangeCss = useCallback((value) => setCss_Edit(value), []);
  const onChangeJavaScript = useCallback((value) => setJs_Edit(value), []);

  const srcCode = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `;

  return (
    <div className="relative">
      {loading ? (
        <Preloader />
      ) : (
        <div className={`fade-in ${showContent ? 'show' : ''} absolute inset-0`}>
          {/* Navbar */}
          <Navbar />

          {/* Main content */}
          <div className="p-2">
            {/* Editor */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              {/* HTML Editor */}
              <div className="bg-[#282c34] p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
                <CodeMirror
                  className="text-xl border-gray-700 border"
                  value={html_edit}
                  height="342px"
                  theme="dark"
                  extensions={[html(true)]}
                  onChange={onChangeHtml}
                />
              </div>

              {/* CSS Editor */}
              <div className="bg-[#282c34] p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
                <CodeMirror
                  className="text-xl border-gray-700 border"
                  value={css_edit}
                  height="342px"
                  theme="dark"
                  extensions={[css(true)]}
                  onChange={onChangeCss}
                />
              </div>

              {/* JavaScript Editor */}
              <div className="bg-[#282c34] p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
                <CodeMirror
                  className="text-xl border-gray-700 border"
                  value={js_edit}
                  height="342px"
                  theme="dark"
                  extensions={[javascript(true)]}
                  onChange={onChangeJavaScript}
                />
              </div>
            </div>

            <Result srcCode={srcCode} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
