import React from 'react';
import styled from 'styled-components';

import { ToolButton } from './MarkdownEditor.style';
import { ToolType } from '../types/ExplainedItem';
import { spliceStr, insertStr } from '../utils/common';

export interface MarkdownToolProps {
  source: string;
  explainContentRef: React.RefObject<HTMLTextAreaElement>;
  edit: boolean;
  cursorPosition?: number;
  changeState: (content: string) => void;
  changePosition: (position: number) => void;
  handleCursor: (
    position?: number,
    explainTextarea?: HTMLTextAreaElement,
  ) => void;
}

const MarkdownToolWrapper = styled.div`
  border: 1px solid #d1d5da;
  border-bottom: none;
  height: 30px;
  padding: 5px 10px;
  line-height: 30px;
`;

export default class MarkdownTool extends React.Component<MarkdownToolProps> {
  isAtBeginning = (explainContent: string, selectedStart: number) =>
    selectedStart === 0 ||
    explainContent.slice(0, selectedStart).endsWith('\n');

  isAtEnding = (explainContent: string, selectedEnd: number) =>
    selectedEnd === explainContent.length ||
    explainContent.slice(selectedEnd, explainContent.length).indexOf('\n') ===
      0;

  changeState = (source: string, position?: number) => {
    const { changeState, changePosition } = this.props;
    changeState(source);

    if (position) {
      changePosition(position);
    }
  };

