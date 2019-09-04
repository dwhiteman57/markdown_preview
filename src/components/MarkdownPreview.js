import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import Header from './Header';



class MarkdownPreview extends Component {
    state={
        markdown:'**Enter Markdown in the text-box and see the output**\n\nHeading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in Spain.\n\n'
    }

    updateMarkdown = markdown => {
        this.setState({markdown});
    }

    render() {
        const { markdown } = this.state;

        return (
            <div>
                <Header />
                <div>
                    <textarea className="box left"
                        value={markdown}
                        onChange={(e) => this.updateMarkdown(e.target.value)}
                        placeholder="Start your markdown here..."
                    />
                </div>
                <div className="box right">
                    <Markdown options={{ forceBlock: true }}>
                        {markdown}
                    </Markdown>
                </div>
            </div>
        )
    }
}

export default MarkdownPreview;
