import React, {Component} from 'react';
import styled from 'styled-components';

import "./styles.css";

const User = styled.div`
    padding: 10px;
    border: 1px solid maroon;

`;


export class UserItem extends Component {
    render() {
        return (
            <User>
                <div className="User__index">#{this.props.index}</div>
                <div className="User__name">Name: {this.props.name}</div>
                <div className="User__phone">Phone: {this.props.phone}</div>
                <label>
                    Admin:
                </label>
                <input
                    type="checkbox"
                    checked={this.props.isAdmin}
                    onChange={() => this.props.onStatusChange(this.props.id)} />
            </User>
        );
    }
}