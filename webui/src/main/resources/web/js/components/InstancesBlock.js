/*
 * Copyright (c) 2012-2014 Snowplow Analytics Ltd. All rights reserved.
 *
 * This program is licensed to you under the Apache License Version 2.0, and
 * you may not use this file except in compliance with the Apache License
 * Version 2.0.  You may obtain a copy of the Apache License Version 2.0 at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the Apache License Version 2.0 is distributed on an "AS
 * IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied.  See the Apache License Version 2.0 for the specific language
 * governing permissions and limitations there under.
 */
'use strict';

var React = require('react');
var Dropzone = require('react-dropzone');

var GuruActions = require('../actions');
var InstanceList = require('./InstanceList');
var JsonInput = require('./JsonInput');

/**
 * Whole left side
 */
module.exports = React.createClass({
    onDrop: function(files) {
        GuruActions.instancesAdded(files);
        this.setState({
            message: 'Keep dragging!'
        })
    },
    setDragging: function () {
        this.setState({
            dragging: true
        })
    },
    unsetDragging: function () {
        this.setState({
            dragging: false
        })
    },

    // React methods
    getInitialState: function () {
        return {
            dragging: false,
            message: 'Drag some JSONs here'
        };
    },
    render: function () {
        return (
            <div className='jsons'>
                <h2>JSON instances</h2>
                <div onDragOver={this.setDragging} onDragLeave={this.unsetDragging} onDrop={this.unsetDragging}>
                    <Dropzone onDrop={this.onDrop} style={{'width': 'auto'}}>
                        <div className="message">
                            { this.state.dragging === true ? "I hope it is not a Bluray rip" : this.state.message }
                        </div>
                    </Dropzone>

                    <JsonInput />
                    <InstanceList instances={this.props.instances} />

                </div>
            </div>
        );
    }
});
