import React, { Component } from 'react';
import { ReactiveBase, CategorySearch } from '@appbaseio/reactivesearch';

class App extends Component {
    render() {
        return (
        <ReactiveBase
        app="band-name-search"
        credentials="fBHGxspkl:638536db-9420-4528-b99a-a40c4a0ea2b3"
        >
            <CategorySearch
            componentId="searchbox"
            dataField="bandName"
            categoryField="bandName.keyword"
            placeholder="Search for band names!"
            autoSuggest={true}
            fuzziness={0}
            />
        </ReactiveBase>
        );
    }
}

export default App;