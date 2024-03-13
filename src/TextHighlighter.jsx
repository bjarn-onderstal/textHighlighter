import { Component, createElement } from "react";

import { HighlightedText } from "./components/HighlightText";

export class TextHighlighter extends Component {
    render() {
        return <HighlightedText 
        query={this.props.query}
        inputText={this.props.inputText} 
        classNameHighlight={this.props.classNameHighlight}
        wordsCaseSensitive={this.props.wordsCaseSensitive}
        divider={this.props.divider}
        />;
    }
}
