import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { CodeBlockProps } from "../types/main";
import OneDark from "../assets/oneDark";

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const child = React.isValidElement(props.children) ? props.children : null;

  if (!child) {
    return null;
  }

  const matches = child.props.className.match(/language-(?<lang>.*)/);

  return (
    <Highlight
      {...defaultProps}
      code={child.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={OneDark}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