  handleMdTool = (toolType: ToolType) => {
    const { edit, source, explainContentRef } = this.props;
    const explainTextarea = explainContentRef.current;
    if (edit) {
      const explainContent = source || '';
      const selectedContent = explainContent.slice(
        explainTextarea.selectionStart,
        explainTextarea.selectionEnd,
      );
      let resultContent = '';
      switch (toolType) {
        case 'b': {
          if (selectedContent) {
            const source = spliceStr(
              explainContent,
              '**',
              explainTextarea.selectionStart,
              explainTextarea.selectionEnd,
            );
            this.changeState(
              source,
              explainTextarea.selectionStart + selectedContent.length + 2,
            );
          } else {
            this.changeState(
              `${explainContent}****`,
              explainContent.length + 2,
            );
          }
          break;
        }
        case 'i':
          if (selectedContent) {
            const source = spliceStr(
              explainContent,
              '_',
              explainTextarea.selectionStart,
              explainTextarea.selectionEnd,
            );
            this.changeState(
              source,
              explainTextarea.selectionStart + selectedContent.length + 1,
            );
          } else {
            this.changeState(`${explainContent}__`, explainContent.length + 1);
          }
          break;
        case 'h': {
          !explainContent || explainContent.endsWith('\n')
            ? this.changeState(`${explainContent}#### `, 0)
            : this.changeState(`${explainContent}\n#### `, 0);
          break;
        }
        case 'list':
          if (selectedContent) {
            let resultContent: string = '';
            const listItems = selectedContent.split('\n');
            listItems.map((item) => {
              if (item) {
                resultContent += `- ${item}\n`;
              }
            });
            const source = explainContent
              .slice(0, explainTextarea.selectionStart)
              .concat(
                this.isAtBeginning(
                  explainContent,
                  explainTextarea.selectionStart,
                )
                  ? ''
                  : '\n',
                resultContent,
                this.isAtEnding(explainContent, explainTextarea.selectionEnd)
                  ? ''
                  : '\n',
                explainContent.slice(
                  explainTextarea.selectionEnd,
                  explainContent.length,
                ),
              );
            this.changeState(source);
          } else {
            !explainContent || explainContent.endsWith('\n')
              ? this.changeState(`${explainContent}- `, 0)
              : this.changeState(`${explainContent}\n- `, 0);
          }
          break;
        case 'numbered list':
          if (selectedContent) {
            let resultContent: string = '';
            const listItems = selectedContent.split('\n');
            listItems.map((item, index) => {
              if (item) {
                resultContent += `${index + 1}. ${item}\n`;
              }
            });
            const source = explainContent
              .slice(0, explainTextarea.selectionStart)
              .concat(
                this.isAtBeginning(
                  explainContent,
                  explainTextarea.selectionStart,
                )
                  ? ''
                  : '\n\n',
                resultContent,
                this.isAtEnding(explainContent, explainTextarea.selectionEnd)
                  ? ''
                  : '\n',
                explainContent.slice(
                  explainTextarea.selectionEnd,
                  explainContent.length,
                ),
              );
            this.changeState(source);
          } else {
            !explainContent || explainContent.endsWith('\n')
              ? this.changeState(`${explainContent}1. `, 0)
              : this.changeState(`${explainContent}\n1. `, 0);
          }
          break;
        case 'blockquotes':
          if (selectedContent) {
            let resultContent: string;
            if (
              explainTextarea.selectionStart === 0 ||
              selectedContent.indexOf('\n') === 0
            ) {
              resultContent = '';
            } else {
              resultContent = '\n';
            }
            const listItems = selectedContent.split('\n');
            listItems.map((item, index) => {
              if (item) {
                resultContent += `> ${item}\n`;
              }
            });
            const source = explainContent
              .slice(0, explainTextarea.selectionStart)
              .concat(
                this.isAtBeginning(
                  explainContent,
                  explainTextarea.selectionStart,
                )
                  ? ''
                  : '\n',
                resultContent,
                this.isAtEnding(explainContent, explainTextarea.selectionEnd)
                  ? ''
                  : '\n',
                explainContent.slice(
                  explainTextarea.selectionEnd,
                  explainContent.length,
                ),
              );
            this.changeState(source);
          } else {
            !explainContent || explainContent.endsWith('\n')
              ? this.changeState(`${explainContent}> `, 0)
              : this.changeState(`${explainContent}\n> `, 0);
          }

          break;
        case 'code':
          if (selectedContent) {
            const source = spliceStr(
              explainContent,
              '`',
              explainTextarea.selectionStart,
              explainTextarea.selectionEnd,
            );
            this.changeState(
              source,
              explainTextarea.selectionStart + selectedContent.length + 1,
            );
          } else {
            this.changeState(explainContent + '``', explainContent.length + 1);
          }
          break;
        case 'block code':
          if (selectedContent) {
            const source = spliceStr(
              explainContent,
              '\n```\n',
              explainTextarea.selectionStart,
              explainTextarea.selectionEnd,
            );
            this.changeState(
              source,
              explainTextarea.selectionStart + selectedContent.length + 5,
            );
          } else {
            if (!explainContent || explainContent.endsWith('\n')) {
              this.changeState(
                explainContent + '```\n\n```',
                explainContent.length + 4,
              );
            } else {
              this.changeState(
                explainContent + '\n```\n\n```',
                explainContent.length + 5,
              );
            }
          }
          break;
        case 'link':
          if (selectedContent) {
            resultContent = `${explainContent.slice(
              0,
              explainTextarea.selectionStart,
            )}[${selectedContent}]()${explainContent.slice(
              explainTextarea.selectionEnd,
              explainContent.length,
            )}`;
            this.changeState(
              resultContent,
              explainTextarea.selectionStart + selectedContent.length + 3,
            );
          } else {
            const newExplainContent = insertStr(
              explainContent,
              '[](url)',
              explainTextarea.selectionStart,
            );
            this.changeState(
              newExplainContent,
              explainContent.slice(0, explainTextarea.selectionStart).length +
                1,
            );
          }

          break;
        default:
          break;
      }
    }
  };

  render() {
    const toolArr = [
      {
        type: 'b',
        value: 'B',
        children: <b>B</b>,
      },
      {
        type: 'h',
        value: 'H',
      },
      {
        type: 'i',
        value: 'I',
        children: <i>I</i>,
      },
      {
        type: 'list',
        value: 'List',
      },
      {
        type: 'numbered list',
        value: 'Numbered List',
      },
      {
        type: 'blockquotes',
        value: 'Blockquotes',
      },
      {
        type: 'code',
        value: 'Code',
      },
      {
        type: 'block code',
        value: 'Block Code',
      },
      {
        type: 'link',
        value: 'Link',
      },
    ];
    const that = this;
    return (
      <MarkdownToolWrapper>
        {toolArr.map((tool, index) => (
          <ToolButton
            key={index}
            onClick={() => this.handleMdTool(tool.type as ToolType)}>
            {tool.children ? tool.children : tool.value}
          </ToolButton>
        ))}
        {this.props.children}
      </MarkdownToolWrapper>
    );
  }
}