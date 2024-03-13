import { Component, createElement } from "react";
import Highlighter from "react-highlight-words";

export class HighlightedText extends Component {
    render() {
        let searchWordsArray = [];
        let divider = this.props.divider.value

        // Check if `query.value` is a string
        if (typeof this.props.query.value === 'string') {
            // If a divider is provided and it's a string, use it to split `query.value`
            if (typeof divider === 'string' && divider !== "") {
                searchWordsArray = this.props.query.value.split(divider).map(word => word.trim()).filter(word => word !== "");
            } else {
                // If no divider is provided or it's not a string, treat the entire `query.value` as a single search word
                // This assumes you might want to highlight the whole query if no divider is specified
                searchWordsArray = [this.props.query.value.trim()];
            }
        }

        return (
            <Highlighter
                searchWords={searchWordsArray}
                textToHighlight={this.props.inputText.value}
                highlightClassName={this.props.classNameHighlight.value}
                caseSensitive={this.props.wordsCaseSensitive}
            />
        );
    }
}
