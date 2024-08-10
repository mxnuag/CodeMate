import React from 'react'

function Result({srcCode}) {
    return (
        <div>
            <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
                <h2
                    className="text-lg font-semibold mb-2 text-white">
                    Result
                </h2>
                <iframe
                    className="bg-gray-500 w-full h-60 border border-gray-500 rounded-md bg-text-white"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Result