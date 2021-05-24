const CodeBlock: React.FC = ({ children }) => (
    <pre className="relative px-4 py-2 overflow-x-scroll border rounded">
        <code>{children}</code>
    </pre>
);

export default CodeBlock;
