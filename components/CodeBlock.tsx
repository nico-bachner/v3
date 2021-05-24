export interface CodeBlockProps {
    language?: string;
    file?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, file, children }) => {
    if (language || file) {
        return (
            <div>
                <div className="flex justify-between">
                    <p className="uppercase">{language}</p>
                    <p>{file}</p>
                </div>
                <pre className="relative px-4 py-2 overflow-x-scroll border rounded">
                    <code>{children}</code>
                </pre>
            </div>
        );
    }

    return (
        <pre className="relative px-4 py-2 overflow-x-scroll border rounded">
            <code>{children}</code>
        </pre>
    );
};

export default CodeBlock;
